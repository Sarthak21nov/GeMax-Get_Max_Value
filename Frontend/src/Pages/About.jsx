/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import Footer from '../Components/Footer.jsx'
import '../App.css'

function About() {
  return (
    <div>
      <div className='p-3'>
        <p className='text-center text-4xl font-serif font-bold m-2'>Know More About US?</p>
        <div className='md:grid md:grid-cols-2 flex flex-row flex-wrap min-h-[60vh] m-4'>
          <div className='grid col-span-1'>
            <iframe src="https://lottie.host/embed/45a051a0-8134-416d-b653-9413faace733/RKhZ7vGd6g.lottie" className='h-[40vh] md:h-full w-full p-5 time-fade'></iframe>
          </div>
          <div className='grid col-span-1 h-full w-full md:p-5'>
            <i><p className='text-center text-3xl m-2 font-serif p-2'>What is GeMax?</p></i>
            <p className='font-serif time-fade'>Welcome to GeMax: Get Max Value, your trusted online marketplace designed to simplify buying and selling while helping you maximize the worth of your items. GeMax is your one-stop destination for finding great deals on everything from electronics and vehicles to furniture and household essentials. We are committed to connecting people seamlessly and fostering a community of trust and transparency.
              <br/><br/>

            What sets GeMax apart is our cutting-edge <b>"Suggest Price Using AI" </b>feature. Powered by advanced artificial intelligence, this tool analyzes market trends, item conditions, and comparable listings to recommend the best price for your products. Whether you’re a seller looking to get the most value or a buyer seeking fair deals, our AI ensures informed decisions with minimal effort.<br/><br/>

            At GeMax, we value convenience, security, and sustainability. By promoting the reuse of items, we aim to reduce waste and create a positive environmental impact. Our user-friendly interface, personalized recommendations, and secure transaction process make it easier than ever to declutter your space or find what you need at the best value.<br/><br/>

            Join the GeMax community today and experience the future of online buying and selling with smart pricing, trust, and a commitment to sustainability.</p>
          </div>
          
          <div className='grid col-span-1 h-full w-full md:p-5'>
            <i><p className='text-center text-3xl m-2 font-serif p-2 pt-5'>We Work on Seller Consumer Relationship and Networking</p></i>
            <p className='font-serif time-fade'>At GeMax, we prioritize building strong and lasting seller-consumer relationships and fostering a robust network that empowers users to connect and thrive. Our platform is not just a marketplace but a dynamic ecosystem where trust, communication, and collaboration are at the forefront.
            <br/><br/>

            The seller-consumer relationship is the foundation of every successful transaction. We ensure seamless interactions between sellers and consumers by providing tools for transparent communication, secure transactions, and fair pricing. Sellers can showcase their products effectively, while consumers can make informed decisions with confidence. By nurturing these relationships, GeMax creates a space where both parties feel valued and respected.
            <br/><br/>

            Networking plays a vital role in expanding opportunities for sellers and buyers alike. At GeMax, we facilitate connections between individuals and communities, allowing sellers to reach a broader audience and consumers to discover a wide variety of products. Our AI-driven recommendations and user-friendly interface enhance these connections, making interactions meaningful and beneficial.
            <br/><br/>

            Through a commitment to trust, transparency, and mutual growth, GeMax transforms simple transactions into valuable relationships. By bridging the gap between sellers and consumers, we aim to create a network where everyone thrives, ensuring satisfaction and success for all.
            </p>
          </div>
          <div className='grid col-span-1'>
            <iframe src="https://lottie.host/embed/bb02481f-74ef-4457-bf08-40a4282d82a7/LGpEI6gbLt.lottie" className='h-[40vh] md:h-full w-full p-5 time-fade'></iframe>
          </div>

          <div className='grid col-span-1'>
            <iframe src="https://lottie.host/embed/6b857462-2f46-4bba-b110-14ee105247af/QHqiUSwrjv.lottie" className='h-[40vh] md:h-full w-full p-5 time-fade'></iframe>
          </div>
          <div className='grid col-span-1 h-full w-full md:p-5'>
            <i><p className='text-center text-3xl m-2 font-serif p-2'>What is AI Based Price Suggester</p></i>
            <p className='font-serif time-fade'>An AI-Based Price Suggester is an advanced tool designed to help users determine the optimal price for their products, leveraging the power of artificial intelligence. It analyzes multiple factors, including market trends, product conditions, demand, location, and comparable listings, to recommend a fair and competitive price. This innovative solution eliminates guesswork, making the pricing process efficient and transparent for both buyers and sellers.
            <br/><br/>

            The tool works by using machine learning algorithms trained on vast datasets from various marketplaces and industries. For sellers, it ensures their items are neither overpriced nor undervalued, maximizing the chances of a successful sale. For buyers, it offers confidence in the fairness of listed prices, fostering trust in the platform.
            <br/><br/>

            An AI-Based Price Suggester is especially valuable in dynamic markets, where prices can fluctuate based on trends and seasonal demand. Its ability to adapt and provide real-time recommendations ensures users stay competitive.
            <br/><br/>

            Platforms like GeMax integrate AI-based price suggesters to enhance the user experience, empowering sellers to set the right price effortlessly while helping buyers identify the best deals. This technology not only saves time but also promotes fair and sustainable trading, benefiting the entire ecosystem of online marketplaces.
            </p>
          </div>

          <div className='grid col-span-1 h-full w-full md:p-5'>
            <i><p className='text-center text-3xl m-2 font-serif p-2 pt-5'>Help People find best Deals</p></i>
            <p className='font-serif'>In today’s fast-paced world, finding the best deals can often feel overwhelming due to the sheer number of options available. At GeMax, our mission is to simplify this process by empowering people to discover the best value for their money quickly and effortlessly.
            <br/><br/>

            We leverage advanced tools and technologies, including AI-powered recommendations and smart filters, to connect buyers with products that match their needs and budgets. Whether you’re searching for electronics, furniture, vehicles, or everyday essentials, our platform ensures you find items at competitive prices without compromising on quality.
            <br/><br/>

            Transparency is at the core of what we do. By showcasing detailed product descriptions, seller ratings, and comparable pricing, we provide the insights necessary for informed decisions. Our AI-Based Price Suggester enhances this experience by analyzing trends and offering price recommendations, ensuring every deal is fair and worthwhile.
            <br/><br/>

            Additionally, we promote a user-friendly interface and personalized suggestions to save time and make the shopping experience enjoyable. GeMax is more than just a marketplace—it’s a community where trust, value, and sustainability come together.

            With GeMax, finding the best deals becomes an effortless journey, helping people maximize savings while fostering meaningful connections between buyers and sellers.
            </p>
          </div>
          <div className='grid col-span-1'>
            <iframe src="https://lottie.host/embed/bb02481f-74ef-4457-bf08-40a4282d82a7/LGpEI6gbLt.lottie" className='h-[40vh] md:h-full w-full p-5 '></iframe>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default About
