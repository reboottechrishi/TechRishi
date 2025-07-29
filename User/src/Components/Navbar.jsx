import React from 'react'
import rishiImg from '/src/assets/rishi.png';
import { motion } from "motion/react"



const Navbar = () => {
  return (
    <div className='flex justify-between items-center py-5 mx-8 sm:mx-20 x1:mx-32'>
      <div className='items-center gap-2 mt-4 hidden sm:flex'>
       <img src={rishiImg} className='w-10 h-10 hidden md:inline' alt="Rishi" />
        <h1 className='text-4xl font-bold text-gray-800 mx-1 mt-1'>TechRishi</h1>
      </div>
      
      <div className='space-x-8'>
                <motion.a whileHover={{ scale: 1.1, y: -6 }} whileTap={{ scale: 0.9 }} href="#about" className='hover:text-blue-800'>About</motion.a>
                <motion.a whileHover={{ scale: 1.1, y: -6 }} whileTap={{ scale: 0.9 }} href="#technology" className='hover:text-blue-800'>Technology</motion.a>
                <motion.a whileHover={{ scale: 1.1, y: -6 }} whileTap={{ scale: 0.9 }} href="#events" className='hover:text-blue-800'>Events</motion.a>
                <motion.a whileHover={{ scale: 1.1, y: -6 }} whileTap={{ scale: 0.9 }} href="#contact" className='hover:text-blue-800'>Contact</motion.a>
                <motion.a whileHover={{ scale: 1.1, y: -6 }} whileTap={{ scale: 0.9 }} href="https://www.youtube.com/@TechRishi-l4s" target="_blank" className='hover:text-blue-800'>YouTube</motion.a>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className='bg-gradient-to-r from-indigo-600 to-blue-500 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:from-indigo-700 hover:to-blue-600 transition-all duration-200 border-2 border-white drop-shadow-md'
                >
                  Blog
                </motion.button>
      </div>
    </div>
  )
}

export default Navbar
