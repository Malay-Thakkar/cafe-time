import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import React from 'react';
import Home from './Home';
import Product from './Product';
import Profile from './Profile';
import Login from './Login'
import SingleProduct from './SingleProduct';
import Cart from './Cart';
import { useEffect, useState } from 'react';
import { CartContext } from './CartContext';
import '../App.css';
import { getCart, storeCart } from './helper'


const Navigationbar = () => {
  const [cart, setCart] = useState({});
  // const [Mode, setMode] = useState('light');
  //change theam
  // const toggleMode = () => {
  //   if (mode === 'light') {
  //     setMode('dark');
  //     document.body.style.backgroundColor = 'grey';
  //   }
  //   else {
  //     setMode('light');
  //     document.body.style.backgroundColor = 'white';
  //   }
  // };
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
          <nav className='topnav sticky-top mx-auto flex items-center justify-between py-2 navbar navbar-expand-lg navbar-light'>
          <Link className="ml-5 " to="/">
            <img style={{ height: 50 }} src="logo.png" alt="logo" />
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        
          <div className="collapse navbar-collapse justify-between" id="navbarSupportedContent"> 
            <ul className="items-center text-black navbar-nav mr-auto spaceing">
              <li className="ml-6"><Link to="/">Home</Link></li>
              <li className="ml-6"><Link to="/product">Product</Link></li>
              <li className="ml-6"><Link to="/me">Profile</Link></li>
              <li className="ml-6"><Link to="/login">Login</Link></li>
              <li className="ml-6 mr-3">
                {/* <li className=''><button><img className='ml-2' src="cart.svg" alt="cart-icon" /></button></li> */}
                <Link to="/cart">
                  <div className='cartStyle'>
                    <span>{cart.totalItems ? cart.totalItems : 0}</span>
                    <img className='ml-2' src="cart.svg" alt="cart-icon" />
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </nav>


        <CartContext.Provider value={{ cart, setCart }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" exeact element={<Product />} />
            <Route path="/product/:_id" element={<SingleProduct />} />
            <Route path="/me" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Cart" element={<Cart />} />
          </Routes>
        </CartContext.Provider>
      </Router>
    </>

  )
}

export default Navigationbar;

