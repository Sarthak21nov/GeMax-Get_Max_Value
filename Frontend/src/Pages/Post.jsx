/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Footer from '../Components/Footer';
import AddNewCard from '../Components/AddNewCard';

function Post() {

  return (
    <div>
      <div className='text-5xl font-bold text-center p-2'>
        <p>Publish a New Product</p>
      </div>
      <div>
        <AddNewCard/>
      </div>
      <Footer/>
    </div>
  )
}

export default Post
