import React from 'react'

const StitchDetails = ({ StitchData = [], StitchingCategory }) => {
  const upperStitchingCategory = StitchingCategory.charAt(0).toUpperCase() + StitchingCategory.slice(1);
  return (
    <>
      {StitchData.filter(stitch => stitch.stichType === upperStitchingCategory).map((stitch) => (
        (stitch.id % 2 === 0) ? (
          <>
            {/* Right Side Image Left Side Content */}
<div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
  <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
    <div className="grid place-content-center rounded bg-white p-6 sm:p-8 shadow-lg transition-transform duration-300 transform hover:scale-105">
      <div className="mx-auto max-w-md text-center lg:text-left">
        <header>
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            {stitch.stitchName}
          </h2>
          <p className="mt-4 text-gray-600">
            {stitch.stitchDesc}
          </p>
        </header>
        <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[3px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white my-6 shadow-md transition-transform duration-300 transform hover:scale-105">
          <span className="absolute inset-0 animate-spin bg-gradient-to-r from-yellow-400 via-blue-500 to-pink-500 opacity-25" />
          <span className="relative inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-blue-600 px-6 py-2 text-base font-medium text-white backdrop-blur-3xl">
            Book Consultation
          </span>
        </button>
      </div>
    </div>
    <div className="lg:col-span-2 lg:py-8">
      <ul className="grid grid-cols-2 gap-4">
        <li>
          <a href="#" className="group block transition-transform duration-300 transform hover:scale-105">
            <img
              src="https://img.pikbest.com/origin/09/42/56/93qpIkbEsTCv3.jpg!w700wp"
              alt=""
              className="aspect-square w-full rounded-lg shadow-md object-cover"
            />
          </a>
        </li>
        <li>
          <a href="#" className="group block transition-transform duration-300 transform hover:scale-105">
            <img
              src="https://i.pinimg.com/736x/7a/d6/21/7ad621cc88d4efbfa3e9a6736dceba58.jpg"
              alt=""
              className="aspect-square w-full rounded-lg shadow-md object-cover"
            />
          </a>
        </li>
      </ul>
    </div>
  </div>
</div>



            {/* Right Side Image Left Side Content ENDS */}
          </>
        ) : (
          <>
            {/* Left Side Image Right Side Content */}
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
                <div className="lg:col-span-2 lg:py-8 order-last lg:order-first">
                  <ul className="grid grid-cols-2 gap-4">
                    <li>
                      <a href="#" className="group block">
                        <img
                          src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTEyL3Jhd3BpeGVsX29mZmljZV8yNF9hX3Nob3Rfb2Zfd2VkZGluZ19qb3lmdWxfaGFwcGluZXNzX2lubm9jZW50X19iNjdmNTliOS0xZWRkLTQ2YWUtOTViZS1hOGE5Njc2ZGUwNjlfMS5qcGc.jpg"
                          alt=""
                          className="aspect-square w-full rounded object-cover"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="group block">
                        <img
                          src="https://static.vecteezy.com/system/resources/thumbnails/035/687/324/small_2x/ai-generated-a-young-indian-girl-wearing-traditional-attire-photo.jpg"
                          alt=""
                          className="aspect-square w-full rounded object-cover"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="grid place-content-center rounded bg-[#FFEDFA] p-6 sm:p-8 order-first lg:order-last">
                  <div className="mx-auto max-w-md text-center lg:text-left">
                    <header>
                      <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                        {stitch.stitchName}
                      </h2>
                      <p className="mt-4 text-gray-500">
                        {stitch.stitchDesc}
                      </p>
                    </header>
                    <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[3px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 my-6">
                      <span className=" absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#D4E157_0%,#388E3C_50%,#E2CBFF_100%)]" />
                      <span className=" inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                        Book Consultation
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Left Side Image Right Side Content Ends */}
          </>
        )
      ))}
    </>
  )
}

export default StitchDetails
