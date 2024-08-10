using HomeManagement.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace HomeManagement.Infrastructure.Data;

public class ApplicationDbContext : DbContext
{
    public DbSet<Test> Tests { get; set; }
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
    {
    }
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
    }
}
