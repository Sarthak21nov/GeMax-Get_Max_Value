/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Signin() {

  const[Email,SetEmail] = useState("")
  const[Password, SetPassword] = useState("")
  const[CustomAlert, SetAlert] = useState("")
  const navigate = useNavigate()

  const HandleEmailChange = (e)=>{
    SetEmail(e.target.value)
  }

  const HandlePasswordChange = (e)=>{
    SetPassword(e.target.value)
  } 

  const HandleSubmit = async (e)=>{
    e.preventDefault()

    if(localStorage.getItem('CustomerID')){
      alert("You are already logged in")
    } else{
      if(!Email || !Password){
        SetAlert("All fields are Mandatory")
      } else{
          const response = await axios.post('http://localhost:8000/api/auth/SignIn', {
            Email: Email,
            Password: Password
          })

          console.log(response.data)
          if(response.data.success){
            localStorage.setItem('CustomerID', response.data.CustomerID)
            localStorage.setItem('CustomerName', response.data.CustomerName)
            const message = response.data.message
            alert(message)
            navigate('/')
          }else{
            alert(response.data.message)
          }

          SetEmail("")
          SetPassword("")
          SetAlert("")
      }
    }

  }

  return (
    <div>
      <div className='w-full h-[100vh] flex justify-center items-center'>
        <form className='w-[80%] min-h-[40vh] md:w-[30%] md:min-h-[50vh] bg-white flex-row shadow-2xl rounded-3xl glow' onSubmit={HandleSubmit}>
            <p className='text-4xl font-serif mt-3 ml-3'>Sign In</p>
            {CustomAlert && <div className="alert alert-danger" role="alert">{CustomAlert}</div>}
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
