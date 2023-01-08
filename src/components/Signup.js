// import React, { useState } from "react";
// import "../Signup.css"

// export const Signup = (props) => {
//     const [email, setEmail] = useState('');
//     const [pass, setPass] = useState('');
//     const [name, setName] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setName(email);
//     }

//     return (
//         <div className="auth-form-container">
//             <h2>Sign Up</h2>
//         <form className="signup-form" onSubmit={handleSubmit}>
//             <label htmlFor="name">Full name</label>
//             <input value={name} name="name" id="name" placeholder="full Name" />
//             <label htmlFor="email">email</label>
//             <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
//             <label htmlFor="password">password</label>
//             <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
//             <button type="submit"><b>Login</b></button>
//         </form>
//         <button className="link" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
//     </div>
//     )
// }

// export default Signup

import React, { useState } from "react";
import "../Signup.css"
import { useNavigate } from 'react-router-dom';


export const Signup = (props, {onLogin}) => {
    const [email_address, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    
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
              r.json().then((newLogin) => onLogin(newLogin));
              // r.json().then(() => window.location.reload(false));
            } else {
              r.json().then((err) => alert(err.errors));
            }
          });
          history('/')
        }
    //     setEmail(email);
    // }

    return (
        <div className="auth-form-container">
            <h2>Signup</h2>
            <form className="signup-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Full name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} name="name" id="name" placeholder="full Name" />
                <label htmlFor="email_address">Email</label>
                <input value={email_address} onChange={(e) => setEmailAddress(e.target.value)}type="email_address" placeholder="youremail@gmail.com" id="email_address" name="email_address" />
                <label htmlFor="password">Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                {/* <button type="submit"><b>Login</b></button> */}
                <button className="btn btn-outline-success btn-md m-2" >
                    <a href='http://localhost:3001/login'>login</a>
                </button>
            </form>
            {/* <button className="link-btn" onClick={() => history('/signup')}>Don't have an account? Sign up here.</button> */}
            <button className="link" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
        </div>
    )
}

export default Signup;