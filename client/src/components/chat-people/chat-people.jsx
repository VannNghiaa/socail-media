import Avatar from "../avatar/avatar";
import "./chat-people.css";

function ChatUser() {
    return (
        <div className="chat-user">
            <div className="user-avt">
                <Avatar width={56} height={56}/>
            </div>
            <div className="name-chatuser">
                <span className="namestyle">
                    Văn Nghĩa
                </span>
            </div>
        </div>
    )
}

export default ChatUser;