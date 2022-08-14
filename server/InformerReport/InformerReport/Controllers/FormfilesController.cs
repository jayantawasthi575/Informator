using InformerReport.Model;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.IO;
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
        public string Formfi([FromForm]Rep rep)
        {
            if(rep.formfiles!=null)
            {
                //string folder = "books/cover/";
                string servermodel = Path.Combine(_webHostEnvironment.ContentRootPath, "books/"+"hello");
                using (var stream = new FileStream(servermodel, FileMode.Create))
                {
                    rep.formfiles.CopyTo(stream);
                }
            }
            return "hello";
        }
    }
}
