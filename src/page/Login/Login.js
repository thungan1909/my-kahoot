import Header from "../../components/Header/Header"
import './Login.css'
export default function Login(){
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
                    <input id="password" className="formInput"/>
                    <button className="showPass"> </button>
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