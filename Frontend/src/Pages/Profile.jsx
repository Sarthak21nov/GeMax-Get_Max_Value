/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import DefaultImage from '../assets/defaultProfile.jpg'
import Footer from '../Components/Footer'
import ProductCard from '../Components/ProductCard'

function Profile() {

  const[ChangeProfilePic, SetProfilePic] = useState(false)
  const[PublishedGig, SetPublishedGig] = useState([])

  const HandleProfileChange = (e)=>{
    SetProfilePic(!ChangeProfilePic)
  }

  const HandleLogout =(e)=>{

  }
  return (
    <div className='flex flex-col min-h-screen'>
    <div className='flex-grow flex justify-center items-center overflow-y-hidden'>
      <div className= 'w-[60%] h-[80vh] bg-slate-200 shadow-2xl rounded-lg m-5 glow'>
        <div className='flex justify-center items-center pt-[10vh]'>
          <img src={DefaultImage} alt="Profile Pic" className='h-[70px] w-[70px] rounded-full shadow-2xl hover:cursor-pointer' onClick={HandleProfileChange}/>
        </div>
        <div className='grid grid-cols-2 p-5'>
          <div className='col-span-1 flex-row'>
            <p className='text-end m-3 pr-6 text-xl'>Name: </p>
            <p className='text-end m-3 pr-6 text-xl'>Email: </p>
            <p className='text-end m-3 pr-6 text-xl'>Phone Number:</p>
            <p className='text-end m-3 pr-6 text-xl'>Gender: </p>
            <p className='text-end m-3 pr-6 text-xl'>Customer ID: </p>
          </div> 
          <div className='col-span-1 flex-row'>
            <p className='text-start m-3 text-xl'>Anonymous</p>
            <p className='text-start m-3 text-xl'>Anonymous@Email.com</p>
            <p className='text-start m-3 text-xl'>1234567890</p>
            <p className='text-start m-3 text-xl'>Not Defined </p>
            <p className='text-start m-3 text-xl'>11679rqrqwyr987rwhuiwe</p>
          </div>
        </div> 
        <div className='flex justify-center items-center'>
          <button type="button" className="btn btn-dark" onClick={HandleLogout}>Sign Out</button>
        </div>
      </div>
    </div> 
    </div>
  )
}

export default Profile
