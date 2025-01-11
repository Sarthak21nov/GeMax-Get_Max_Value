/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react'
import axios from 'axios'

function Signup() {
  const[Name, SetName] = useState("")
  const[PhoneNumber, SetPhoneNumber] = useState(0)
  const[Email, SetEmail] = useState("")
  const[Password, SetPassword] = useState("")
  const[alert, SetAlert] = useState("")
  const[ProfileImg, SetProfileImg] = useState([])
  const[Gender, SetGender] = useState("Choose Gender")

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

  const HandleFileChange = (e)=>{
    const files = Array.from(e.target.files)
    const imageURLs = files.map((file)=>URL.createObjectURL(file))
    SetProfileImg(imageURLs)
  }


  const HandleSubmit = (e)=>{
    e.preventDefault()
    if(!Name || !PhoneNumber || !Email || !Password){
      SetAlert("All fields are Mandatory")
    } else{
      const response = axios.post('http://localhost:8000/api/auth/SignUp', {
        Name: Name,
        PhoneNumber: PhoneNumber,
        Email: Email,
        Gender: Gender,
        Password: Password,
        ProfilePic: ProfileImg
      })

      console.log(response.data)

      if(response.data.success){
        alert(response.data.message)
      } else{
        alert(response.data.message)
      }

      SetName("")
      SetPhoneNumber(0)
      SetEmail("")
      SetPassword("")
      SetAlert("")
      SetProfileImg([])
    }

  }

  return (
    <div>
      <div className='w-full min-h-[100vh] bg-gradient-to-r from-white to-black flex justify-center items-center p-6'>
        <form className='bg-white w-[80%] min-h-[60vh] md:w-[30%] md:min-h-[70vh] flex-row rounded-3xl shadow-2xl glow' onSubmit={HandleSubmit} encType='multipart/form-data'>
          <p className='m-4 text-4xl font-serif'>Sign Up</p>
          {alert && <div className="alert alert-danger" role="alert">{alert}</div>}
          <i><p className='mt-6 ml-6 text-lg font-serif'>Name: </p></i>
          <input type='text' placeholder='Enter your Name' className='p-2 border-2 border-solid rounded-full w-[90%] shadow-xl ml-5' value={Name} onChange={HandleNameChange}/>

          <i><p className='mt-6 ml-6 text-lg font-serif'>Phone Number: </p></i>
          <input type='text' placeholder='Enter your Phone Number' className='p-2 border-2 border-solid rounded-full w-[90%] shadow-xl ml-5' value={PhoneNumber} onChange={HandleNumberChange}/>

          <i><p className='mt-6 ml-6 text-lg font-serif'>Email-ID: </p></i>
          <input type='email' placeholder='Enter your E-Mail ID' className='p-2 border-2 border-solid rounded-full w-[90%] shadow-xl ml-5' value={Email} onChange={HandleEmailChange}/>

          <div className='flex-row'>
            <i><label htmlFor='dropdown' className='mt-6 ml-6 text-lg font-serif'>Gender: </label></i>
            <select id='dropdown' className='w-[90%] p-2 ml-6 border-2 border-solid'>
              <option value='Male' onClick={SetGender("Male")}>Male</option>
              <option value='Female' onClick={SetGender("Female")}>Female</option>
              <option value='Other' onClick={SetGender("Other")}>Other</option>
            </select> 
          </div>
          <i><p className='mt-6 ml-6 text-lg font-serif'>Password: </p></i>
          <input type='password' placeholder='Enter your Password' className='p-2 border-2 border-solid rounded-full w-[90%] shadow-xl ml-5' value={Password} onChange={HandlePasswordChange}/>
          
          <i><p className='mt-6 ml-6 text-lg font-serif'>Profile Picture: </p></i>
          {ProfileImg.length == 0 ? <input type='file' name='ProfilePic' accept='images/*' onChange={HandleFileChange} className='p-2 ml-3'/> : <input type='file' name='images' accept='images/*' onChange={HandleFileChange} className='hidden'/>}

          <div>
            {ProfileImg.length > 0 && ProfileImg.map((image, index)=>(
              <img src={image} key={index} width={100} height={100} className='mt-6 ml-6 hover:cursor-pointer'/>  
            ))}
          </div>

          

          <div className='flex justify-center items-center'>
            <button type="submit" className="btn btn-dark mt-4 mb-4 m-auto rounded-full">Sign Up</button>
          </div>
        </form>
      </div>    
    </div>
  )
}

export default Signup
