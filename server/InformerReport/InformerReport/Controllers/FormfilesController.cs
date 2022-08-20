using InformerReport.Model;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace InformerReport.Controllers
{
    [EnableCors("MyCorsPolicy")]
    [Route("api/[controller]")]
    [ApiController]
    public class FormfilesController : ControllerBase
    {
        private readonly IWebHostEnvironment _webHostEnvironment;
        public FormfilesController(IWebHostEnvironment webHostEnvironment)
        {
            _webHostEnvironment = webHostEnvironment;
        }
        [HttpPost]
        public  string Formfi([FromForm]Rep rep)
        {
            //string folder = "books/cover/";
            string imageName = new String(Path.GetFileNameWithoutExtension(rep.formfiles.FileName).Take(10).ToArray()).Replace(' ', '-');
            imageName = imageName + DateTime.Now.ToString("yymmssfff") + Path.GetExtension(rep.formfiles.FileName);
            var imagePath = Path.Combine(_webHostEnvironment.ContentRootPath, "Images", imageName);
            using (var fileStream = new FileStream(imagePath, FileMode.Create))
            {
                rep.formfiles.CopyTo(fileStream);
            }
            return imageName;
        }


    }
}
