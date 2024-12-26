/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

function Searchbar() {

  const [text, SetText] = useState('')

  function HandleChange(e){
    SetText(e.target.value)
  }

  function onSubmit(e){
    e.preventDefault()
    SetText('')
  }

  return (
    <div>
        <form onSubmit={onSubmit}>
          <div className='w-100 h-[80px] bg-slate-800 flex justify-center items-center'>
            <input type='text' placeholder='Search your Product here' className='p-2 rounded-2xl w-[70%] h-[30px]' value={text} onChange={HandleChange}/>
            <button type="button" className="btn btn-light ml-2">Search</button>
          </div>  
        </form>
    </div>
  )
}

export default Searchbar
