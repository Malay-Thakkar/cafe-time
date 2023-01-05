import React, { useState } from "react";
import Register from "./Register";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
            }),

        })

        const data = await response.json()  
        console.log(data);
        if (data.status === 'ok') {
            localStorage.setItem('token', data.user)
            alert('Login successful')
            window.location.href = '/Cart'
        } else {
            alert('Please check your username and password')
        }
    }

    return (
        <>
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label><br />
                <input 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    type="email" 
                    placeholder="youremail@gmail.com"  
                    name="email" 
                    required
                /><br />
                <label htmlFor="password">password</label><br />
                <input 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    type="password" 
                    placeholder="********"  
                    name="password" 
                    required
                /><br />
                <button type="submit" className="bg-yellow-500 py-1 px-8 rounded-full font-bold mt-4">Log In</button>
            </form>
            <button onClick={() => props.onFormSwitch('register')} className="bg-yellow-500 py-1 px-8 rounded-full font-bold mt-4" >Don't have an account? Register here.</button>
        </div>
        <Register />
        </>
    )
}
export default Login;