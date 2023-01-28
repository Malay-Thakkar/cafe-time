import React, { useState } from 'react';
import axios from 'axios'
import Adminnav from './Adminnav';

const Deleteproduct = () => {
  const [product_id, setproduct_id] = useState('');
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2FhYzBlMGRkMjI4YTNmZmM1YzZhOGUiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NzQ4OTk0MTIsImV4cCI6MTcwNjQ1NzAxMn0.MLzfXY3mRGdXzZTyBYsd0lSeeHfL-Cr8GnYUfcF3q30';

  async function deleteproduct(event) {

    let api = `http://localhost:5000/api/products/${product_id}`;
    axios.delete(`${api}`, {
      headers: {
        'Authorization': `bearer ${token}`
      }
    })
      .then((res) => {
        res.json();
      })
      .catch((error) => {
        console.error(error)
      })

  }
  return (
    <>
      <Adminnav />
      <div className="vh-100 d-flex justify-content-center align-items-center m-5 ">
        <div className="col-md-5 p-5 shadow-sm border rounded border-primary m-5">
          <h1 className="text-center mb-4 text-primary">Delete Product</h1>

          <form onSubmit={deleteproduct}>

            <div className="mb-3">
              <label htmlFor="exampleInputname1" className="form-label">Name</label>
              <input
                value={product_id}
                onChange={(e) => setproduct_id(e.target.value)}
                type="text"
                placeholder="product id"
                name="product_id"
                required
                className="form-control border border-primary"
              />
            </div>

            <div className="d-grid">
              <button className="btn btn-primary" type="submit">Delete Product</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Deleteproduct