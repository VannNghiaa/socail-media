import Navbar from "../../components/navbar/navbar";
import Avatar from "../../components/avatar/avatar";
import { IoIosSettings } from "react-icons/io";
import { BsFacebook } from "react-icons/bs";
import "./profile.css";
import Discovery from "../discovery/discovery";

function Profile() {
    return (
        <div className="profile">
            <Navbar/>
            <div className="profile-header">
                <div className="profile-avt">
                    <Avatar width={200} height={200} />
                </div>
                <div className="profile-pi">
                    <div className="profile-pi-header">
                        <div className="profile-id profile-text">
                            <span>august.vannghia</span>
                        </div>
                        <div className="profile-edit profile-button">
                            <button>Edit Profile</button>
                        </div>
                        <div className="profile-archive profile-button">
                            <button>View Archive</button>
                        </div>
                        <div className="profile-settings">
                            <IoIosSettings/>
                        </div>
                    </div>
                    <div className="profile-pi-body">
                        <div className="profile-pi-mid">
                            <div className="profile-postnumbers profile-text">
                                <span className="upcontent">9</span>
                                <span> posts</span>
                            </div>
                            <div className="profile-flower profile-text">
                                <span className="upcontent">657k</span>
                                <span> followers</span>
                            </div>
                            <div className="profile-flowing profile-text">
                                <span className="upcontent">1</span>
                                <span> following</span>
                            </div>
                        </div>
                    </div>
                    <div className="profile-footer">
                        <div className="profile-username">
                            <span>Văn Nghĩa</span>
                        </div>
                        <div className="profile-bio">
                            <span>Describe yourself...</span>
                        </div>
                        <div className="profile-contact">
                            <a href="#"> <BsFacebook/> Facebook</a>
                        </div>
                    </div>

                </div>
            </div>
            <div className="profile-content">
                <Discovery />
            </div>

        </div>
    )
}

export default Profile;