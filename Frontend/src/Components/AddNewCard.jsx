/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import '../App.css'

function AddNewCard() {

    const[images, SetImages] = useState(null)
    const[ProdName, SetProdName] = useState("") 
    const[Price, SetPrice] = useState(0)
    const[ProdDescription, SetProdDescription] = useState("")
    const[alert, SetAlert] = useState('')
    const SellerName = localStorage.getItem('SellerName')

  const HandleFileChange = (e)=>{
    SetImages(e.target.files)
  }  

  const HandleNameChange = (e)=>{
    SetProdName(e.target.value)
  }

  const HandlePriceChange = (e)=>{
    SetPrice(e.target.value)
  }

  const HandleDescriptionChange = (e)=>{
    SetProdDescription(e.target.value)
  }

  const HandleSubmit = (e)=>{
    e.preventDefault()
    if(!images || !ProdName || !Price || !ProdDescription){
        SetAlert("All fields are mandatory")
    } else{
        SetAlert("")
        SetImages(null)
        SetProdName("")
        SetPrice(0)
        SetProdDescription("")
    }
  }
  return (
    <div className='bg-gradient-to-b from-slate-100 to-black p-4'>
      <form className='w-100 min-h-[600px] flex justify-center items-center' onSubmit={HandleSubmit}>
        <div className='sm:w-[40%] w-[80%] flex-row min-h-[400px] bg-slate-100 shadow-3xl rounded-lg p-2 glow'>
            {alert && <div className="alert alert-danger" role="alert">{alert}</div>}
            <div className='flex-row'>
                <i><p className='font-serif text-xl pl-2 mt-3'>Product Images: </p></i>
                <input type='file' name='images' multiple accept='/*' onChange={HandleFileChange} className='p-2'/>
            </div>
            <div className='text-xl font-serif p-2'>
                <i><p className='mt-3'>Product Name: </p></i>
                <input type='text' value={ProdName} onChange={HandleNameChange} placeholder="Enter Product Name" className='w-full p-1 text-lg rounded-xl shadow-2xl'/>
                <i><p className='mt-3'>Product Price: </p></i>
                <div className='flex gap-6'>
                    <input type='number' value={Price} onChange={HandlePriceChange} placeholder="Enter Price" className='w-[40%] p-1 text-lg rounded-xl shadow-2xl'/>
                    <button type="button" className="btn btn-dark">Get Suggestion Using AI</button>
                </div>
                <i><p className='mt-3'>Description: </p></i>
                <textarea placeholder='Product Description' value={ProdDescription} onChange={HandleDescriptionChange} className='w-full min-h-[100px] p-2'/>
                <i><label htmlFor='dropdown' className='mt-3'>Choose an Option: </label></i>
                <select id='dropdown' className='w-full p-2'>
                    <option value=''>Select an Option</option>
                    <option value='Electronics'>Electronics</option>
                    <option value='Beauty'>Beauty</option>
                    <option value='Essentials'>Essentials</option>
                    <option value='Fashion'>Fashion</option>
                    <option value='Home And Living'>Home and Living</option>
                    <option value='Sports'>Sports</option>
                    <option value='Stationery'>Stationery</option>
                    <option value='Travel'>Travel</option>
                </select>     
                <div className='flex gap-6 mt-3'>
                    <i><p>Seller Name: </p></i>
                    <p>{SellerName}</p>
                </div>
                <div className='flex justify-center items-center m-2'>
                    <button type="Submit" className="btn btn-dark">Publish Product</button>
                </div>  
            </div>
        </div>
      </form>
    </div>
  )
}

export default AddNewCard
