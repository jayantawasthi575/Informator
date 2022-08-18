using System.ComponentModel.DataAnnotations;

namespace Profile.ViewModel
{
    public class UserRegisterModels
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }
        public string Photo { get; set; }
        public string? Age { get; set; }
        public string? PhoneNumber { get; set; }
        public string? Education { get; set; }
        public string? Country { get; set; }
    }
}
