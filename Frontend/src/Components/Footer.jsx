/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
      <div className='w-100 bg-black opacity-80'>
        <div className='text-center text-4xl pt-3 text-white font-medium'>
          <h2>Thank You for Choosing GeMax</h2>
          <p className='text-center text-xl pt-3 text-white'>As a core objective of GeMax we are bound to provide you best possible deal for your product</p>
        </div>
        <div className='flex justify-center items-center gap-11'>
          <div className='md:flex font-serif md:text-5xl md:mr-10 md:p-7 hidden'>
            <p className='text-white'>GeMax</p>
          </div>
          <div className='flex m-5 p-5 gap-8 text-white'>
            <ul className='p-3'>
              <Link to='/'><li className='p-2 hover:cursor-pointer hover:scale-110 transition transform duration-300'>Home</li></Link>
              <Link to='/about'><li className='p-2 hover:cursor-pointer hover:scale-110 transition transform duration-300'>About</li></Link>
              <Link to='/addProduct'><li className='p-2 hover:cursor-pointer hover:scale-110 transition transform duration-300'>Add a Product</li></Link>
              <Link to='/Others'><li className='p-2 hover:cursor-pointer hover:scale-110 transition transform duration-300'>All Products</li></Link>
            </ul>
            <ul>
              <Link to='/Electronics'><li className='p-2 hover:cursor-pointer hover:scale-110 transition transform duration-300 '>Electronics</li></Link>
              <Link to='/Fashion'><li className='p-2 hover:cursor-pointer hover:scale-110 transition transform duration-300'>Fashion</li></Link>
              <Link to='/HomeAndLiving'><li className='p-2 hover:cursor-pointer hover:scale-110 transition transform duration-300'>Home and Living</li></Link>
              <Link to='/Essentials'><li className='p-2 hover:cursor-pointer hover:scale-110 transition transform duration-300'>Essentials</li></Link>
              <Link to='/Beauty'><li className='p-2 hover:cursor-pointer hover:scale-110 transition transform duration-300'>Beauty</li></Link>
              <Link to='/Stationery'><li className='p-2 hover:cursor-pointer hover:scale-110 transition transform duration-300'>Stationery</li></Link>
              <Link to='/Sports'><li className='p-2 hover:cursor-pointer hover:scale-110 transition transform duration-300'>Sports And Games</li></Link>
              <Link to='/Travel'><li className='p-2 hover:cursor-pointer hover:scale-110 transition transform duration-300'>Travel Accessories</li></Link>
            </ul>
          </div>
        </div>
        <div className='text-white flex justify-center items-center bg-slate-700'>
          <p>&copy; Copyright by GeMax</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
