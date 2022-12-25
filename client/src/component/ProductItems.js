import React from 'react'
import { Link } from 'react-router-dom';


const ProductItems = (props) => {  

  return (
    <>
      
        <div className='bg-gray-200 items-center rounded-lg'>
          <div className='m-2'>
          <Link to={"/product"}>
            <img src="https://source.unsplash.com/200x200?coffe" alt="p-1" />
            </Link>
            <div className='text-center font-bold'>
              <h4 className=' m-2 py-2'>Expresso Coffe</h4>
              <span className='bg-gray-300 py-1 rounded-full px-4'>Large</span>
              <div className='flex justify-between items-center mt-4'>
                <span>₹ 499</span>
                <button className='bg-yellow-500  py-1 rounded-full px-4'>Add</button>
              </div>
            </div>
          </div>
        </div>
      
    </>
  )
}

export default ProductItems;