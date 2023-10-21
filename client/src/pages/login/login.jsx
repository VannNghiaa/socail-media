import Logo from "../../components/logo/logo";
import "./login.css"

function Login() {
    return (
        <div className="login-page">
            <div className="login-animation">
                <img src="c:\Users\ADMIN\Downloads\screenshot1.png" alt="" />
            </div>
            <div className="login">
                <div className="login-logo">
                    <Logo width={400} height={40}/>
                </div>
                <div className="login-content">
                    <div className="login-input">
                        <input className="marge" type="text" placeholder="Phone number, username or email" />
                        <input className="marge" type="text" placeholder="Password" />
                    </div>
                    <div className="button-login">
                        <button className="marge">Log in</button>
                    </div>
                </div>
                <div className="login-text">
                    OR
                </div>
                <div className="login-box">
                    <div className="button-register">
                        {/* <span>Bạn chưa có tài khoản ư?</span>
                        <br /> */}
                        <div className="text">Don't have an account?</div>
                        <button>Sign up</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;