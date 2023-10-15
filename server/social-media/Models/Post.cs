using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace social_media.Models;

[Table("post")]
public class Post
{
    [Key]
    public int PostId { get; set; }
    public string? Caption { get; set; }
    public bool IsPublish { get; set; } = true;
    public int LikedCount { get; set; }
    public int SharedCount { get; set; }
    public List<Photo>? Photos { get; set; }
    public DateTime UpdatedAt { get; set; } = DateTime.Now;
    public DateTime CreatedAt { get; set; } = DateTime.Now;
}