import React from 'react'
import ProductItems from './ProductItems';

const Product = () => {
  return (
    <>
      <div className='container mx-auto pb-24 m-5 '>
        <h1 className='font-bold my-8 '>Products</h1>

        <div className='grid gap-x-3 gap-y-4 grid-cols-5 my-8;'>

         <ProductItems />
         <ProductItems />
         <ProductItems />
         <ProductItems />
         <ProductItems />
         <ProductItems />
         <ProductItems />

        </div>
      </div>
    </>
  )
}

export default Product;