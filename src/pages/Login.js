import { useState } from 'react'
import LoginBanner from "../.././src/login-banner-new.png"
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Login() {
    const [userName, setUserName] = useState("");
    const testUser = "test"
    let navigate = useNavigate();

    function LoginApp(e) {
        e.preventDefault();
        if(userName && userName === testUser){
            toast.success("Giriş Doğrulandı!")
            setTimeout(() => {
                navigate("/dashboard");
            }, 1500);
        }
        else {
            toast.error("Böyle bir kullanıcı yok")
            navigate("/");
        }
    }


  return (
    <div className="base">
        <div className="login-card">
            <img src={LoginBanner} alt="" />
            <div>
                <form id="login-form" onSubmit={LoginApp}>
                    <label>Username</label>
                    <input type="text" className="username" value={userName } onChange={e => setUserName(e.target.value)}placeholder="Enter your username"/>
                    <button type="submit" className="login-button">Login</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login