using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebGiaoHangMVC.Models;
using WebGiaoHangMVC.Models.Enities;

namespace WebGiaoHangMVC.Controllers
{
    public class LoginController : Controller
    {
        private readonly WebTransferDBContext _context;

        public LoginController(WebTransferDBContext context)
        {
            _context = context;
        }
        [HttpGet]
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Index(string username, string password)
        {
            var user = _context.Users.Where(x => x.Username == username && x.Password == password).FirstOrDefault();
            if(user != null)
            {
                return RedirectToAction("Index", "Home");
            }
            return View();
        }

        [HttpGet]
        public IActionResult Register()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Register(User user)
        {
            _context.Users.Add(user);
            var res = _context.SaveChanges();
            if(res > 0)
            {
                return RedirectToAction("Index");
            }
            return View();
        }
    }
}
