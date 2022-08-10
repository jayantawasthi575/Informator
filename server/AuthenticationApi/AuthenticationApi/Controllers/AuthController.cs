using AuthenticationApi.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;

namespace AuthenticationApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private IConfiguration _config;
        public AuthController(IConfiguration config)
        {
            _config = config;
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
                return Ok(new { token = token });
            }

            return response;
        }
        private string GenerateJsonWebToken(User user)
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
              expires: DateTime.Now.AddMinutes(30),
              signingCredentials: credentials);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
        private User Authenticate(Login userLogin)
        {
            var currentUser = Data.Users.FirstOrDefault(o => o.Email.ToLower() == userLogin.Email.ToLower() && o.Password == userLogin.Password); 

            if (currentUser != null)
            {
                return currentUser;
            }

            return null;
        }
    }
}
