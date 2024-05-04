import React from 'react'
import photo from '../../utils/Souvik.jpg'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <div className='w-full h-screen flex flex-col px-[600px] gap-6 '>
      <div className='mt-12'>
      <img className='w-[300px] h-[300px]' src={photo}/>
      </div> 
      <div className='text-center flex flex-col items-center gap-3'>
        <h1 className='text-3xl font-semibold'>Souvik Roy</h1>
        <p className='text-2xl font-extrabold'>A Passionate Learner</p>
        <p className='text-2xl font-bold'>Expertise in JavaScript and React🚀💖</p>
        <div className='flex items-center gap-4'>
          <h1 className='text-xl font-bold'>Check out:-</h1>
        <a href='https://www.linkedin.com/in/souvik-roy-9761391a4'><FaLinkedin className='w-[60px] h-[60px]' /></a>
        <a href='https://github.com/souvik356'><FaGithub className='w-[60px] h-[60px]' /></a>
        </div>
      </div>
    </div>
  )
}

export default Contact