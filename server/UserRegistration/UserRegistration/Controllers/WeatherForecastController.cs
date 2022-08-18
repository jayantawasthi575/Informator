using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UserRegistration.DatabaseContext;
using UserRegistration.Model;

namespace UserRegistration.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<WeatherForecastController> _logger;
        private readonly ApplicationDbContext _context;

        public WeatherForecastController(ILogger<WeatherForecastController> logger,ApplicationDbContext conte)
        {
            _logger = logger;
            _context = conte;
        }

        [HttpGet]
        public IEnumerable<WeatherForecast> Get()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateTime.Now.AddDays(index),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            })
            .ToArray();
        }

        [HttpGet("userregist")]
        public IActionResult GetUser()
        {
           UserRegister userr=_context.UserRegisters.FirstOrDefault(c=>c.Id==2);
           List<Report> reportColl = _context.Reports.Where(c => c.ReporterId == 2).ToList();
            //userr.ReportColl = reportColl;
           return Ok(userr); 

        }
    }
}
