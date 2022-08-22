using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace InformerReport.Model
{
    public class Report
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
       public string Photo { get; set; }

        [Required]
        public int Like { get; set; } = 0;

        public List<Comment> Comments;
      
       [Required]
       [ForeignKey("Reporter")]
       public int ReporterId { get; set; }

       public UserRegister Reporter { get; set; }
    }
}
