using InformerReport.Model;
using Microsoft.EntityFrameworkCore;
namespace InformerReport.DatabaseContext
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
