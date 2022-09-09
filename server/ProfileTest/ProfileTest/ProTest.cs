using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using NUnit.Framework;
using Profile.DatabaseContext;
using Profile.Model;
using Profile.Repository;
using System.Collections.Generic;
using System.Linq;

namespace ProfileTest
{
    public class ProTest
    {
        private static DbContextOptions<ApplicationDbContext> dbContextOptions = new DbContextOptionsBuilder<ApplicationDbContext>()
            .UseInMemoryDatabase(databaseName: "AuthDataTest")
            .Options;
        ApplicationDbContext context;
        IProfileInfo pInfo;
        private readonly IWebHostEnvironment _webHostEnvironment;
        [OneTimeSetUp]
        public void Setup()
        {
            context = new ApplicationDbContext(dbContextOptions);
            context.Database.EnsureCreated();

            SeedDatabase();

            //publishersService = new PublishersService(context);
            pInfo = new ProfileInfo(context,_webHostEnvironment);
        }
        [TestCase(2)]
        public void Check_Users_Exists(int id)
        {
            var result = pInfo.Users(id);
            Assert.IsNotNull(result);
            Assert.AreEqual(result.FirstOrDefault().FirstName, "Chris");
            Assert.AreEqual(result.FirstOrDefault().LastName, "Flynn");
        }
        [TestCase(0)]
        public void Check_Users_NotExists(int id)
        {
            var result = pInfo.Users(id);
            Assert.IsEmpty(result);
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
                    },
                    new UserRegister() {
                        Id = 2,
                        FirstName="Chris",
                        LastName="Flynn",
                        Email="chrisflynn@gmail.com",
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