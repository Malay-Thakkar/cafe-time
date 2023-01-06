import {useEffect, useState} from 'react'
import ProductItems from './ProductItems';


const Product = () => {
  const [products,setproducts]= useState([]);
  useEffect(()=>{
    // https://fakestoreapi.com/products/
    fetch('api/products')
    .then(response=>response.json())
    .then(products=>{
      setproducts(products);
      
    }); 
  },[]);
  return (
    <>
      <div className='container mx-auto pb-24 m-5 '>
        <h1 className='font-bold my-8 '>Products</h1>
          
        <div className='row gap-x-3 gap-y-4'>
         {
            products.map(product=><ProductItems key={product._id} product={product}/>)
         }
        </div>
      </div>
    </>
  )
}

export default Product;