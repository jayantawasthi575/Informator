using InformerReport.DatabaseContext;
using InformerReport.ViewModel;
using Microsoft.AspNetCore.Http;
using System.Security.Claims;
using InformerReport.Model;
using Microsoft.AspNetCore.Authorization;
using System.Linq;
using Microsoft.AspNetCore.Hosting;
using System;
using System.IO;

namespace InformerReport.Repository
{
    public class ReportInfo:IReportInfo
    {
        private ApplicationDbContext _context;
        private readonly IWebHostEnvironment _webHostEnvironment;
        public ReportInfo(ApplicationDbContext context, IWebHostEnvironment webHostEnvironment)
        {
            _context = context;
            _webHostEnvironment = webHostEnvironment;
        }

        
        public bool AddReport(ReportModel ReportM,int id)
        {
            string imageName = new String(Path.GetFileNameWithoutExtension(ReportM.Photo.FileName).Take(10).ToArray()).Replace(' ', '-');
            imageName = imageName + DateTime.Now.ToString("yymmssfff") + Path.GetExtension(ReportM.Photo.FileName);
            var imagePath = Path.Combine(_webHostEnvironment.ContentRootPath, "Images", imageName);
            using (var fileStream = new FileStream(imagePath, FileMode.Create))
            {
                ReportM.Photo.CopyTo(fileStream);
            }
            Report report = new Report()
            {
                ReportName = ReportM.ReportName,
                Tags = ReportM.Tags,
                Heading = ReportM.Heading,
                Content = ReportM.Content,
                Photo = imageName,
                ReporterId = id
            };
            _context.Reports.Add(report);
            _context.SaveChanges();
            return true;
        }
    }
}
