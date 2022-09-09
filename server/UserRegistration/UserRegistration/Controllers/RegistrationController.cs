using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using UserRegistration.DatabaseContext;
using UserRegistration.Model;

namespace UserRegistration.Controllers
{
    [EnableCors("MyCorsPolicy")]
    [Route("api/[controller]")]
    [ApiController]
    public class RegistrationController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        public RegistrationController(ApplicationDbContext context)
        {
            _context = context;
        }
        [HttpPost]
        public IActionResult RegisterUser([FromBody] UserRegister users)
        {
            users.Role = "Informer";
            _context.UserRegisters.Add(users);
            _context.SaveChanges();
            return Ok();
        }
        
    }
}
