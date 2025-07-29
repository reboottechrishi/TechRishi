import React from 'react'

const events = [
    {
        id: 1,
        name: "Agile Project Management",
        description:"Hands-on with Jira",
    },
    {
        id: 2,
        name: "ReactJS Zero to Hero",
        description:"Build Modern UIs from Scratch",
    },
    {
        id: 3,
        name: "Data Science Deep Dive",
        description:"Unlocking Insights from Data",
    },
    {
        id: 4,
        name: "Demystifying Networks",
        description:"From Cables to the Cloud",
    },
    {
        id: 5,
        name: "IAM in Action",
        description:"Protecting Resources and Identities",
    },
    {
        id: 6,
        name: "Mastering Cloud Compute",
        description:"Practical Skills for the Cloud",
    },
    {
        id: 7,
        name: "Getting Hands-on with AI",
        description:"Building Intelligent Applications",
    },
    {
        id: 8,
        name: "Cloud Computing Fundamentals",
        description:"AWS, Azure, and GCP Overview",
    },
];
    

const Events = () => {
  return (
    <div className="w-full px-4 py-12 mt-16 flex flex-col items-center" id="events">
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-12 drop-shadow">Get Ready To Reboot! - Upcoming Events</h2>
      <div className="relative w-full max-w-3xl">
        {/* Vertical line */}
        <div className="absolute left-1/2 top-0 h-full w-1 bg-blue-200 -translate-x-1/2 z-0"></div>
        <div className="flex flex-col gap-12 z-10">
          {events.map((event, idx) => (
            <div key={event.id} className={
              `relative flex items-center ${idx % 2 === 0 ? 'justify-start' : 'justify-end'} w-full`
            }>
              <div className={
                `w-1/2 flex ${idx % 2 === 0 ? 'justify-end pr-8' : 'justify-start pl-8'}`
              }>
                <div className="bg-white rounded-xl shadow-lg p-6 max-w-xs w-full transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
                  <h3 className="text-lg font-bold mb-1 text-blue-700">{event.name}</h3>
                  <p className="text-gray-700 text-base">{event.description}</p>
                </div>
              </div>
              {/* Dot on the line */}
              <div className="absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-blue-500 rounded-full border-4 border-white z-20"></div>
            </div>
          ))}
          {/* More events lined up at the end */}
          <div className="relative flex items-center justify-center w-full mt-2">
            <div className="absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-blue-200 rounded-full border-4 border-white z-10 flex items-center justify-center">
              <span className="text-xs text-blue-700 font-semibold whitespace-nowrap absolute left-1/2 top-8 -translate-x-1/2">More events lined up...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Events
