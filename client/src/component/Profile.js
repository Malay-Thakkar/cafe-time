import React, { useState } from "react";
import axios from 'axios';

export const Profile = () => {

    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2FhYzBlMGRkMjI4YTNmZmM1YzZhOGUiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NzQ5ODQ4MzIsImV4cCI6MTcwNjU0MjQzMn0.s66uemv2K3o5lUlqoAPufrhnJX1a4tyJKZr7XEVNoaI';
    const api = 'http://localhost:5000/api/me';
    const apilogout = 'http://localhost:5000/api/logout';
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [role, setrole] = useState('');
    const [userid, setuserid] = useState('');
 



    axios.get(`${api}`, {
        headers: {
            'Authorization': `bearer ${token}`
        }
    })
        .then((res) => {
            setname(res.data.name);
            setuserid(res.data._id);
            setrole(res.data.role);
            setemail(res.data.email);
        })
        .catch((error) => {
            console.error(error)
        })

    const logout = () => {
        axios.post(`${apilogout}`, {
            headers: {
                'Authorization': `bearer ${token}`
            },
            data:{
                "refresh_token":`${token}`
            }

        })
            .then((res) => {
                alert("logout");
            })
            .catch((error) => {
                console.error(error)
                console.log("logout");
            })
    }




    return (
        <>
            <div className='container mx-auto pb-24 m-5 '>
                <h1 className='font-bold my-8 '>Profile</h1>
                <div className="vh-100 d-flex justify-content-center align-items-center m-2">
                    <div className="col-md-5 p-5 shadow-sm border rounded border-primary m-5">
                        <h5>Name: {name}</h5>
                        <h5>Email id: {email}</h5>
                        <h5>User id: {userid}</h5>
                        <h5>Role: {role}</h5>
            
                        <div className="d-grid">
                            <button className="btn btn-primary" onClick={() => logout()}>Logout</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile;