import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import React from 'react';
import Home from './Home';
import About from './About';
import Product from './Product';
import Cart from './Cart';
import { useState } from 'react';
// import { CartContext } from './CartContext';
import '../App.css';


const Navigationbar = () => {
  const [totalItems]=useState("0");
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
                  {/* <span>{cart.totalItems ? cart.totalItems : 0}</span> */}
                  <span>{totalItems}</span>
                  <img className='ml-2' src="cart.svg" alt="cart-icon" />
                </div>
              </Link>
            </li>
          </ul>

        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </Router>
    </>

  )
}

export default Navigationbar;

