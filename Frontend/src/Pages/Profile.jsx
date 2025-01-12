/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import DefaultImage from '../assets/defaultProfile.jpg'
import Footer from '../Components/Footer'
import ProductCard from '../Components/ProductCard'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Profile() {

  const[ChangeProfilePic, SetProfilePic] = useState(false)
  const[PublishedGig, SetPublishedGig] = useState([])
  const[userName, SetUserName] = useState("")
  const[Email, SetEmail] = useState("")
  const[Phone, SetPhone] = useState("")
  const[Gender, SetGender] = useState("")
  const[CustomerID, SetCustomerID] = useState("")
  const navigate = useNavigate()


  useEffect(()=>{
    const fetchData = async ()=>{
      const CustId = localStorage.getItem('CustomerID');
      const response = await axios.get('http://localhost:8000/api/auth/getUser', {
        params: { CustomerID: CustId }, // Pass CustomerID as a query parameter
      });
      console.log(response.data)
      if(response.data.success){
        SetUserName(response.data.data.Name)
        SetEmail(response.data.data.Email)
        SetPhone(response.data.data.PhoneNumber)
        SetGender(response.data.data.Gender)
        SetCustomerID(response.data.data._id)
      }  
    }
    fetchData()
  }, [])

  const HandleProfileChange = (e)=>{
    SetProfilePic(!ChangeProfilePic)
  }

  const HandleLogout =()=>{
    if(localStorage.getItem('CustomerID')){
      localStorage.removeItem('CustomerID')
      localStorage.removeItem('CustomerName')
      alert("Logged Out Successfully")
    }
    navigate('/login')
  }
  return (
    <div className='flex flex-col min-h-screen'>
    <div className='flex-grow flex justify-center items-center overflow-y-hidden'>
      <div className= 'w-[]95% h-[80vh] bg-slate-200 shadow-2xl rounded-lg m-5 glow'>
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
          <div className='col-span-1 flex-row text-wrap'>
            <p className='text-start m-3 text-xl'>{userName}</p>
            <p className='text-start m-3 text-xl text-clip'>{Email}</p>
            <p className='text-start m-3 text-xl'>{Phone}</p>
            <p className='text-start m-3 text-xl'>{Gender}</p>
            <p className='text-start m-3 text-xl'>{CustomerID}</p>
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
