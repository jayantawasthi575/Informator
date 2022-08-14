using InformerReport.Model;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.IO;

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
        public IActionResult Formfi([FromBody]Rep rep)
        {
            if(rep.formfiles!=null)
            {
                string folder = "books/cover/";
                folder += rep.formfiles.FileName;
                string servermodel = Path.Combine(_webHostEnvironment.WebRootPath, folder);
                rep.formfiles.CopyTo(new FileStream(servermodel, FileMode.Create));
            }
            return Ok();
        }
    }
}
