/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

function CategoryCard(props) {
  return (
    <div>
      <div className='md:h-[300px] w-[200px] bg-slate-200 rounded-xl p-3 mt-3 shadow-2xl hover:scale-110 transition transform duration-500 hover:cursor-pointer flex justify-center items-center text-xl font-medium text-clip hover:bg-black hover:text-white'>
        <div className='flex-row'>
            <img src={props.image} className='h-[100px] w-[100px] rounded-lg m-auto'/>
            <p>{props.text}</p>
        </div>
      </div>
    </div>
  )
}

export default CategoryCard
