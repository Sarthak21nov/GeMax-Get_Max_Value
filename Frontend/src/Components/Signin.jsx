/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

function Signin() {

  const[Email,SetEmail] = useState("")
  const[Password, SetPassword] = useState("")
  const[alert, SetAlert] = useState("")

  const HandleEmailChange = (e)=>{
    SetEmail(e.target.value)
  }

  const HandlePasswordChange = (e)=>{
    SetPassword(e.target.value)
  } 

  const HandleSubmit = (e)=>{
    e.preventDefault()
    if(!Email || !Password){
        SetAlert("All fields are Mandatory")
    } else{
        SetEmail("")
        SetPassword("")
        SetAlert("")
    }
  }

  return (
    <div>
      <div className='w-full h-[100vh] flex justify-center items-center'>
        <form className='w-[80%] min-h-[40vh] md:w-[30%] md:min-h-[50vh] bg-white flex-row shadow-2xl rounded-3xl glow' onSubmit={HandleSubmit}>
            <p className='text-4xl font-serif mt-3 ml-3'>Sign In</p>
            {alert && <div className="alert alert-danger" role="alert">{alert}</div>}
            <i><p className='text-lg font-serif mt-4 ml-4'>E-Mail ID:</p></i>
            <input type='email' placeholder='Enter E-mail ID' value={Email} onChange={HandleEmailChange} className='p-2 border-2 border-solid rounded-full w-[90%] shadow-xl ml-2'/>
            <i><p className='text-lg font-serif mt-3 ml-4'>Password:</p></i>
            <input type='password' placeholder='Enter Password' value={Password} onChange={HandlePasswordChange} className='p-2 border-2 border-solid rounded-full w-[90%] shadow-xl ml-2'/>
            <div className='flex justify-center items-center'>
              <button type="submit" className="btn btn-dark mt-2 m-auto">Login</button>
            </div> 
            <p className='text-center m-2'>Do not have an Account? <a href='/SignUp' className='text-blue-500 hover:underline'>Sign Up</a></p>   
        </form>
      </div>
    </div>
  )
}

export default Signin
