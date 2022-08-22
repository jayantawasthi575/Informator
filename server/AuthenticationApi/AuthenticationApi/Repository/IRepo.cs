using AuthenticationApi.Model;

namespace AuthenticationApi.Repository
{
    public interface IRepo
    {
        public UserRegister AuthUser(Login UserLogin);
    }
}
