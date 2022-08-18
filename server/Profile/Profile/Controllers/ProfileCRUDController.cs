using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Profile.DatabaseContext;
using Profile.Model;
using Profile.Repository;
using Profile.ViewModel;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;

namespace Profile.Controllers
{
    [EnableCors("MyCorsPolicy")]
    [Route("api/[controller]")]
    [ApiController]
    public class ProfileCRUDController : ControllerBase
    {
        private ApplicationDbContext _context;
        private IProfileInfo Profiler;
        public ProfileCRUDController(ApplicationDbContext context, IProfileInfo profileInfo)
        {
            _context = context;
            Profiler = profileInfo;
        }

        [HttpPut("updateprofilebyid/{id}")]
        public IActionResult UpdateProfileById(int id, [FromForm] UserRegisterModel rep)
        {
            if (Profiler.UpdateProfile(id, rep))
            {
                return Ok();
            }
            else
            {
                return NotFound();
            }
        }


        [HttpGet("getprofilebyid")]
        public IEnumerable<UserRegisterModels> GetProfileById()
        {

            var identity = HttpContext.User.Identity as ClaimsIdentity;
            var userClaims = identity.Claims;
            string EmailAddress = userClaims.FirstOrDefault(o => o.Type == ClaimTypes.Email)?.Value;
            UserRegister user = _context.UserRegisters.FirstOrDefault(o => o.Email == EmailAddress);
            IEnumerable<UserRegisterModels> rslt = Profiler.Users(user.Id);
            return rslt;
        }

    }
}
