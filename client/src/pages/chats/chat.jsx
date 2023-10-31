import ChatUser from "../../components/chat-people/chat-people";
import "./chat.css";

function Chat() {
    return (
        <div className="chat">
            <div className="chat-people">
                <div className="chat-header">
                    <div className="myid">
                    <span className="myid-style">august.vannghia</span>
                    </div>
                    <div className="create-chatnew">
                        Icon
                    </div>
                </div>
                <div className="chat-midcontent">
                    <div className="chat-title">

                    </div>
                    <div className="chat-watting">

                    </div>
                </div>
                <ChatUser/>
                <ChatUser/>
                <ChatUser/>
                <ChatUser/>
                <ChatUser/>
            </div>
            <div className="chat-content">
                <div className="content-right">

                </div>
                <div className="content-left">

                </div>
                <div className="chat-input">
                    
                </div>
            </div>
        </div>
    )
}

export default Chat;