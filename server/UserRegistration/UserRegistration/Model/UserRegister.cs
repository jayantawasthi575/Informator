using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace UserRegistration.Model
{
    public class UserRegister
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }
        public string Role { get; set; }
        public string? Photo { get; set; }
        public string? Age { get; set; }
        public string? PhoneNumber { get; set; }
        public string? Education { get; set; }
        public string? Country { get; set; }
    }
}
