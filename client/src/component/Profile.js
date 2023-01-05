import React from 'react'
// import { useEffect } from 'react'

export const Profile = () => {
    // var temp_token = localStorage.getItem(token);
    const response = fetch('http://localhost:5000/api/me', {
        method: 'GET',
        headers: {

            'Key': 'Authorization',
            'Value': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2FhYzBlMGRkMjI4YTNmZmM1YzZhOGUiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NzI5MTk0MzIsImV4cCI6MTcwNDQ3NzAzMn0.FuIyxgTiDNvViCwOhOTbkPuI9TgkIe2-MUr7q2rH0Pg',
        },
    })
    console.log(response);


    // const data = await response.json()
    // console.log(data);

    // useEffect(() => {
    //   fetch('http://localhost:5000/api/me')
    //     .then(response => {
    //       console.log(response.json());
    //     })
    // });


    return (
        <>
            <div>
                <h1>Profile</h1>
            </div>
        </>
    )
}

export default Profile;