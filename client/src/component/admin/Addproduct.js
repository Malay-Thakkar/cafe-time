import React, { useState } from 'react';
import axios from 'axios'
import Adminnav from './Adminnav';
// import { Navigate } from 'react-router-dom';

export const Addproduct = () => {
  const [name, setName] = useState('')
  const [price, setprice] = useState('')
  const [size, setsize] = useState('')
  const [image, setimage] = useState('')
  // const [navigate, setNavigate] = useState(false);
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2FhYzBlMGRkMjI4YTNmZmM1YzZhOGUiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NzQzNzU0NzYsImV4cCI6MTcwNTkzMzA3Nn0.4I5kKDc2nIV9YJKdP3DfzEMas8bcXGtTFlO6gWsEvxE';
  const api = 'http://localhost:5000/api/products';


  async function addproduct(event) {
    event.preventDefault()
    var body = {
        name:'malay',
        price:'777',
        size:'medlarge',
        image:'C:\fakepath-15.jpg',
      // name,
      // price,
      // size,
      // image,
    }

    axios({
      method: 'post',
      url: `${api}`,
      data: body,
      headers: {
        'Authorization': `bearer ${token}`,
      },

    })
      // .then(function (response) {
      //   console.log(response);
      // })
      .catch(function (error) {
        console.log(error);
      });
  }

  //   axios.post(`${api}`, {
  //     headers: {
  //       'Authorization': `bearer ${token}`,
  //     },

  //   })
  //     .catch((error) => {
  //       console.error(error)
  //     })

  // }
  //   try {
  //     event.preventDefault()
  //     await axios.post(`${api}`, {
  //       headers: {
  //         'Authorization': `bearer ${token}`
  //       },
  //       data: {
  // name,
  // price,
  // size,
  // image,
  //       }
  //     });
  //     setNavigate(true);
  //   }

  //   catch (error) {
  //     alert("invalid user!!!");
  //     console.log(error);


  //   }
  // }

  // if (navigate) {
  //   alert('product added !!!');
  //   return <Navigate to="/addproduct" />;
  // }

  // const Addproduct = () => {
  // const [name, setName] = useState('')
  // const [price, setprice] = useState('')
  // const [size, setsize] = useState('')
  // const [img, setimg] = useState('')
  // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2FhYzBlMGRkMjI4YTNmZmM1YzZhOGUiLCJyb2xlIjoiY3VzdG9tZXIiLCJpYXQiOjE2NzIxMzgxMDQsImV4cCI6MTcwMzY5NTcwNH0.5DVpN7XmmuuVb5WGC07dOtprNRAqToHpqADKGWUXlA4';
  // const api = 'http://localhost:5000/api/product';

  //   async function addproduct(event) {
  //     event.preventDefault()

  //     const response = await fetch(`${api}`, {
  //       method: 'POST',
  // headers: {
  //   'Content-Type': 'application/json',
  //   'Authorization': `barer ${token}`,
  // },
  //       body: JSON.stringify({
  // name,
  // price,
  // size,
  // img,
  //       }),
  //     })

  //     const data = await response.json()

  //     if (data.status === 'ok') {
  //       alert("Register susscessfully");
  //     }
  //   }

  return (
    <>
      <Adminnav />
      <div className="vh-100 d-flex justify-content-center align-items-center m-5 ">
        <div className="col-md-5 p-5 shadow-sm border rounded border-primary m-5">
          <h1 className="text-center mb-4 text-primary">Add Product</h1>

          <form onSubmit={addproduct}>

            <div className="mb-3">
              <label htmlFor="exampleInputname1" className="form-label">Name</label>
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
              <label htmlFor="exampleInputEmail1" className="form-label">Price</label>
              <input
                value={price}
                onChange={(e) => setprice(e.target.value)}
                type="number"
                placeholder="Price"
                name="price"
                required
                className="form-control border border-primary"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputsize1" className="form-label">Size</label>
              <input
                value={size}
                onChange={(e) => setsize(e.target.value)}
                type="text"
                placeholder="size"
                name="size"
                required
                className="form-control border border-primary"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputsize1" className="form-label">Image</label>
              <input
                value={image}
                onChange={(e) => setimage(e.target.value)}
                type="file"
                name="file"
                required
                className="form-control"
              />
            </div>

            <div className="d-grid">
              <button className="btn btn-primary" type="submit">Add</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

