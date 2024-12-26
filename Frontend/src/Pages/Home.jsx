import banner1 from '../assets/HomeBanner.png'
import CategoryCard from '../Components/CategoryCard'
import ElectronicImg from '../assets/electronicsImg.avif'
import FashionImg from '../assets/fashionImg.webp'
import HomeImg from '../assets/homeImg.webp'
import EssentialImg from '../assets/download.jpeg'
import BeautiImg from '../assets/beautiImg.webp'
import SportsImg from '../assets/sportsImg.jpeg'
import StationeryImg from '../assets/stationaryImg.png'
import TravelImg from '../assets/travelImg.jpeg'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'
import OtherImg from '../assets/OthersImg.png'


function Home() {
  return (
    <div>
      {/* Home Page Carousel Start*/}
      <div id="carouselExample" className="carousel slide w-[100%]" data-bs-ride="carousel">
        <div className="carousel-inner w-100 md:h-[500px] h-[250px]">
          <div className="carousel-item active">
            <img src={banner1} className="d-block w-100 md:h-[500px] h-[250px]" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={banner1} className="d-block w-100 md:h-[500px] h-[250px]" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={banner1} className="d-block w-100 md:h-[500px] h-[250px]" alt="..."/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* Home Page Carousel Ends */}

      {/* Categories Starts */}

      <h1 className="text-center mt-5 text-balance text-4xl font-normal">Select Category</h1>

      <div className='m-5 flex justify-evenly gap-5 flex-wrap'>
        <Link to='/Electronics'><CategoryCard text="Electronics" image={ElectronicImg}/></Link>
        <Link to='/Fashion'><CategoryCard text="Fashion" image={FashionImg}/></Link>
        <Link to='/HomeAndLiving'><CategoryCard text="Home and Living" image={HomeImg}/></Link>
        <Link to='/Essentials'><CategoryCard text="Essentials" image={EssentialImg}/></Link>
        <Link to='/Beauty'><CategoryCard text="Beauty and Health" image={BeautiImg}/></Link>
        <Link to='/Stationery'><CategoryCard text="Stationeries" image={StationeryImg}/></Link>
        <Link to='/Sports'><CategoryCard text="Sports and Games" image={SportsImg}/></Link>
        <Link to='/Travel'><CategoryCard text="Travel Products" image={TravelImg}/></Link>
        <Link to='/Others'><CategoryCard text="Other Products" image={OtherImg}/></Link>
      </div>

      {/* Categories Ends */}

      {/* Footer Section Starts */}
      <Footer/>
      {/* Footer SectIon Ends*/}
    </div>
  )
}

export default Home
