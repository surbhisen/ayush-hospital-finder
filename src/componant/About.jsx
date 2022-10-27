import React from 'react'
import bg from '../assets/aboutpng.png'
const about = () => {
    return (
        <div className='about flex items-center justify-center 'id='about'>
            <div className="about__container flex flex-wrap justify-center items-center">
                <div className="about__container__image float-left w-52 sm:w-72 p-12">
                    <img src={bg} alt="about" className="" />
                </div>
                <div className="about__container__text  float-right w-1/2">
                    <h2 className='about__container__text__h2 my-8 font-bold text-4xl sm:text-5xl '>ABOUT US</h2>
                    <h3 className='about__container__text__h3 my-8 font-bold text-2xl sm:text-3xl'>MINISTRY OF AYUSH</h3>
                    <hr className='h-1 bg-blue-300' />
                    <p className="about__container__text__para my-8 font-sans text-gray-600 text-lg sm:text-xl ">The Ministry of Ayurveda, Yoga, Naturopathy, Unani, Siddha, Sowa-Rigpa and Homoeopathy (abbreviated as AYUSH) is purposed with developing education, research and propagation of indigenous alternative medicine systems in India. As per a recent notification published in the Gazette of India on 13 April 2021, the  Ministry of AYUSH (Ayurveda, Yoga & Naturopathy, Unani, Siddha and Homoeopathy), will now be known as the Ministry of Ayush. The Ministry of Ayush includes the seven traditional systems of healthcare</p>
                    <button className='about__container__text__button my-7 bg-blue-300 p-4 sm:py-4 sm:px-10 rounded-full '>READ MORE</button>
                    
                </div>
            </div>
        </div>
    )
}

export default about