import React from 'react'

const App: React.FC = () => {
  return (
    <div className="max-w-3xl px-6 py-10 mx-auto md:py-20">
      <span className="text-xl font-bold tracking-tighter text-red-500">
        Appetising Apps
      </span>
      <div className="pt-10 md:pt-20">
        <h1 className="text-3xl font-extrabold leading-snug tracking-tight text-gray-800 md:leading-none md:text-6xl">
          A <span className="text-xl md:text-3xl">small</span> web/app development company based in Dublin, Ireland
        </h1>
      </div>
      <div className="pt-8 md:pt-16">
        <p className="text-lg leading-8 text-gray-900 md:leading-10 md:text-xl">
          We are passionate about building products that solve problems for users. We are very experienced
          in several widely used web and mobile technologies: React, React Native, Vue, GraphQL, NodeJS and Laravel.
          We also have extensive experience in user testing (observing users using
          products in real life.) We are available for hire for a range of projects. If you are interested in
          working with us, please contact us at <a href="mailto:info@appetisingapps.com" target="_blank" rel="noopener" className="text-red-600 rounded focus:outline-none focus:ring-2 focus:ring-offset-4 focus:ring-black">info@appetisingapps.com</a>
        </p>
      </div>
      <div className="pt-8 md:pt-12">
        <h2 className="text-2xl font-bold leading-none tracking-tight text-gray-800 md:text-3xl">Featured Projects</h2>
        <div className="mt-8 space-y-8">
          {projects.map((project, i) => (
            <div key={i} className={`md:flex md:items-center md:justify-between p-6 border border-gray-200 rounded-md shadow ${project.private ? 'bg-striped' : ''}`}>
              <div className="md:flex-grow">
                <h3 className="text-lg font-bold leading-none tracking-tight text-gray-800 md:text-xl">{project.name}</h3>
                <p className="mt-3 leading-5 text-gray-700">{project.description}</p>
              </div>
              <div className="mt-3 md:mt-0 md:flex-shrink-0">
                {project.url && (
                  <span className="block rounded-md shadow-sm sm:inline-flex">
                    <a href={project.url} target="_blank" rel="noopener" className="flex items-center justify-center w-full px-4 py-2 text-base font-medium leading-6 text-red-700 transition duration-150 ease-in-out bg-red-100 border border-red-100 rounded-md select-none sm:inline-flex sm:w-auto hover:bg-red-500 hover:text-white focus:outline-none focus:bg-red-500 focus:text-white active:text-white active:bg-red-500">
                      View
                    </a>
                  </span>
                )}
                {project.private && (
                  <span className="block rounded-md shadow-sm sm:inline-flex">
                    <button tabIndex={-1} type="button" className="flex items-center justify-center w-full px-4 py-2 text-base font-medium leading-6 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md select-none sm:inline-flex sm:w-auto bg-striped focus:outline-none">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                      <span className="ml-2">Private</span>
                    </button>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="pt-20 border-t">
        <p className="text-sm leading-5 text-center text-gray-500">&copy; Copyright 2018 – {new Date().getFullYear()} Appetising Apps Ltd., Grand Canal Dock, Dublin, Ireland</p>
      </div>
    </div>
  )
}

const projects = [
  {
    name: 'Money Coaching Ireland',
    description: 'Money Coaching Ireland\'s website, built with Next.js',
    url: 'https://moneycoaching.ie'
  },
  {
    name: 'TraceMyDay',
    description: 'An open-source contact tracing app for iOS & Android',
    url: 'https://tracemyday.app'
  },
  {
    name: 'James Joyce Gazette',
    description: 'A web app for James Joyce-related materials',
    url: 'https://jamesjoycegazette.com'
  },
  {
    name: 'Appetiser',
    description: 'A meal planning app for iOS & Android',
    url: 'https://appetiser.co'
  },
  {
    name: 'Activities Ireland',
    description: 'Activities Ireland website, built with Vue.js',
    url: 'https://activitiesireland.ie'
  },
  {
    name: 'Content Management System',
    description: 'Web, iOS & Android',
    private: true,
  },
  {
    name: 'Real-time Multiplayer Game',
    description: 'Offline enabled web app, iOS & Android',
    private: true,
  }
]

export default App
