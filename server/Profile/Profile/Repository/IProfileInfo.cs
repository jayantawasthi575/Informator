using Profile.Model;
using Profile.ViewModel;
using System.Collections.Generic;

namespace Profile.Repository
{
    public interface IProfileInfo
    {
        public bool UpdateProfile(int id, UserRegisterModel rep);
        public IEnumerable<UserRegisterModels> Users(int id);
    }
}
