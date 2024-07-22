import React from 'react'
import Collaborate from '../assets/collaborate.jpg'
import { SiTicktick } from "react-icons/si"; 

function Aboutus() {
  return (
    <div className='w-full h-screen relative'>
      <img src={Collaborate} alt="Collaborate" className='absolute inset-0 w-full h-full object-cover' />
      <div className='absolute inset-0 bg-gray-800 bg-opacity-50 flex flex-col justify-center items-center text-white p-8'>
        <h1 className='text-4xl font-bold mb-4'>The app to level up in life</h1>
        <h1 className='text-xl text-center'>Goodwall is the skills social network for 2 million+ young talent to learn and earn</h1>
        <div className='w-full flex flex-col items-center py-8 space-y-4'>
          <h1 className='flex items-center text-2xl'><SiTicktick className='text-green-400 mr-2' /> Build skills</h1>
          <h1 className='flex items-center text-2xl'><SiTicktick className='text-green-400 mr-2' /> Showcase skills</h1>
          <h1 className='flex items-center text-2xl'><SiTicktick className='text-green-400 mr-2' /> Find skill-based opportunities</h1>
        </div>
      </div>
    </div>
  )
}

export default Aboutus
