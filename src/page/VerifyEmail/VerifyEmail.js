import { Button } from "@mui/material";
import './VerifyEmail.css';


export default function VerifyEmail ({user})
{

    return (
        <div className="page">
            <div className="container">
                <h2 className="title">Verify Email</h2>
                <div className="description">
                <span> We've sent the 6-digit code to </span>
                {/* <span>{user.email}</span> */}
                <span>Enter the code below to confirm your email address.</span>
                </div>
                <div className="inputWrapper">
                    <input type="number" min="0" max="9" className="inputCode" ></input>
                    <input type="number" min="0" max="9" className="inputCode" ></input>
                    <input type="number" min="0" max="9" className="inputCode" ></input>
                    <input type="number" min="0" max="9" className="inputCode" ></input>
                    <input type="number" min="0" max="9" className="inputCode" ></input>
                    <input type="number" min="0" max="9" className="inputCode" ></input>
                </div>
                <Button type="submit" >Verify</Button>
            </div>
        </div>
    )
}