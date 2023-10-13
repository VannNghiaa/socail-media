import Avatar from "../avatar/avatar";
import "./posts.css";
import { FaRegHeart } from "react-icons/fa6";
import { FaRegPaperPlane } from "react-icons/fa6";
import { FaRegCompass } from "react-icons/fa6";


function Posts() {
    return (
        <div className="posts">
            <div className="posts-header">
                <Avatar /> 
                <span>copengokngek_98</span>
            </div>
            <div className="posts-body">
                {/* <img src="https://i.pravatar.cc/300" alt="" className="image" /> */}
            </div>
            <div className="posts-footer">
                <div className="footer-action">
                    <div className="like action-item">
                        <span className="like-icon icon-item">
                            <FaRegHeart />
                        </span>
                    </div>

                    <div className="comment action-item">
                        <span className="comment-icon icon-item">
                            <FaRegCompass />
                        </span>
                    </div>

                    <div className="share action-item">
                        <span className="share
                        -icon icon-item">
                            <FaRegPaperPlane />
                        </span>
                    </div>
                </div>
            </div>

        </div>
    )
} 

export default Posts;