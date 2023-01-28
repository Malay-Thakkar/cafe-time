import React, { useState } from 'react';
import axios from 'axios'
import Adminnav from './Adminnav';


export const Addproduct = () => {
  const [name, setName] = useState('')
  const [price, setprice] = useState('')
  const [size, setsize] = useState('')
  const [image, setimage] = useState('')

  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2FhYzBlMGRkMjI4YTNmZmM1YzZhOGUiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NzQ5MTA2ODgsImV4cCI6MTcwNjQ2ODI4OH0.J6h--_q8A8PAf_J6v6fdIXqbjoT3VHzlNCqY92mRRog';
  const api = 'http://localhost:5000/api/products';


  async function addproduct(event) {

    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `barer ${token}`,
        }
      };

      axios.post(`${api}`, {
        name,
        price,
        size,
        image,

      }, config)
        .then(function (response) {
          console.log(response.data)
          alert("hi");
        })
    }
    catch (error) {
      console.log(error)
    }
  }


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
                name="image"
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

