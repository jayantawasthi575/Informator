using Microsoft.AspNetCore.Http;
using System.ComponentModel.DataAnnotations;

namespace Profile.ViewModel
{
    public class UserRegisterModel
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }
        public string Role { get; set; }
        public IFormFile? Photo { get; set; }
        public string? Age { get; set; }
        public string? PhoneNumber { get; set; }
        public string? Education { get; set; }
        public string? Country { get; set; }
    }
}
