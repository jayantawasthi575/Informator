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
using Microsoft.Extensions.Logging;

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
        private readonly ILogger _logger;
        public ReporterController(ApplicationDbContext context, IReportInfo reportInfo,ILogger<ReporterController> logger)
        {
            _context = context;
            Reporters = reportInfo;
            _logger = logger;
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
                _logger.LogInformation("Report Added");
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
            _logger.LogWarning("Report Deleted");
            Reporters.DeleteReportById(id);
            return Ok();
        }

        [HttpGet("getallreports")]
        public IEnumerable<AllReportModel> GetAllReport()
        {
            return Reporters.GetAllReportsForHome();
        }

        [HttpPut("increaselike/{id}")]
        public IActionResult IncreaseLike(int id)
        {
            var rep=_context.Reports.FirstOrDefault(c => c.Id == id);
            rep.Like++;
            _context.SaveChanges();
            return Ok();
        }

        [HttpPut("decreaselike/{id}")]
        public IActionResult DecreaseLike(int id)
        {
            _logger.LogWarning("like decreases");
            var rep = _context.Reports.FirstOrDefault(c => c.Id == id);
            rep.Like--;
            _context.SaveChanges();
            return Ok();
        }

        [HttpGet("viewreportbyid/{id}")]
        public IEnumerable<ReportModelId> ViewReport(int id)
        {
            var identity = HttpContext.User.Identity as ClaimsIdentity;
            var userClaims = identity.Claims;
            string EmailAddress = userClaims.FirstOrDefault(o => o.Type == ClaimTypes.Email)?.Value;
            UserRegister user = _context.UserRegisters.FirstOrDefault(o => o.Email == EmailAddress);
            var rslt = _context.Reports.Where(c => c.Id == id).Include(per => (per as Report).Reporter).ToList();
            var rsl = rslt.Select(c => new ReportModelId()
            {
                Id = c.Id,
                ReportName = c.ReportName,
                Heading = c.Heading,
                Content = c.Content,
                Tags = c.Tags,
                ReporterId = c.ReporterId,
                FirstName = c.Reporter.FirstName,
                LastName = c.Reporter.LastName,
                Photo = c.Photo,
                Like = c.Like,
                UserFirstName=user.FirstName,
                UserLastName=user.LastName,
                Comments = _context.Comments.Where(c => c.InfoReportId == id).Select(cp => new Commen()
                {
                    Id=cp.Id,
                    FirstName=cp.FirstName,
                    LastName=cp.LastName,
                    Message=cp.Message
                }).ToList()
            });
            return rsl;
        }
        [HttpPost("AddComment")]
        public IActionResult AddComment([FromBody] Comment comm)
        {
            _logger.LogInformation("Comment Added");
            _context.Comments.Add(comm);
            _context.SaveChanges();
            return Ok();
        }
        
    }
}
