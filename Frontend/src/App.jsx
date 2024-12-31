import './index.css'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar.jsx'
import Home from '../src/Pages/Home.jsx'
import About from '../src/Pages/About.jsx'
import Post from '../src/Pages/Post.jsx'
import Login from '../src/Pages/Login.jsx'
import Register from '../src/Pages/Register.jsx'
import Electronics from '../src/CategoryPages/Electronics.jsx'
import Fashion from '../src/CategoryPages/Fashion.jsx'
import Essentials from '../src/CategoryPages/Essentials.jsx'
import HomeAndLiving from '../src/CategoryPages/HomeAndLiving.jsx'
import Beauty from '../src/CategoryPages/Beauty.jsx'
import Stationery from '../src/CategoryPages/Stationery.jsx'
import Sports from '../src/CategoryPages/Sports.jsx'
import Travel from '../src/CategoryPages/Travel.jsx'
import Others from '../src/CategoryPages/Others.jsx'
import SignUp from '../src/Components/Signup.jsx'
import Profile from './Pages/Profile.jsx'

function App() {

  return (
    <div className='overflow-x-hidden'>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/addProduct' element={<Post/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/Electronics' element={<Electronics/>}/>
          <Route path='/Fashion' element={<Fashion/>}/>
          <Route path='/HomeAndLiving' element={<HomeAndLiving/>}/>
          <Route path='/Essentials' element={<Essentials/>}/>
          <Route path='/Beauty' element={<Beauty/>}/>
          <Route path='/Stationery' element={<Stationery/>}/>
          <Route path='/Sports' element={<Sports/>}/>
          <Route path='/Travel' element={<Travel/>}/>
          <Route path='/Others' element={<Others/>}/>
          <Route path='/SignUp' element={<SignUp/>}/>
          <Route path='/Profile' element={<Profile/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
