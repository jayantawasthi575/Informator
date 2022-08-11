using System.Collections.Generic;

namespace AuthenticationApi.Model
{
    public class Data
    {
        public static List<UserRegister> Users=new List<UserRegister>()
        {
            new UserRegister()
            {
                FirstName="Jayant",LastName="Awasthi",Email="jayantawasthi5@gmail.com",Password="mypass",Role="Admin"
            },
            new UserRegister()
            {
                FirstName="Chris",LastName="Bale",Email="chrisbale@gmail.com",Password="mypass",Role="Informer"
            }
        };
    }
}
