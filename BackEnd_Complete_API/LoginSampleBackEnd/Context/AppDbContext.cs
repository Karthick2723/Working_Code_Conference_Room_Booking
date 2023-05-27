using LoginSampleBackEnd.Entity;
using LoginSampleBackEnd.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Win32;

namespace LoginSampleBackEnd.Context
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {

        }
        public DbSet<User> Users { get; set; }
        public DbSet<BookSlotRegister> bookSlotRegisters { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().ToTable("users");
        }
    }
}
