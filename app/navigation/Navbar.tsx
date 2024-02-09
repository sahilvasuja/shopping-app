'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';

import 'react-toggle/style.css';


const Navbar = () => {
  const [isDarkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState('');

useEffect(()=>{
    const storedUserData = JSON.parse(localStorage.getItem('user'));
    if (storedUserData) {
        // Access user properties
        const { uid, displayName, email } = storedUserData;
        setUser(displayName)
        console.log(uid, displayName, email);
      } else {
        console.log('User data not found in local storage');
      }
  
}, [])
  const handleDarkModeToggle = () => {
    setDarkMode(!isDarkMode);
    // Add logic for switching between light and dark mode here
  };

  return (
    <nav className={`bg-teal-500 fixed w-full p-4 text-white flex items-center justify-between`}>
      <div className="text-xl font-bold">Shopping App</div>

      <div className="flex items-center space-x-4">
        <Link href="/mens" className="hover:text-gray-300">Mens</Link>  
        <Link href="/womens" className="hover:text-gray-300">Womens</Link>
        <Link href="/kids" className="hover:text-gray-300">Kids</Link>  
        <Link href="/others" className="hover:text-gray-300">Others</Link>

      </div>

      <div className="flex items-center space-x-4">
        <FaShoppingCart className="text-xl" />


        {
            user? user :   <Link href={'/auth/Login'} className="bg-transparent border border-solid border-white px-4 py-2 rounded hover:bg-white hover:text-black">
            Login
          </Link>
        }
      
      </div>
    </nav>
  );
};

export default Navbar;
