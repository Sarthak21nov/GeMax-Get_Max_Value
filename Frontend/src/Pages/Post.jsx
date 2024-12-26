/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

function Post() {

  const[selectedFiles, SetSelectedFiles] = useState(null);

  function HandleFileChange(e){
    SetSelectedFiles(e.target.files)
  }

  function HandleSubmit(){

  }

  return (
    <div>
      <div className='text-black text-5xl font-bold text-center m-3'>
        <p>Product Description</p>
      </div>
      <div className='flex justify-center items-center'>
        <p className='text-xl'>Upload the product Image</p>
        <form onSubmit={HandleSubmit}></form>
      </div>
      {/* <form onSubmit={HandleSubmit} className=''>
        <div className='text-black text-xl'>
          <p className='text-black font-medium'>Upload Images</p>
          <input type='file' name='images' multiple accept='/*' onChange={HandleFileChange}/>
        </div>  
      </form> */}
    </div>
  )
}

export default Post
