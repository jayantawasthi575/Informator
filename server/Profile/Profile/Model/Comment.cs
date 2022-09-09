using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Profile.Model
{
    public class Comment
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }
        [Required]
        public string Message { get; set; }
        [Required]
        [ForeignKey("InfoReport")]
        public int InfoReportId { get; set; }
        public Report InfoReport { get; set; }
    }
}
