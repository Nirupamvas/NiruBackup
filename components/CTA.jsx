import React from 'react'

const CTA = () => {
  return (
    <div>    <div className="bg-white">
    <div className="mx-auto max-w-7xl py-2 lg:px-8">
      {/* <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl  sm:rounded-3xl sm:px-8 md:pt-12 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0"> */}
      <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
        <svg
          viewBox="0 0 1024 1024"
          className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          aria-hidden="true"
        >
          <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
          <defs>
            <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
              <stop stopColor="#7775D6" />
              <stop offset={1} stopColor="#E935C1" />
            </radialGradient>
          </defs>
        </svg>
        <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Custom Dresses for Every Occasion
            <br />
            
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
          Celebrate your heritage in stunning lehengas, sarees, and ethnic designs
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
            <a
              href="#"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Book Consultance
            </a>
            {/* <a href="#" className="text-sm font-semibold leading-6 text-white">
              Learn more <span aria-hidden="true">→</span>
            </a> */}
          </div>
        </div>
        <div className=''>
        <img
        className='mt-[13%] rounded-2xl'
        src="https://unrealimages.com/files/image/1280x853/2931711835975xvuuvlmyxbqiikg1v9bo7ivqoslsxr5w1znagciwobugegwsypibbtllhdfqhx9jje0d6gzittsuzbppsqglupydxfadsszad7wb.png"
        height={20}
        width={800}
        /></div>
        
        {/* <div className="relative mt-1 h-10 lg:mt-8 hidden sm:block">
          <img
            //className="absolute left-0 top-0 w-[auto] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
            className='ml-10 my-10 rounded-2xl h-auto w-auto sm:h-auto sm:w-auto md:h-auto md:w-auto'
            src="https://unrealimages.com/files/image/1280x853/2931711835975xvuuvlmyxbqiikg1v9bo7ivqoslsxr5w1znagciwobugegwsypibbtllhdfqhx9jje0d6gzittsuzbppsqglupydxfadsszad7wb.png"
            alt="App screenshot"
            width={1824}
            height={1080}
          />
        </div> */}
      </div>
    </div>
  </div></div>
  )
}

export default CTA