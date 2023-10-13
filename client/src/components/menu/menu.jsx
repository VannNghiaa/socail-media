import "./menu.css";
import { BiHomeAlt } from "react-icons/bi";
import { FaRegPaperPlane } from "react-icons/fa6";
import { FaRegCompass } from "react-icons/fa6";
import { FaRegSquarePlus } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { PiHouseBold } from "react-icons/pi";
import Avatar from "../avatar/avatar";


function Menu() {
    return (
        <div className="menu">
            <div className="home menu-item">
                <span className="home-icon icon-item">
                    <PiHouseBold />
                </span>
            </div>
            <div className="message menu-item">
                <span className="message-icon icon-item">
                    <FaRegPaperPlane />
                </span>
            </div>
            <div className="create menu-item">
                <span className="create-icon icon-item">
                    <FaRegSquarePlus />
                </span>
            </div>
            <div className="discovery menu-item">
                <span className="discovery-icon icon-item">
                    <FaRegCompass />
                </span>
            </div>
            <div className="notification menu-item">
                <span className="notification-icon icon-item">
                    <FaRegHeart />
                </span>
            </div>

            <Avatar />
        </div>
    )
}

export default Menu;