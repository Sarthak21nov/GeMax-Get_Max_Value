/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react'

function Signup() {
  const[Name, SetName] = useState("")
  const[PhoneNumber, SetPhoneNumber] = useState(0)
  const[Email, SetEmail] = useState("")
  const[Password, SetPassword] = useState("")
  const[alert, SetAlert] = useState("")

  const HandleNameChange = (e)=>{
    SetName(e.target.value)
  }

  const HandleNumberChange = (e)=>{
    SetPhoneNumber(e.target.value)
  }

  const HandleEmailChange = (e)=>{
    SetEmail(e.target.value)
  }

  const HandlePasswordChange = (e)=>{
    SetPassword(e.target.value)
  }

  const HandleSubmit = (e)=>{
    e.preventDefault()
    if(!Name || !PhoneNumber || !Email || !Password){
      SetAlert("All fields are Mandatory")
    } else{
      SetName("")
      SetPhoneNumber(0)
      SetEmail("")
      SetPassword("")
      SetAlert("")
    }
  }

  return (
    <div>
      <div className='w-full h-[100vh] bg-gradient-to-r from-white to-black flex justify-center items-center'>
        <form className='bg-white w-[80%] min-h-[60vh] md:w-[30%] md:min-h-[70vh] flex-row rounded-3xl shadow-2xl glow' onSubmit={HandleSubmit}>
          <p className='m-4 text-4xl font-serif'>Sign Up</p>
          {alert && <div className="alert alert-danger" role="alert">{alert}</div>}
          <i><p className='mt-6 ml-6 text-lg font-serif'>Name: </p></i>
          <input type='text' placeholder='Enter your Name' className='p-2 border-2 border-solid rounded-full w-[90%] shadow-xl ml-5' value={Name} onChange={HandleNameChange}/>
          <i><p className='mt-6 ml-6 text-lg font-serif'>Phone Number: </p></i>
          <input type='text' placeholder='Enter your Phone Number' className='p-2 border-2 border-solid rounded-full w-[90%] shadow-xl ml-5' value={PhoneNumber} onChange={HandleNumberChange}/>
          <i><p className='mt-6 ml-6 text-lg font-serif'>Email-ID: </p></i>
          <input type='email' placeholder='Enter your E-Mail ID' className='p-2 border-2 border-solid rounded-full w-[90%] shadow-xl ml-5' value={Email} onChange={HandleEmailChange}/>
          <i><p className='mt-6 ml-6 text-lg font-serif'>Password: </p></i>
          <input type='password' placeholder='Enter your Password' className='p-2 border-2 border-solid rounded-full w-[90%] shadow-xl ml-5' value={Password} onChange={HandlePasswordChange}/>
          <div className='flex justify-center items-center'>
            <button type="submit" className="btn btn-dark mt-4 mb-4 m-auto rounded-full">Sign Up</button>
          </div>
        </form>
      </div>    
    </div>
  )
}

export default Signup
