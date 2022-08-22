using AuthenticationApi.DatabaseContext;
using AuthenticationApi.Model;
using System.Linq;

namespace AuthenticationApi.Repository
{
    public class Repo:IRepo
    {
        private readonly ApplicationDbContext _context;
        public Repo(ApplicationDbContext context)
        {
            _context = context;
        }
        public UserRegister AuthUser(Login userLogin)
        {
            var currentUser = _context.UserRegisters.FirstOrDefault(o => o.Email.ToLower() == userLogin.Email.ToLower() && o.Password == userLogin.Password);
            return currentUser;
        }
    }
}
