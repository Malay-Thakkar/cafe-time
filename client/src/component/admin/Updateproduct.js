import { useState } from 'react';
import axios from 'axios';
import Adminnav from './Adminnav';


const Updateproduct = () => {
  const [product, setProduct] = useState([]);
  const [product_id, setproduct_id] = useState({});
  const [name, setName] = useState('')
  const [price, setprice] = useState('')
  const [size, setsize] = useState('')
  // const [image, setimage] = useState('')

  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2FhYzBlMGRkMjI4YTNmZmM1YzZhOGUiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NzQ5ODQ4MzIsImV4cCI6MTcwNjU0MjQzMn0.s66uemv2K3o5lUlqoAPufrhnJX1a4tyJKZr7XEVNoaI';
  let api = `http://localhost:5000/api/products/${product_id}`;

  const findproduct = async () => {
    try {


      const res = await fetch(`${api}`);
      const data = await res.json();
      if (data == null) {
        return alert("your product id is wrong!");
      }
      else {
        setProduct(data);
      }

    }
    catch (err) {
      alert("Somthing went wrong");
      // console.log(err);
    }

  }

  async function Updateproduct(event) {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `barer ${token}`,
        }
      };

      axios.put(`${api}`, {
        name,
        price,
        size,

      }, config)
        .then(function (response) {
          alert("Product Updated!!!");
        })
    }
    catch (error) {
      // console.log(error)
      alert("Something went wrong!!!");
    }
  }


  return (
    <>
      <Adminnav />
      <div className="vh-100 d-flex justify-content-center align-items-center m-5 ">
        <div className="col-md-5 p-5 shadow-sm border rounded border-primary m-5">

          <div className="mb-3">
            <label htmlFor="exampleInputname1" className="form-label">product id</label>
            <input
              placeholder="Enter product id"
              onChange={(e) => setproduct_id(e.target.value)}
              type="text"
              name="product_id"
              required
              className="form-control border border-primary"
            />
          </div>

          <div className="d-grid">
            <button className="btn btn-primary" onClick={findproduct}>Find Product</button>
          </div>

          <div className="row flex m-3">
            <img src={product.image} className="product-img col card" alt="Product Img" />
            <div className="col">
              <h1 className="text-xl font-bold">{product.name}</h1>
              <div className="text-md font-bold">{product.size}</div>
              <div className="text-md">{product.descr}</div>
              <div className="font-bold mt-2">₹ {product.price}</div>
            </div>
          </div>


          <h1 className="text-center mb-4 text-primary my-5">Update Product</h1>

          <form onSubmit={Updateproduct}>

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

          {/* <div className="mb-3">
            <label htmlFor="exampleInputsize1" className="form-label">Image (Optional)</label>
            <input
              value={image}
              onChange={(e) => setimage(e.target.value)}
              type="file"
              name="image"
              className="form-control"
            />
          </div> */}

            <div className="d-grid">
              <button className="btn btn-primary" type="submit">Update</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
export default Updateproduct;
