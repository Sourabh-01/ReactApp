import React, { useState } from 'react';
import {login} from "../features/userSlice";
import { useDispatch } from 'react-redux';
import "./Login.css";

const Login = () => {

    const [name,setName] =useState("");
    const [password,setPassword] =useState("");

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();

       dispatch(login({
           name:name,
           password:password,
           loggedIn:true,
       })
       );
    };

    return (
        <div className="login">
        <form className="login_form" onSubmit={(e) => handleSubmit(e)}>
        <h1>Login!</h1>
        <input type="name" placeholder="Name" value={name} onChange={(e)=> setName(e.target.value)}></input>
        <input type="password" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)}></input>
        <button type="submit" className="submit_btn">
        Log In!
        </button>
        </form>  
        </div>
    )
}

export default Login;
