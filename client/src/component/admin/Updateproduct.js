import { useState } from 'react';
import SideAdminbar from './Sidebar/SideAdminbar'

const Updateproduct = () => {
  const [product, setProduct] = useState([]);
  const [product_id, setproduct_id] = useState({});
  const [name, setName] = useState('')
  const [price, setprice] = useState('')
  const [size, setsize] = useState('')
  const [image, setimage] = useState('')
  // const [image, setimage] = useState('')

  const token = localStorage.getItem('token');
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

      let formData = new FormData();
      formData.append('image', image);
      formData.append('name', name);
      formData.append('price', price);
      formData.append('size', size);

      const config = {
        'Authorization': `barer ${token}`
      };
      await fetch(`${api}`, {
        method: 'PUT',
        headers: config,
        body: formData,
      });
      alert("product Updated!!!");
    }
    catch (error) {
      console.log(error)
    }

  }


  return (
    <>
      <div className='main-container'><SideAdminbar />
        <div className='col'>
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
                <button className="btn btn-primary" onClick={Updateproduct}>Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Updateproduct;
