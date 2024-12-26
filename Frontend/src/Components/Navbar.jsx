/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  const [isLoggedIn, SetLogin] = useState(false);
  
  return (
    <div>
      <div className='min-w-[100%] min-h-[80px] bg-black flex'>
        {/* left-navbar */}
        <div className='w-[20%] flex justify-center items-center'>
          <h2 className='text-center text-white text-2xl font-semibold'>GeMax</h2>
        </div>
        <div className='w-[80%] flex justify-end items-center mr-7'>
          <ul className='flex gap-8 justify-evenly text-white'>
            <Link to='/'><li className='hover:scale-110 transition transform hover:cursor-pointer'>Home</li></Link>
            <Link to='/about'><li className='hover:scale-110 transition transform hover:cursor-pointer'>About</li></Link>
            <Link to='/addProduct'><li className='hover:scale-110 transition transform hover:cursor-pointer'>Add Product</li></Link>
            {isLoggedIn ? <Link to='/login'><li className='hover:scale-110 transition transform hover:cursor-pointer'>Logout</li></Link> : <Link to='/login'><li className='hover:scale-110 transition transform hover:cursor-pointer'>Login</li></Link>}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
