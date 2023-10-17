using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace social_media.Models;

[Table("photo")]
public class Photo
{
    [Key]
    public int PhotoId { get; set; }
    public string? Url { get; set; }
    public bool IsAvatar { get; set; }
    public string? PublishId { get; set; }
    public int PostId { get; set; }
    public Post? Post { get; set; }
}