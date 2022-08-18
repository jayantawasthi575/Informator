using Microsoft.AspNetCore.Hosting;
using Profile.DatabaseContext;
using Profile.Model;
using Profile.ViewModel;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace Profile.Repository
{
    public class ProfileInfo:IProfileInfo
    {
        private ApplicationDbContext _context;
        private readonly IWebHostEnvironment _webHostEnvironment;
        public ProfileInfo(ApplicationDbContext context, IWebHostEnvironment webHostEnvironment)
        {
            _context = context;
            _webHostEnvironment = webHostEnvironment;
        }
        public bool UpdateProfile(int id,UserRegisterModel rep)
        {
            var _rep = _context.UserRegisters.FirstOrDefault(n => n.Id == id);

            if (_rep != null)
            {
                string imageName = new String(Path.GetFileNameWithoutExtension(rep.Photo.FileName).Take(10).ToArray()).Replace(' ', '-');
                imageName = imageName + DateTime.Now.ToString("yymmssfff") + Path.GetExtension(rep.Photo.FileName);
                var imagePath = Path.Combine(_webHostEnvironment.ContentRootPath, "Images", imageName);
                using (var fileStream = new FileStream(imagePath, FileMode.Create))
                {
                    rep.Photo.CopyTo(fileStream);
                }
                _rep.FirstName = rep.FirstName;
                _rep.LastName = rep.LastName;
                _rep.Email = _rep.Email;
                _rep.Password = _rep.Password;
                _rep.Role = _rep.Role;
                _rep.Photo = imageName;
                _rep.Age = rep.Age;
                _rep.PhoneNumber = rep.PhoneNumber;
                _rep.Education = rep.Education;
                _rep.Country = rep.Country;
                _context.SaveChanges();
            }
            return true;
        }
      
        public IEnumerable<UserRegisterModels> Users(int id)
        {
            List<UserRegisterModels> rep = _context.UserRegisters.Where(s => s.Id == id).Select(user => new UserRegisterModels()
            {
                Id = user.Id,
                FirstName = user.FirstName,
                LastName = user.LastName,
                Photo = user.Photo,
                Age = user.Age,
                PhoneNumber = user.PhoneNumber,
                Education = user.Education,
                Country = user.Country

            }).ToList();
            
            return rep;
        }

    }
}
