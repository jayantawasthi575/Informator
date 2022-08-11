using AuthenticationApi.Model;
using Microsoft.EntityFrameworkCore;

namespace AuthenticationApi.DatabaseContext
{
    public class ApplicationDbContext:DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }
        public DbSet<UserRegister> UserRegisters { get; set; }
    }
}
