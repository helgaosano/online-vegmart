import React, { useState } from "react";
import "../Login.css"
import { useNavigate } from 'react-router-dom';


export const LoginForm = (props, {onLogin}) => {
    const [email_address, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");
    
    const history = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email_address, password }),
          }).then((r) => {
            if (r.ok) {
              r.json().then((newLogin) => {
                onLogin(newLogin)
                history("/")
                localStorage.setItem("me", JSON.stringify(newLogin))
              });
              // r.json().then(() => window.location.reload(false));
            } else {
              r.json().then((err) => alert(err.errors));
            }
          });
          // history('/')
        }
    //     setEmail(email);
    // }

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email_address">email</label>
                <input value={email_address} onChange={(e) => setEmailAddress(e.target.value)}type="email_address" placeholder="youremail@gmail.com" id="email_address" name="email_address" required/>
                <label htmlFor="password">password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                {/* <button type="submit"><b>Login</b></button> */}
                <button className="btn btn-outline-success btn-md m-2" >
                    <a href='http://localhost:3001/products'>login</a>
                </button>
            </form>
            {/* <button className="link-btn" onClick={() => history('/signup')}>Don't have an account? Sign up here.</button> */}
            <button className="link" onClick={() => props.onFormSwitch('signup')}>Don't have an account? Sign up here.</button>
        </div>
    )
}

export default LoginForm