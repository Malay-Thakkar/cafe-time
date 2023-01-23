import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { CartContext } from './CartContext';
import '../App.css'
const ProductItems = (props) => {
  const [isAdding, setIsAdding] = useState(false);
    const { cart, setCart } = useContext(CartContext);
    const { product } = props;

    const addToCart = (event, product) => {
        event.preventDefault();
        let _cart = {...cart}; // { items: {}}
        if (!_cart.items) {
            _cart.items = {}
        }
        if (_cart.items[product._id]) {
            _cart.items[product._id] += 1;
        } else {
            _cart.items[product._id] = 1;
        }

        if(!_cart.totalItems) {
            _cart.totalItems = 0;
        }
        _cart.totalItems += 1;
        setCart(_cart);
        setIsAdding(true);
        setTimeout(() => {
            setIsAdding(false);
        }, 1000);
        
        // const cart = {
        //     items: {
        //         '608c2960e165f6137f02b552': 2,
        //         '608c28e8e165f6137f02b550': 3
        //     },
        //     totalItems: 5
        // }
}
    
  return (
    <>

      <div className='bg-gray-200 items-center rounded-lg hover:bg-gray-300'>
        <div className='m-2'>
          <Link to={`/product/${product._id}`}>
            {/*for image https://source.unsplash.com/200x200?pizza */}
            <img src={product.image} alt="product_image" className='product' />

            <div className='text-center font-bold'>
              <h4 className=' m-2 py-2'>{product.name}</h4>
              <span className='bg-gray-400 py-1 rounded-full px-4'>{product.size}</span>
              <div className='flex justify-between items-center mt-4'>
                <span>₹ {product.price}</span>
              <button disabled={isAdding} onClick={(e) => { addToCart(e, product) }} className={`${ isAdding ? 'bg-green-500': 'bg-yellow-500' } bg-yellow-500  py-1 rounded-full px-4`}>ADD{isAdding ? 'ED': ''}</button>
              </div>
            </div>
          </Link>
        </div>
      </div>

    </>
  )
}

export default ProductItems;