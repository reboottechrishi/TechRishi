import React from 'react'
import rishiImg from '/src/assets/rishi.png';

const About = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-center items-stretch mt-20 mx-4 sm:mx-20 x1:mx-32 gap-8' id="about">
      <div className='flex-1 flex flex-col justify-center'>
        <h2 className='font-bold text-2xl mb-4 flex-row text-center sm:text-left'>About TechRishi</h2>
        <div className='flex flex-col sm:hidden w-full items-center mb-4'>
          <img 
            src={rishiImg} 
            className='rounded-full object-cover' 
            style={{ width: '180px', height: '180px', minWidth: '120px', minHeight: '120px', maxWidth: '220px' }} 
            alt="Rishi" 
          />
        </div>
        <p className='text-gray-950 text-lg items-center text-center sm:text-left'>Welcome to TechRishi! TechRishi is a collaborative tech community inspired by the spirit of the ancient Rishis—wise sages/researchers who devoted their lives to research, reflection, and freely sharing knowledge for the betterment of society. In that same spirit, TechRishi brings together developers, engineers, DevOps professionals, cloud architects, AI enthusiasts, and other curious minds who are eager to explore modern technology and share their findings openly with the community. We believe that knowledge grows when it’s shared. Through regular meetups, workshops, and open discussions, our members contribute insights, solve real-world problems, and help each other grow—without any cost or commercial motive. Join us if you believe in learning without boundaries and growing together like the Rishi of our time.</p>
      </div>
      <div className='hidden sm:flex flex-shrink-0 items-stretch justify-center'>
        <img 
          src={rishiImg} 
          className='rounded-full object-cover h-full' 
          style={{ aspectRatio: '1/1', minWidth: '200px', minHeight: '200px', maxWidth: '400px' }} 
          alt="Rishi" 
        />
      </div>
    </div>
  )
}

export default About
