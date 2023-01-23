import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import axios from "axios";
import { Navigate } from 'react-router-dom';


export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [navigate, setNavigate] = useState(false);
    async function handleSubmit(event) {
        try {
            event.preventDefault()
            await axios.post('http://localhost:5000/api/login', {
                email,
                password,
            });
            setNavigate(true);
        }

        catch (error) {
            alert("invalid user!!!");

        }
    }

    if (navigate) {
        alert('Login susscessfully');
        return <Navigate to="/me" />;
    }

    return (
        <>
            <div className="vh-100 d-flex justify-content-center align-items-center m-5 ">
                <div className="col-md-5 p-5 shadow-sm border rounded border-primary m-5">
                    <h1 className="text-center mb-4 text-primary">Login</h1>

                    <form onSubmit={handleSubmit}>
                
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label text-primary">Email address</label>
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                placeholder="youremail@gmail.com"
                                name="email"
                                required
                                className="form-control border border-primary"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label text-primary">Password</label>
                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                placeholder="********"
                                name="password"
                                required
                                className="form-control border border-primary"
                            />
                        </div>
                        <p className="small"><a className="text-primary" href="forget-password.html">Forgot password?</a></p>
                        <div className="d-grid">
                            <button className="btn btn-primary" type="submit">Login</button>
                        </div>
                    </form>
                    <div className="mt-3">
                        <p className="mb-0  text-center">Don't have an account? <Link to="/register"
                            className="text-primary fw-bold">SignUp</Link></p>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Login;