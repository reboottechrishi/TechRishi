import React from 'react'
import Navbar from './Components/Navbar'
import About from './Components/About'
import Technology from './Components/Technology'
import Events from './Components/Events'
import Contact from './Components/Contact'

const App = () => {
  return (
    <div className='bg-indigo-50 min-h-screen w-full'>
      <Navbar />
      <About />
      <Technology />
      <Events />
      <Contact />
    </div>
  )
}

export default App
