import Header from "../../components/Header/Header"
import './Register.css'
export default function Register (){
    return(
        <div className="page">
            <Header></Header>
            <div className="form">
            <div className="title">Create an account </div>
                  <h2>Sign up with your email</h2>
                <form className="">
                    <label htmlFor="email">Username</label>
                    <input id="email"  type="email"/>
                    <label htmlFor="password">Password</label>
                    <input id="password"/>
                    <button className="showPass">
                    </button>
                    <button  type="submit" className="text--b btn__submit">Sign up</button>
                </form>
                <div className="recievedInfo">
                    <input className="recieveInfo_cb" type="checkbox"></input>
                    <span>I wish to receive information, offers, recommendations, and updates from Kahoot!</span>
                </div>
                <span>Already have an account? <a href="/login">Login</a></span>
            </div>
        </div>
    )
}