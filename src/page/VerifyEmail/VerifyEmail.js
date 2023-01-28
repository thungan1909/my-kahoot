import { Button } from "@mui/material";

export default function VerifyEmail ({user})
{
    return (
        <div className="page">
            <div className="conatiner">
                <h2 className="title">Verify Email</h2>
                <div className="description">
                <span> We've sent the 6-digit code to </span>
                <span>{user.email}</span>
                <span>Enter the code below to confirm your email address.</span>
                </div>
                <div className="input">
                    <input type="number" min="0" max="9" className="inputCode" ></input>
                </div>
                <Button type="submit" ></Button>
            </div>
        </div>
    )
}