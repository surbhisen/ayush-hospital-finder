import React from 'react'
import bg4 from '../assets/bg4.jpg'
import './Homepage.css'
const Homepage = () => {
  return (
    <div className='Homepage h-screen'id='home'
      style={{
      
        background: `url(${bg4})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "absolute",
        top: "0",
        zIndex: "-10",
        width: "100%",

      }}
    >
      <div className='w-4/5 m-auto mt-64 sm:mt-[45vh]'>
        <div className="wrapperr md:w-3/6">
          <h1 className='md:text-6xl text-4xl'>AYUSH HOSPITALS</h1>
          <h3 className='md:text-5xl text-2xl'> MINISTRY OF AYUSH </h3>
        </div>
      </div>
    </div>
  )
}

export default Homepage