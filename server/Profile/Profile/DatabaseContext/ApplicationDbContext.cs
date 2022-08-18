using Microsoft.EntityFrameworkCore;
using Profile.Model;

namespace Profile.DatabaseContext
{
    public class ApplicationDbContext:DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }

        public DbSet<Report> Reports { get; set; }
        public DbSet<UserRegister> UserRegisters { get; set; }
    }
}
