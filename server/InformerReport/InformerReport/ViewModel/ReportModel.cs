using Microsoft.AspNetCore.Http;
using System.ComponentModel.DataAnnotations;

namespace InformerReport.ViewModel
{
    public class ReportModel
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string ReportName { get; set; }

        [Required]
        public string Tags { get; set; }

        [Required]
        public string Heading { get; set; }

        [Required]
        public string Content { get; set; }

        [Required]
        public IFormFile Photo { get; set; }
    }
}
