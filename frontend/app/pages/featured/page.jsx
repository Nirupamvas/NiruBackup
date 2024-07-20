import React from 'react'

const headTest = () => {
  return (

    <div className="max-w-5xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">

      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">Our team</h2>
        <p className="mt-1 text-gray-600">Creative people</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12">
        <div className="text-center">
          <img className="rounded-full size-24 mx-auto" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80" alt="Image Description" />
          <div className="mt-2 sm:mt-4">
            <h3 className="font-medium text-gray-800">
              David Forren
            </h3>
            <p className="text-sm text-gray-600">
              Founder / CEO
            </p>
          </div>
        </div>

    
        <div className="text-center">
          <img className="rounded-full size-24 mx-auto" src="https://images.unsplash.com/photo-1521151716396-b2da27b1a19f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80" alt="Image Description" />
          <div className="mt-2 sm:mt-4">
            <h3 className="font-medium text-gray-800">
              Nick Jackson
            </h3>
            <p className="text-sm text-gray-600">
              UI/UX Designer
            </p>
          </div>
        </div>

      </div>

      <div className="mt-12 flex justify-center">
        <div className="border border-gray-200 py-2 px-3 rounded-full">
          <div className="flex items-center gap-x-3">
            <span className="text-sm text-gray-500">Want to work with us?</span>
            <a className="inline-flex items-center gap-x-2 text-sm font-medium text-blue-600 hover:text-blue-500" href="#">
              We are hiring
              <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </a>
          </div>
        </div>
      </div>

    </div>
 
  )
}

export default headTest