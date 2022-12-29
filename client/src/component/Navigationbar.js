import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import React from 'react';
import Home from './Home';
import About from './About';
import Product from './Product';
import SingleProduct from './SingleProduct';
import Cart from './Cart';
import { useEffect, useState } from 'react';
import { CartContext } from './CartContext';
import '../App.css';
import { getCart, storeCart } from './helper'


const Navigationbar = () => {
  const [cart, setCart] = useState({});
  // Fetch cart from local storage
  useEffect(() => {
    getCart().then(cart => {
      setCart(JSON.parse(cart));
    });
  }, []);

  useEffect(() => {
    storeCart(JSON.stringify(cart));
  }, [cart]);
  return (
    <>
      <Router>
        <nav className='flex-container topnav sticky-top mx-auto flex items-center justify-between py-2'>
          <Link className="ml-5 " to="/">
            <img style={{ height: 50 }} src="logo.png" alt="logo" />
          </Link>

          <ul className="flex items-center text-black">
            <li><Link to="/">Home</Link></li>
            <li className="ml-6"><Link to="/about">About</Link></li>
            <li className="ml-6"><Link to="/product">Product</Link></li>
            <li className="ml-3 mr-3">
              <Link to="/cart">
                <div className='cartStyle'>
                  <span>{cart.totalItems ? cart.totalItems : 0}</span>
                  <img className='ml-2' src="cart.svg" alt="cart-icon" />
                </div>
              </Link>
            </li>
          </ul>

        </nav>
        <CartContext.Provider value={{ cart, setCart }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/product" exeact element={<Product />} />
            <Route path="/product/:_id" element={<SingleProduct />} />
            <Route path="/Cart" element={<Cart />} />
          </Routes>
        </CartContext.Provider>

      </Router>
    </>

  )
}

export default Navigationbar;

