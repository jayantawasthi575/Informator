using InformerReport.DatabaseContext;
using InformerReport.Model;
using InformerReport.Repository;
using InformerReport.ViewModel;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using System.Security.Claims;
using Microsoft.AspNetCore.Cors;
using System.Collections.Generic;
using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;

namespace InformerReport.Controllers
{
    [EnableCors("MyCorsPolicy")]
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class ReporterController : ControllerBase
    {
        private ApplicationDbContext _context;
        private IReportInfo Reporters;
        public ReporterController(ApplicationDbContext context, IReportInfo reportInfo)
        {
            _context = context;
            Reporters = reportInfo;
        }

        [HttpPost]
        public IActionResult AddReport([FromForm] ReportModel Rep)
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

        [HttpGet]
        public IEnumerable<Report> GetReport()
        {
            var identity = HttpContext.User.Identity as ClaimsIdentity;
            var userClaims = identity.Claims;
            string EmailAddress = userClaims.FirstOrDefault(o => o.Type == ClaimTypes.Email)?.Value;
            UserRegister user = _context.UserRegisters.FirstOrDefault(o => o.Email == EmailAddress);

            IEnumerable<Report> reports = Reporters.GetReport(user.Id);
            return reports;
        }

        [HttpGet("{id}")]
        public IEnumerable<Report> GetReportByReportId(int id)
        {
            var identity = HttpContext.User.Identity as ClaimsIdentity;
            var userClaims = identity.Claims;
            string EmailAddress = userClaims.FirstOrDefault(o => o.Type == ClaimTypes.Email)?.Value;
            UserRegister user = _context.UserRegisters.FirstOrDefault(o => o.Email == EmailAddress);

            IEnumerable<Report> reports = Reporters.GetReportByReporterId(id,user.Id);
            return reports;
        }

        [HttpPut("updatereportbyid/{id}")]
        public IActionResult UpdateReportById(int id,[FromForm]ReportModel rep)
        {
            if(Reporters.UpdateReport(id,rep))
            {
                return Ok();
            }
            else
            {
                return NotFound();
            }
        }
        [HttpDelete("deletereportbyid/{id}")]
        public IActionResult DeleteReportById(int id)
        {
            Reporters.DeleteReportById(id);
            return Ok();
        }

        [HttpGet("getallreports")]
        public IEnumerable<AllReportModel> GetAllReport()
        {
            return Reporters.GetAllReportsForHome();
        }
    }
}
