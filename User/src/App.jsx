import React from 'react'
import Navbar from './Components/Navbar'
import About from './Components/About'
import Technology from './Components/Technology'
import Events from './Components/Events'

const App = () => {
  return (
    <div className='bg-indigo-50 min-h-screen w-full'>
      <Navbar />
      <About />
      <Technology />
      <Events />
    </div>
  )
}

export default App
