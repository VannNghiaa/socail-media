using Microsoft.EntityFrameworkCore;
using social_media.Models;

namespace social_media.Data;

public class DataContext : DbContext
{
    public DataContext(DbContextOptions<DataContext> options) : base(options)
    {
        
    }
    
    public DbSet<Post> Posts { get; set; }
    public DbSet<Photo> Photos { get; set; }
}