import React, { useState } from 'react';
import Adminnav from './Adminnav';


export const Addproduct = () => {
  const [name, setName] = useState('')
  const [price, setprice] = useState('')
  const [size, setsize] = useState('')
  const [image, setimage] = useState('')

  const token = localStorage.getItem('token'); 
  const api = 'http://localhost:5000/api/products';


  async function addproduct(event) {

    try{

    let formData = new FormData();
    formData.append('image',image);
    formData.append('name', name);
    formData.append('price',price);
    formData.append('size',size);

    const config = {
        'Authorization': `barer ${token}`
    };
    await fetch(`${api}`,{
      method:'POST',
      headers:config,
      body:formData,
    });
    alert("product added!!!");
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

          <div className="mb-3">
            <label htmlFor="exampleInputname1" className="form-label">Name</label>
            <input
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
              onChange={(e) => setimage(e.target.files[0])}
              type="file"
              name="image"
              required
              className="form-control"
            />
          </div>

          <div className="d-grid">
            <button className="btn btn-primary" onClick={addproduct}>Add</button>
          </div>
        </div>
      </div>
    </>
  )
}
