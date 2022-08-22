using System.ComponentModel.DataAnnotations;

namespace InformerReport.ViewModel
{
    public class Commen
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }
        [Required]
        public string Message { get; set; }
    }
}
