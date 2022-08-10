using System.Collections.Generic;

namespace AuthenticationApi.Model
{
    public class Data
    {
        public static List<User> Users=new List<User>()
        {
            new User()
            {
                FirstName="Jayant",LastName="Awasthi",Email="jayantawasthi5@gmail.com",Password="mypass",Role="Admin"
            },
            new User()
            {
                FirstName="Chris",LastName="Bale",Email="chrisbale@gmail.com",Password="mypass",Role="Informer"
            }
        };
    }
}
