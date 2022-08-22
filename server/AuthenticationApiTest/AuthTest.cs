using AuthenticationApi.DatabaseContext;
using AuthenticationApi.Model;
using AuthenticationApi.Repository;
using Microsoft.EntityFrameworkCore;
using NUnit.Framework;
using System.Collections.Generic;
using System.Linq;
namespace AuthenticationApiTest
{
    public class AuthTest
    {
        private static DbContextOptions<ApplicationDbContext> dbContextOptions = new DbContextOptionsBuilder<ApplicationDbContext>()
            .UseInMemoryDatabase(databaseName: "AuthDataTest")
            .Options;
        ApplicationDbContext context;
        IRepo rep;
        [OneTimeSetUp]
        public void Setup()
        {
            context = new ApplicationDbContext(dbContextOptions);
            context.Database.EnsureCreated();

            SeedDatabase();

            //publishersService = new PublishersService(context);
            rep = new Repo(context);
        }
        [TestCase("jayantawasthi5@gmail.com", "mypass")]
        public void CheckingAuth(string email, string password)
        {
            Login userLogin = new Login() { Email = email, Password = password };
            var result = rep.AuthUser(userLogin);
            Assert.IsNotNull(result);
            Assert.AreEqual(result.Email,"jayantawasthi5@gmail.com");
            Assert.AreEqual(result.FirstName, "Jayant");
        }

        [TestCase("jayantawasthi5@gmail.com", "mypas")]
        public void CheckingAuthIfInvalid(string email, string password)
        {
            Login userLogin = new Login() { Email = email, Password = password };
            var result = rep.AuthUser(userLogin);
            Assert.IsNull(result);
        }

        [OneTimeTearDown]
        public void CleanUp()
        {
            context.Database.EnsureDeleted();
        }
        private void SeedDatabase()
        {
            var users = new List<UserRegister>
            {
                    new UserRegister() {
                        Id = 1,
                        FirstName="Jayant",
                        LastName="Awasthi",
                        Email="jayantawasthi5@gmail.com",
                        Password="mypass",
                        Role="Admin",
                        Age="22",
                        Country="India",
                        Education="BTech",
                        PhoneNumber="4213232121",
                        Photo="1.jpg"
                    }
            };
            context.UserRegisters.AddRange(users);
            context.SaveChanges();
        }
    }
}