/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Searchbar from '../Components/Searchbar'
import Footer from '../Components/Footer'
import axios from 'axios'

function Sports() {

  const[Products, SetProducts] = useState([])

  const initialLoading = ()=>{
    const response = axios.get('http://localhost:8000/api/products/Category', {
      "Category": "Sports"
    })

    console.log(response.data)
    if(response.data.success){
      SetProducts(response.data.Products)
    } else{
      alert(response.data.message)
    }
  }

  useEffect(()=>{
    initialLoading()
  }, [])

  return (
    <div>
      <Searchbar/>
      <div className='flex flex-wrap gap-6 m-2 justify-evenly mt-4 p-6'>
        
      </div>
      <Footer/>
    </div>
  )
}

export default Sports
