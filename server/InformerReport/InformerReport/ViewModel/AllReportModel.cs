using InformerReport.Model;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace InformerReport.ViewModel
{
    public class AllReportModel
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
        public int ReporterId { get; set; }
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }
        [Required]
        public string Photo { get; set; }
        [Required]
        public int Like { get; set; }

    }
}
