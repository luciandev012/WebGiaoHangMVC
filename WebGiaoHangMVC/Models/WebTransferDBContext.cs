using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebGiaoHangMVC.Models.Enities;

namespace WebGiaoHangMVC.Models
{
    public class WebTransferDBContext : DbContext
    {
        public WebTransferDBContext(DbContextOptions options) : base (options)
        {

        }

        public DbSet<User> Users { get; set; }
        public DbSet<Product> Products { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<User>().ToTable("User").HasKey(u => u.Id);

            builder.Entity<Product>().ToTable("Product").HasKey(u => u.Id);

            builder.Entity<User>().HasData(new User
            {
                Id = 1,
                FullName = "Nguyễn Văn A",
                Username = "ngva",
                Password = "123456",
                Email = "ngva@gmail.com",
                PhoneNumber = "0123456789",
                DoB = new DateTime(1686815954551)
            });
        }
    }
}
