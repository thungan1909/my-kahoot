
export default function Register (){
    return(
        <div className="page">
            <div className="title">Create an account </div>
            <div className="form">
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
            </div>
        </div>
    )
}