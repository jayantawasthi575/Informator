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
using System.Collections.Generic;

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
        public IEnumerable<Report> GetReport(int Id)
        {
            List<Report> rep = _context.Reports.Where(s => s.ReporterId == Id).ToList();
            return rep;
        }
        public IEnumerable<Report> GetReportByReporterId(int Id1,int Id2)
        {
            List<Report> rep = _context.Reports.Where(s => s.ReporterId == Id2 && s.Id == Id1).ToList();
            return rep;
        }
        public bool UpdateReport(int id,ReportModel rep)
        {
            var _rep = _context.Reports.FirstOrDefault(n => n.Id == id);

            if(_rep!=null)
            {
                string imageName = new String(Path.GetFileNameWithoutExtension(rep.Photo.FileName).Take(10).ToArray()).Replace(' ', '-');
                imageName = imageName + DateTime.Now.ToString("yymmssfff") + Path.GetExtension(rep.Photo.FileName);
                var imagePath = Path.Combine(_webHostEnvironment.ContentRootPath, "Images", imageName);
                using (var fileStream = new FileStream(imagePath, FileMode.Create))
                {
                    rep.Photo.CopyTo(fileStream);
                }
                _rep.ReportName = rep.ReportName;
                _rep.Tags = rep.Tags;
                _rep.Heading = rep.Heading;
                _rep.Content = rep.Content;
                _rep.Photo = imageName;
                _rep.ReporterId = _rep.ReporterId;
                _context.SaveChanges();
            }
            return true;
        }
        public void DeleteReportById(int id)
        {
            var _report = _context.Reports.FirstOrDefault(n => n.Id == id);
            if(_report!=null)
            {
                _context.Reports.Remove(_report);
                _context.SaveChanges();
            }

        }
    }

}
