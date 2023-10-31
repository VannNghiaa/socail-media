import Avatar from "../avatar/avatar";
import "./posts.css";
import { CiHeart } from "react-icons/ci";
import { CiChat1 } from "react-icons/ci";
import { CiLocationArrow1 } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";



function Posts() {
    return (
        <div className="posts">
            <div className="posts-header">
                <Avatar width={35} height={35} />
                <span>copengokngek_98</span>
            </div>
            <div className="posts-body">
                {/* <img src="https://i.pravatar.cc/300" alt="" className="image" /> */}
            </div>
            <div className="posts-footer">
                <div className="footer-action">
                    <div className="like action-item">
                        <span className="like-icon icon-item">
                            <CiHeart />
                        </span>
                    </div>

                    <div className="comment action-item">
                        <span className="comment-icon icon-item">
                            <CiChat1 />
                        </span>
                    </div>

                    <div className="share action-item">
                        <span className="share-icon icon-item">
                            <CiLocationArrow1 />
                        </span>
                    </div>
                </div>

                <div className="footer-bookmark">
                    <span className="save-icon icon-item">
                        <CiBookmark/>
                    </span>
                </div>
            </div>

        </div>
    )
}

export default Posts;