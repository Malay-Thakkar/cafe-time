import { useState } from 'react';
import axios from 'axios'
import Adminnav from './Adminnav';


const Updateproduct = () => {
  const [name, setName] = useState('')
  const [price, setprice] = useState('')
  const [size, setsize] = useState('')
  const [image, setimage] = useState('')
  const [product_id, setproduct_id] = useState('');


  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2FhYzBlMGRkMjI4YTNmZmM1YzZhOGUiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NzQ5MTA2ODgsImV4cCI6MTcwNjQ2ODI4OH0.J6h--_q8A8PAf_J6v6fdIXqbjoT3VHzlNCqY92mRRog';
  let api = `http://localhost:5000/api/products/${product_id}`;


  async function findproduct(event) {
    axios.get(`${api}`, {
      headers: {
        'Authorization': `bearer ${token}`
      }
    })
      .then((res) => {
        res.json();
        console.log(res.json);
      })
      .catch((error) => {
        console.error(error)
      })
  }


  async function Updateproduct(event) {

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
          <form onSubmit={findproduct}>

            <div className="mb-3">
              <label htmlFor="exampleInputname1" className="form-label">product id</label>
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
              <button className="btn btn-primary" type="submit">Find Product</button>
            </div>
          </form>
          <div className="container mx-auto mt-12 mb-20">
            <div className="flex">
              {/* <img src={product.image} className="product-img card" alt="pizza" />
              <div className="ml-16">
                <h1 className="text-xl font-bold">{product.name}</h1>
                <div className="text-md font-bold">{product.size}</div>
                <div className="text-md">{product.descr}</div>
                <div className="font-bold mt-2">₹ {product.price}</div> */}
            </div>
          </div>
        </div>

        <h1 className="text-center mb-4 text-primary">Update Product</h1>

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

          <div className="mb-3">
            <label htmlFor="exampleInputsize1" className="form-label">Image</label>
            <input
              value={image}
              onChange={(e) => setimage(e.target.value)}
              type="file"
              name="image"
              className="form-control"
            />
          </div>

          <div className="d-grid">
            <button className="btn btn-primary" type="submit">Add</button>
          </div>
        </form>
      </div>
    </>
  )
}
export default Updateproduct;
