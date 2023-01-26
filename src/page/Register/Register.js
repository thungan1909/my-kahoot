import Header from "../../components/Header/Header"
import './Register.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";

export default function Register (){

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
               <h2> Create an account</h2>
               <h3>Sign up with your email</h3>
            </div>
            <div>          
                <form className="form">
                    <label htmlFor="email" className="formLabel">Email</label>
                    <input id="email" className="formInput" type="email"/>
                    <label htmlFor="password" className="formLabel">Password</label>
                    <div className="passWordWrapper ">
                    <input id="password" className="formInput" type={passType}/>
                    <button className="showPassBtn" onClick={handleShowPass}>
                        <FontAwesomeIcon className="eyeIcon" icon={showPass} size="lg"/>
                    </button>
                    </div>
                    <button  type="submit" className="SubmitBtn">Sign up</button>
                    <div className="recievedInfo">
                    <input className="recieveInfo_cb" type="checkbox"></input>
                    <span>I wish to receive information, offers, recommendations, and updates from Kahoot!</span>
                </div>
                </form>
                <div className="form__seperator">
                    <hr className="form__cardLine"></hr>
                    <span className="form__Or">or</span>
                </div>
                <span className="form__redirect">Already have an account? <a href="/login">Login</a></span>
            </div>
            </div>
        </div>

    )
}