import React from 'react'

const Blog = [
  {
    id:1,
    title: "Mastering Data Insights With Tableau Technical Documentation",
    description: "This documentation provides a comprehensive overview of Tableau's capabilities, historical .... " ,
    link:"https://drive.google.com/file/d/1e9fzCBV3vNiWfJoICso0ebj-egaijetA/view?usp=sharing",
    date:"August 8, 2025"
  }
]


const Events = () => {
  return (
    <div className="w-full px-4 py-12 mt-16 flex flex-col items-center" id="events">
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-10 drop-shadow">Get Ready To Reboot -- Upcoming Blog</h2>
      <div className="w-full max-w-2xl mx-auto">
        {Blog.map(blog => (
          <div key={blog.id} className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <h3 className="text-xl font-bold mb-2 text-blue-700">{blog.title}</h3>
            <a
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 text-base hover:underline transition-all duration-150 cursor-pointer"
            >
              {blog.description}
            </a>
            <div className="text-sm text-gray-500 mt-2">{blog.date}</div>
          </div>
        ))}
      </div>
      <div className="mt-6 text-center text-blue-600 font-semibold text-lg">
        More blogs coming ...
      </div>
    </div>
  )
}

export default Events
