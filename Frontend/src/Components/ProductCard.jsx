/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import image from '../assets/BannerImg.jpg'

function ProductCard(props) {
  return (
    <div>
      <div className='w-[250px] h-[300px] bg-slate-300 shadow-2xl rounded-lg hover:cursor-pointer hover:scale-110 transition transform duration-300'>
        <div className='h-[60%] w-100'>
            <img src={props.image} className='h-100 w-100 rounded-tl-lg rounded-tr-lg'/>
        </div>
        <div className='flex flex-col h-[40%] w-full'>
            <p className='pl-2 pt-2 font-bold text-xl'>&#8377; {props.price}</p>
            <p className='pl-2 font-normal'>{props.shortDescription}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
