import Header from "../../components/Header/Header"
import './Register.css'
export default function Register (){
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
                    <input id="password" className="formInput"/>
                    <button className="showPass">
                    </button>
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