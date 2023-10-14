# socail-media
project: mạng xã hội (instagram)

-user:
 * tạo/xóa/sửa tài khoản
 * tạo/xóa/sửa bài viết
 * follow/unfollow user khác
 * like/unlike bài viết 
 * share bài viết
 * comment bài viết  
 * xem newsfeed 
 * khám phá bài viết
 * nhắn tin

Entity
__________________________________________________
tài khoản (User)
+ userID
+ username
+ password (JWT) 
+ email
+ verify_email
+ posts []Post
+ folowing_users []User
+ users_following_me []User
+ gender
+ addrees
+ phone
+ birthday
+ age


_______________________________________________________
bài viết (post)
+ postID
+ content
+ hashtag
+ image []Image
+ like_count
+ share_count
+ comment []Comment
+ author
+ status (public/pravite)

_________________________________________________________





