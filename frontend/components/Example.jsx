export default function Example() {
    return (
<section className="bg-[#131926]  shadow-2xl relative max-w-screen-xl mx-auto py-4 px-4 md:px-8">

            <div className="absolute top-0 left-0 w-full h-full bg-white opacity-40"></div>
            
            <div className="relative z-10 gap-5 items-center lg:flex">
                
                <div className="flex-1 max-w-lg py-5 sm:mx-auto sm:text-center lg:max-w-max lg:text-left">
                    <h3 className="text-3xl text-gray-800 font-semibold md:text-4xl">
                    Custom Dresses for  <span className="text-indigo-600">Every Occasion</span>
                    </h3>
                    <p className="text-white-500 leading-relaxed mt-3">
                    Celebrate your heritage in stunning lehengas, sarees, and ethnic designs
                    </p>
                    <a
                        className="mt-5 px-4 py-2 text-indigo-600 font-medium bg-indigo-50 rounded-full inline-flex items-center"
                        href="javascript:void()">
                        Try it out
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-1 duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </a>
                </div>

                
                <div className="flex-1 mt-5 mx-auto sm:w-9/12 lg:mt-0 lg:w-auto">
                    <img 
                        src="https://unrealimages.com/files/image/1280x853/2931711835975xvuuvlmyxbqiikg1v9bo7ivqoslsxr5w1znagciwobugegwsypibbtllhdfqhx9jje0d6gzittsuzbppsqglupydxfadsszad7wb.png" 
                        alt="" 
                        className="w-full rounded-2xl" 
                    />
                </div>
            </div>
        </section>
    )
  }