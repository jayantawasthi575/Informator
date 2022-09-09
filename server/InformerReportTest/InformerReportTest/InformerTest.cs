using InformerReport.DatabaseContext;
using InformerReport.Model;
using InformerReport.Repository;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using NUnit.Framework;
using System.Collections.Generic;
using System.Linq;

namespace InformerReportTest
{
    public class InformerTest
    {
        private static DbContextOptions<ApplicationDbContext> dbContextOptions = new DbContextOptionsBuilder<ApplicationDbContext>()
            .UseInMemoryDatabase(databaseName: "AuthDataTest")
            .Options;
        ApplicationDbContext context;
        IReportInfo repoInfo;
        private readonly IWebHostEnvironment _webHostEnvironment;
        [OneTimeSetUp]
        public void Setup()
        {
            context = new ApplicationDbContext(dbContextOptions);
            context.Database.EnsureCreated();

            SeedDatabase();

            //publishersService = new PublishersService(context);
            repoInfo = new ReportInfo(context,_webHostEnvironment);
        }

        [TestCase(2)]
        public void GetReport(int id)
        {
            var result = repoInfo.GetReport(id);
            Assert.IsNotNull(result);
            Assert.AreEqual(result.FirstOrDefault().ReportName, "PM Sanna Marin");
            Assert.AreEqual(result.FirstOrDefault().Tags, "Politics");
        }
        [TestCase(19,2)]
        public void GetReportByReporterId(int id1,int id2)
        {
            var result = repoInfo.GetReportByReporterId(id1, id2);
            Assert.IsNotNull(result);
            Assert.AreEqual(result.FirstOrDefault().ReportName, "PM Sanna Marin");
            Assert.AreEqual(result.FirstOrDefault().Tags, "Politics");
        }
        [OneTimeTearDown]
        public void CleanUp()
        {
            context.Database.EnsureDeleted();
        }
        private void SeedDatabase()
        {
            var report = new List<Report>
            {
                    new Report() {
                        Id=19,
                        ReportName="PM Sanna Marin",
                        Tags="Politics",
                        Heading="Finnish PM Sanna Marin takes drugs test ",
                        Content="Video clips of Finnish Prime Minister Sanna MariN",
                        Photo="Finland",
                        ReporterId=2
                    }
            };
            context.Reports.AddRange(report);
            context.SaveChanges();
        }
    }
}