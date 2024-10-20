import React, { useState } from 'react';

import { IoMdSearch } from "react-icons/io";

import { FaCartPlus } from "react-icons/fa";

import { Link, NavLink, useNavigate } from 'react-router-dom'; // Enable navigation
import Nav from './Nav';



export default function Header() {
  const [query, setQuery] = useState('');


  const nav = useNavigate(); // useNavigate hook for navigation

 

  const handleInput = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`You searched for: ${query}`);
  };

  const gotoLogin = () => {
    nav("/login"); // Navigate to login page
  };


  
 

 
  
  
  return (
    <>
    
        <div className="navigation">
          <div className="navbar-left">
            <Link to="/">
              <img
                src="https://api.asm.skype.com/v1/objects/0-jhb-d6-b75a4d30128aafbd0b6fec7cffd88dbf/views/imgpsh_fullsize_anim"
                alt="logo"
              />
            </Link>
          </div>
          
          <div className='search-10'>
            {/* Search bar */}
            <form onSubmit={handleSearch} className="search-bar">
              <input
                type="search"
                placeholder="Search for products"
                value={query}
                onInput={handleInput}
                id="search"
              />
              <button type="submit" className="search-button">
                <IoMdSearch />
              </button>
            </form>
          </div>

          <div className="nav-icons">
            {/* Login button with navigation */}
            <button className="login-button" onClick={gotoLogin}>Login</button>
          
           <NavLink to="/cart" className="cart-link">
              <FaCartPlus className='trolley' />
              <span className='cart-total'>10</span>
              </NavLink>
          </div>
        </div>
       <Nav/>

       
         
     
        
    </>
  );
}
