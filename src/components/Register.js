import React, { useState } from 'react';
import {register} from "../features/userSlice";
import { useDispatch } from 'react-redux';
import "./Register.css";

const Register = () => {

    const [name,setName] =useState("");
    const [password,setPassword] =useState("");
    const [email,setEmail] =useState("");

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();

       dispatch(register({
           name:name,
           password:password, 
           email: email,
           loggedIn:true,
       })
       );
    };

    return (
        <div className="register">
        <form className="register_form" onSubmit={(e) => handleSubmit(e)}>
        <h1>Register!</h1>
        <input type="name" placeholder="Name" value={name} onChange={(e)=> setName(e.target.value)}></input>
        <input type="email" placeholder="Email ID" value={email} onChange={(e)=> setEmail(e.target.value)}></input> 
        <input type="password" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)}></input>
        <button type="submit" className="submit_btn">
        Submit!
        </button>
        </form>  
        </div>
    )
}

export default Register;
