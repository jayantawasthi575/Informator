using System.ComponentModel.DataAnnotations;

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
    }
}
