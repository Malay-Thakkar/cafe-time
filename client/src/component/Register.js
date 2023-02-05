import { useState } from 'react'
import axios from "axios";
import { Navigate } from 'react-router-dom';

function Register() {


    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeat_password, setrepeat_password] = useState('')
    const [navigate, setNavigate] = useState(false);
    let refreshtoken="";
    async function registerUser(event) {
        try {
            event.preventDefault()
            await axios.post('http://localhost:5000/api/register', {
                name,
                email,
                password,
                repeat_password,
            })
            .then(response =>{
                refreshtoken=response.data.refresh_token;
                localStorage.setItem("token",refreshtoken);
                setNavigate(true);
              })
        }

        catch (error) {
            alert("Something went wrong!!!");

        }
    }


    if (navigate) {
        alert('Register susscessfully');
        return <Navigate to="/login" />;
    }


    return (
        <>
            <div className="vh-100 d-flex justify-content-center align-items-center m-5 ">
                <div className="col-md-5 p-5 shadow-sm border rounded border-primary m-5">
                    <h1 className="text-center mb-4 text-primary">Register</h1>

                    <form onSubmit={registerUser}>

                        <div className="mb-3">
                            <label htmlFor="exampleInputname1" className="form-label text-primary">Name</label>
                            <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                type="text"
                                placeholder="Name"
                                name="name"
                                required
                                className="form-control border border-primary"
                            />
                        </div>

                        <div className='mb-3'>
                            <label htmlFor="exampleInputEmail1" className="form-label text-primary">Email</label>
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
                            <label htmlFor="exampleInputsize1" className="form-label text-primary">Password</label>
                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                placeholder="Password"
                                name="password"
                                required
                                className="form-control border border-primary"
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleInputsize1" className="form-label text-primary">Conform Password</label>
                            <input
                                value={repeat_password}
                                onChange={(e) => setrepeat_password(e.target.value)}
                                type="password"
                                placeholder="repeat_password"
                                name="repeate_password"
                                required
                                className="form-control border border-primary"
                            />
                        </div>

                        <div className="d-grid">
                            <button className="btn btn-primary" type="submit">Sign up</button>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Register;