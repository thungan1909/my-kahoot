import Header from "../../components/Header/Header"
import './Register.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react";
import { useEffect, useState } from "react"
import { Formik, useFormik} from "formik"
import * as Yup from "yup"
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import { useMutation } from "react-query"
import axios from 'axios'
import VerifyEmail from "../VerifyEmail/VerifyEmail";
export default function Register (){

    const [user, setUser] = useState();
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
    const formik = useFormik ({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: Yup.object({
            email: Yup.string().required("Required")
            .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,"Please enter a valid email address"),
            password: Yup.string()
             .required("Required")
             .matches(
               /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/,
               "Password must be 7-19 characters and contain at least one letter, one number and a special character"
             ),
        }),
        onSubmit: values => {
          
            setUser(values);
           mutate();
        }
    });
    const {isLoading, isError, isSuccess, error, mutate} = useMutation(
        postData,
        {
            onSuccess: (res) => {

            },
            onError: (err) => {

            },
        }
    );
    async function postData () {
        return await axios.post("http://54.179.150.210:8000/auth/register", user)
    }
    if (isLoading) {
        return <div>Loading...</div>
    }
    if (isError) {
        return <div>Error! {error.message}</div>
    }
    if (isSuccess){
            const email = formik.values.email;
            const password = formik.values.password;
            const verifyCode = "";
            setUser({email, password, verifyCode});
            console.log(user);
        //    return <VerifyEmail user={user}></VerifyEmail>
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
                <form className="form" onSubmit={formik.handleSubmit} >
                    <label htmlFor="email" className="formLabel">Email</label>
                    <input id="email" className="formInput" type="email" value={formik.values.email} onChange={formik.handleChange}/>
                    {formik.errors.email && (<p className="errMsg">{formik.errors.email}</p>)}
                    <label htmlFor="password" className="formLabel">Password</label>
                    <div className="passWordWrapper ">
                    <input id="password" className="formInput" type={passType} value={formik.values.password} onChange={formik.handleChange}/>
                    <button className="showPassBtn" onClick={handleShowPass}>
                        <FontAwesomeIcon className="eyeIcon" icon={showPass} size="lg"/>
                    </button>
                    </div>
                    {formik.errors.password && (<p className="errMsg">{formik.errors.password}</p>)}
                    <button  type="submit" className="SubmitBtn"  >Sign up</button>
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