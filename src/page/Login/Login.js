import Header from "../../components/Header/Header"
import './Login.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
export default function Login(){
    const [showPass, setShowPass] = useState(faEyeSlash);
    const [showPassState, setShowPassState] = useState(false);
    const [passType, setPassType] = useState('password')
  
    const handleShowPass = (e) => {
        e.preventDefault();
        if(showPassState)
        {
            //unshow
            setPassType('password');
            setShowPass(faEyeSlash);
            setShowPassState(false);
        }
        else
        {
            //show
            setPassType('text');
            setShowPass(faEye);
            setShowPassState(true);
        }
    }
    return(
        <div className="page">
            <Header></Header>
            <div className="section">
            <div className="title">
               <h2>Login</h2>
            </div>
            <div>          
                <form className="form">
                    <label htmlFor="email" className="formLabel">Username or Email</label>
                    <input id="email" className="formInput" type="email"/>
                    <label htmlFor="password" className="formLabel">Password</label>
                    <div className="passWordWrapper ">
                    <input id="password" className="formInput" type={passType}/>
                    <button className="showPassBtn" onClick={handleShowPass}>
                        <FontAwesomeIcon className="eyeIcon" icon={showPass} size="lg"/>
                    </button>
                    </div>
                    <span className="form_text">Forgot password? <a href="/forgotPass"> Reset your password?</a> </span>
                    <button  type="submit" className="SubmitBtn">Login</button>
                </form>
                <div className="form__seperator">
                    <hr className="form__cardLine"></hr>
                    <span className="form__Or">or</span>
                </div>
                <span className="form_text">Don't have an account?<a href="/register"> Sign up</a></span>
            </div>
            </div>
        </div>

    )
}