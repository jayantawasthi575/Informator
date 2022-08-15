using InformerReport.DatabaseContext;
using InformerReport.Model;
using InformerReport.Repository;
using InformerReport.ViewModel;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using System.Security.Claims;

namespace InformerReport.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReporterController : ControllerBase
    {
        private ApplicationDbContext _context;
        private IReportInfo Reporters;
        public ReporterController(ApplicationDbContext context,IReportInfo reportInfo)
        {
            _context = context;
            Reporters = reportInfo;
        }

        [HttpPost]
        public IActionResult AddReport([FromForm]ReportModel Rep)
        {
            var identity = HttpContext.User.Identity as ClaimsIdentity;
            var userClaims = identity.Claims;
            string EmailAddress = userClaims.FirstOrDefault(o => o.Type == ClaimTypes.Email)?.Value;
            UserRegister user = _context.UserRegisters.FirstOrDefault(o => o.Email == EmailAddress);

            if (Reporters.AddReport(Rep, user.Id))
            {
                return Ok();
            }
            else
            {
                return NotFound();
            }
        }
    }
}
