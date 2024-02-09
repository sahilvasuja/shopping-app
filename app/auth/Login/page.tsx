'use client'
import { auth } from '@/firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
const Login = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [name,setName]=useState('')

  const handleEmailLogin = async(e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try{
        const userCredentials= await createUserWithEmailAndPassword(auth, email,password)
        console.log(userCredentials.user)
        const user = userCredentials.user;
        await updateProfile(user, { displayName: name });
        localStorage.setItem('user', JSON.stringify({
            uid: user.uid,
            displayName: user.displayName,
            email: user.email,
            // Add more user data as needed
          }));
      
        window.location.href='/'
    }
    catch(err){
        console.log(err)
    }
  };

  const handleGoogleLogin = () => {
    // Add your Google login logic here
  };

  const handlePhoneLogin = () => {
    // Add your phone number login logic here
  };

  return (
    <>
    
    <div className="bg-gray-100 bg-center h-screen flex items-center justify-center" >
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center">Login</h2>

        {/* Email/Password Login */}
        <form onSubmit={handleEmailLogin}>
        <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="text"
              name="text"
              className="border rounded w-full py-2 px-3 focus:outline-none focus:border-blue-500"
              required
              value={name}
              onChange={(e)=>setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="border rounded w-full py-2 px-3 focus:outline-none focus:border-blue-500"
              required
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              className="border rounded w-full py-2 px-3 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full mb-4"
          >
            Login with Email
          </button>
        </form>

        <hr className="my-6" />

        {/* Login with Google */}
        <button
          onClick={handleGoogleLogin}
          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 w-full flex items-center justify-center"
        >
          <FaGoogle className="mr-2" />
          Login with Google
        </button>

        {/* Login with Phone Number */}
        <button
          onClick={handlePhoneLogin}
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 mt-4 w-full"
        >
          Login with Phone Number
        </button>
      </div>
    </div>

</>
  );
};

export default Login;
