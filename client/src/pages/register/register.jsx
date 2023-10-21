import Logo from "../../components/logo/logo";
import "./register.css";

function Register() {
    return (
        <div className="register">
            <div className="register-logo">
                <Logo width={400} height={40} />
            </div>
            <div className="register-text">
                <span>Sign up to see photos and videos from your friends.</span>
            </div>
            <div className="register-text1">
                OR
            </div>
            <div className="register-content">
                <div className="register-input">
                    <div className="marge">
                        <input className="marge" type="text" placeholder="Mobile Number or Email" />
                    </div>
                    <div className="marge">
                        <input className="marge" type="text" placeholder="Full Name" />
                    </div>
                    <div className="marge"> 
                        <input className="marge" type="text" placeholder="Username" />
                    </div>
                    <div className="marge">
                        <input className="marge" type="text" placeholder="Password" />
                    </div>
                </div>
                <div className="register-text2">
                    <span>People who use our service may have uploaded your contact information to Instagram.</span>
                </div>
                <div className="register-button">
                    <button>Sign up</button>
                </div>
            </div>

        </div>
    )
}

export default Register;