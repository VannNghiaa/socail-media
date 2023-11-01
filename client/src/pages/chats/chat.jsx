import ChatUser from "../../components/chat-people/chat-people";
import Navbar from "../../components/navbar/navbar";
import "./chat.css";

function Chat() {
    return (
        <div className="chat-main">
            <Navbar />
            <div className="chat">
                <div className="chat-people">
                    <div className="chat-header">
                        <div className="myid">
                            <span className="myid-style">august.vannghia</span>
                        </div>
                        <div className="switch-account">

                        </div>
                        <div className="chatnew">

                        </div>
                    </div>
                    <div className="chat-midcontent">
                        <div className="chat-title">
                            <span className="title">Messages</span>
                        </div>
                        <div className="chat-request">
                            {/* <span className="request">Requests</span> */}
                            <button className="request">Requests</button>
                        </div>
                    </div>
                    
                    <div  className="chat-user1">
                        <ChatUser />
                        <ChatUser />
                        <ChatUser />
                        <ChatUser />
                        <ChatUser />
                        <ChatUser />
                        <ChatUser />
                        <ChatUser />
                        <ChatUser />
                        <ChatUser />
                        <ChatUser />
                        <ChatUser />
                        <ChatUser />
                        </div>
                </div>
                <div className="chat-content">
                    <div className="chat-content-header">
                        <div className="avt-person">
                            <ChatUser />
                        </div>
                    </div>
                    <div className="chat-content-mid">
                        <div className="content-right">

                        </div>
                        <div className="content-left">

                        </div>
                    </div>
                    <div className="chat-content-footer">
                        <input className="chat-input" type="text" placeholder="Message..." />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat;