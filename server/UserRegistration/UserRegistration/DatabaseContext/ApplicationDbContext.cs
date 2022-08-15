using Microsoft.EntityFrameworkCore;
using UserRegistration.Model;

namespace UserRegistration.DatabaseContext
{
    public class ApplicationDbContext:DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }
        public DbSet<UserRegister> UserRegisters { get; set; }
        public DbSet<Report> Reports { get; set; }
    }
}
