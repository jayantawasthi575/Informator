using AuthenticationApi.DatabaseContext;
using AuthenticationApi.Model;
using AuthenticationApi.Repository;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;

namespace AuthenticationApi.Controllers
{
    [EnableCors("MyCorsPolicy")]
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private IConfiguration _config;
        private readonly ApplicationDbContext _context;
        private readonly IRepo _Repo;
        private readonly ILogger _logger;
        public AuthController(IConfiguration config, ApplicationDbContext context,IRepo Repo,ILogger<AuthController> logger)
        {
            _config = config;
            _context = context;
            _Repo = Repo;
            _logger = logger;
        }
        [AllowAnonymous]
        [HttpPost]
        public IActionResult Login([FromBody] Login userLogin)
        {
            var user = Authenticate(userLogin);
            IActionResult response = Unauthorized();
            if (user == null)
            {
                return NotFound();
            }
            if (user != null)
            {
                var token = GenerateJsonWebToken(user);
                _logger.LogInformation("User LoggedIn");
                return Ok(new { token = token });
            }

            return response;
        }
        private string GenerateJsonWebToken(UserRegister user)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);


            var claims = new[]
            {
                new Claim(ClaimTypes.NameIdentifier, user.FirstName),
                new Claim(ClaimTypes.Email, user.Email),
                new Claim(ClaimTypes.GivenName, user.LastName),
                new Claim(ClaimTypes.Role, user.Role)
            };


            var token = new JwtSecurityToken(_config["Jwt:Issuer"],
              _config["Jwt:Audience"],
              claims,
              expires: DateTime.Now.AddMinutes(3000),
              signingCredentials: credentials);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
        private UserRegister Authenticate(Login userLogin)
        {
            var currentUser = _Repo.AuthUser(userLogin); 

            if (currentUser != null)
            {
                return currentUser;
            }

            return null;
        }
        [Authorize(Roles = "Admin")]
        [HttpGet("Admin")]
        public IEnumerable<UserRegister> CheckAdmin()
        {
            _logger.LogInformation("Admin is Here");
            return _context.UserRegisters.ToList();
        }
    }
}
