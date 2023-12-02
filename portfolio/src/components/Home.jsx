import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>

    {/*Container */}
    <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Ryan Cho</h1>
        <h2>I'm a Full Stack Developer.</h2>
        <p> I'm a full-stack developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building responsive full-stack web applications.</p>
        <div>
            <button>View Work <HiArrowNarrowRight /></button>
        </div>
    </div>
    </div>
  )
}


export default Home 