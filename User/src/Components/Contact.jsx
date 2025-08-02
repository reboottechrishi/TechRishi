import React from 'react'
import { FaUsers, FaEnvelope, FaGithub } from 'react-icons/fa'

const Contact = () => {
  const email = "reboottechrishi@gmail.com";

  const handleEmailClick = () => {
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`, '_blank');
  };

  return (
    <div className="w-full flex flex-col items-center justify-center py-8" id="contact">
      <h2 className="text-3xl font-bold text-blue-800 mb-8 drop-shadow text-center">Contact Us</h2>
      <div className="flex flex-col items-start w-full max-w-2xl">
        <div className="flex flex-row items-center mb-8">
          <h3 className="text-2xl font-semibold text-blue-700 mr-4 min-w-[120px] text-left whitespace-nowrap">Let's Talk</h3>
          <span className="text-lg text-gray-700">
            Be a part of our journey to drive innovation and explore the future of technology. Contact TechRishi Core Team!
          </span>
        </div>
        <div className="flex flex-row items-center mb-4 ml-[130px]">
          <FaUsers className="text-2xl text-blue-700 mr-3" />
          <span className="text-xl font-semibold text-gray-800">TechRishi</span>
        </div>
        <div className="flex flex-row items-center ml-[130px]">
          <FaEnvelope className="text-2xl text-blue-700 mr-3" />
          <span
            className="text-lg text-gray-700 cursor-pointer hover:underline transition-all duration-150"
            onClick={handleEmailClick}
            title="Send Email"
          >
            {email}
          </span>
        </div>
      </div>
      <footer className="w-7xl mt-16">
        <div className="w-full border-t border-gray-300 flex flex-col items-center">
          <div className=" mt-4 mb-2 text-gray-700 flex items-center space-x-4">
            <span>© 2025 TechRishi. All rights reserved.</span>
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
              target="_blank"
              rel="noopener noreferrer"
              title="Send Email"
              className="text-gray-700 hover:text-blue-700 transition-all duration-150"
            >
              <FaEnvelope className="inline text-xl mx-1" />
            </a>
            <a
              href="https://github.com/reboottechrishi"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              className="text-gray-700 hover:text-black transition-all duration-150"
            >
              <FaGithub className="inline text-xl mx-1" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Contact
