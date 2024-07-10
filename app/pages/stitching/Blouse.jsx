import FeaturedCategories from '@/components/FeaturedCategories'
import React from 'react'

const Blouse = () => {
  return (
<>
      {/* Hero Section: Image Side with Simple Header */}
      <div className="relative overflow-hidden bg-white dark:bg-gray-900 dark:text-gray-100">
        {/* END Main Header */}

        {/* Hero Content */}
        <div className="container relative mx-auto flex flex-col gap-16 px-4 py-16 text-center lg:flex-row lg:gap-0 lg:px-8 lg:py-32 lg:text-left xl:max-w-7xl">
          <div className="lg:flex lg:w-1/2 lg:items-center">
            <div>
              <div className="mb-2 inline-flex rounded border border-gray-200 bg-gray-100 px-2 py-1 text-sm font-medium leading-4 text-gray-800 dark:border-gray-600/50 dark:bg-gray-700/50 dark:text-gray-200">
                v6.0 Latest Version
              </div>
              <h1 className="mb-4 text-4xl font-black text-black dark:text-white">
                Next generation
                <span className="text-teal-600 dark:text-teal-500">
                  website builder
                </span>
              </h1>
              <h2 className="text-xl font-medium leading-relaxed text-gray-700 dark:text-gray-300">
                Super fast and easy to use software to power your next idea or
                build your client’s web projects. Get it today and profit.
              </h2>
              <div className="flex flex-col justify-center gap-2 pb-16 pt-10 sm:flex-row sm:items-center lg:justify-start">
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-teal-700 bg-teal-700 px-7 py-3.5 font-semibold leading-6 text-white hover:border-teal-600 hover:bg-teal-600 hover:text-white focus:ring focus:ring-teal-400/50 active:border-teal-700 active:bg-teal-700 dark:focus:ring-teal-400/90"
                >
                  <svg
                    className="hi-mini hi-arrow-down-tray inline-block size-5 opacity-75"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z" />
                    <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
                  </svg>
                  <span>Download for free</span>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-7 py-3.5 font-semibold leading-6 text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300/25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-transparent dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600/40 dark:active:border-gray-700"
                >
                  <span>Learn more</span>
                </a>
              </div>
            </div>
          </div>
          <div className="lg:ml-16 lg:flex lg:w-1/2 lg:items-center lg:justify-center">
            <div className="relative mx-5 lg:w-96">
              <div className="bg-tranparent absolute left-0 top-0 -ml-20 -mt-16 size-40 rounded-full border border-teal-200 dark:border-teal-900 lg:size-72" />
              <div className="bg-tranparent absolute left-0 top-0 -ml-14 -mt-20 size-40 rounded-full border border-teal-100 dark:border-teal-950 lg:size-72" />
              <div className="bg-tranparent absolute bottom-0 right-0 -mb-16 -mr-20 size-40 rounded-full border border-teal-200 dark:border-teal-900 lg:size-72" />
              <div className="bg-tranparent absolute bottom-0 right-0 -mb-20 -mr-14 size-40 rounded-full border border-teal-100 dark:border-teal-950 lg:size-72" />
              <div className="absolute inset-0 -m-6 -rotate-2 rounded-xl bg-gray-200 dark:bg-gray-800" />
              <div className="absolute inset-0 -m-6 rotate-1 rounded-xl bg-teal-800/75 shadow-inner dark:bg-teal-900/75" />
              <img
                src="https://cdn.tailkit.com/media/placeholders/photo-RSCirJ70NDM-800x1000.jpg"
                className="relative mx-auto rounded-lg shadow-lg"
                alt="Hero Image"
              />
            </div>
          </div>
        </div>
        {/* END Hero Content */}
      </div>
      {/* END Hero Section: Image Side with Simple Header */}

      <>
      {/* CTA Section: Simple With Illustration */}
      <div className="bg-white dark:bg-gray-800 dark:text-gray-100">
        <div className="container mx-auto grid grid-cols-1 gap-12 px-4 py-16 lg:grid-cols-2 lg:px-8 lg:py-32 xl:max-w-7xl">
          <div className="flex items-center text-center lg:text-left">
            <div className="space-y-8">
              {/* Heading */}
              <div>
                <div className="mb-1 text-sm font-bold uppercase tracking-wider text-teal-600 dark:text-teal-500">
                  Get Started
                </div>
                <h2 className="mb-4 text-4xl font-black text-black dark:text-white">
                  Grow your business
                  <span className="text-teal-600 dark:text-teal-500">now</span>!
                </h2>
                <h3 className="text-xl font-medium leading-relaxed text-gray-700 dark:text-gray-300">
                  Inspiring results from day one without the pain. Get your own
                  custom dashboard and start building amazing services.
                </h3>
              </div>
              {/* END Heading */}

              {/* Action */}
              <div>
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-teal-700 bg-teal-700 px-6 py-3 font-semibold leading-6 text-white hover:border-teal-600 hover:bg-teal-600 hover:text-white focus:ring focus:ring-teal-400/50 active:border-teal-700 active:bg-teal-700 dark:focus:ring-teal-400/90"
                >
                  <svg
                    className="hi-mini hi-plus-circle inline-block size-5 opacity-50"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Create your Account</span>
                </a>
              </div>
              {/* END Action */}
            </div>
          </div>
          <div className="flex items-center text-teal-500 lg:justify-end">
            <svg
              viewBox="0 0 753 480.951"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full"
            >
              <path
                d="M149.18 480.567l-2-.039a463.833 463.833 0 017.1-66.287c8.648-46.88 23.029-77.67 42.743-91.512l1.148 1.637C152.12 356.7 149.203 479.332 149.18 480.567zM174.18 480.089l-2-.04c.043-2.214 1.293-54.413 21.843-68.841l1.148 1.637c-19.72 13.845-20.981 66.711-20.991 67.244z"
                fill="#374151"
              />
              <circle cx="209.549" cy="314.548" r={10} fill="currentColor" />
              <circle cx="204.597" cy="400.548" r={10} fill="currentColor" />
              <path
                d="M169.519 330.542c1.879 12.004-3.02 22.74-3.02 22.74s-7.945-8.725-9.824-20.729 3.019-22.74 3.019-22.74 7.945 8.725 9.825 20.73zM202.206 359.696c-11.493 3.942-22.919.99-22.919.99s7.208-9.344 18.7-13.287 22.92-.99 22.92-.99-7.208 9.345-18.701 13.287zM202.575 435.857a31.135 31.135 0 01-16.064.694 28.374 28.374 0 0129.172-10.006 31.134 31.134 0 01-13.108 9.312z"
                fill="#374151"
              />
              <path
                fill="#9e616a"
                d="M606.671 467.453h-13.14l-6.251-50.685 19.394.001-.003 50.684z"
              />
              <path
                d="M610.023 480.19h-42.37v-.537a16.493 16.493 0 0116.491-16.491h.001l25.878.001z"
                fill="#374151"
              />
              <path
                fill="#9e616a"
                d="M525.57 467.453h-13.141l-6.251-50.685 19.394.001-.002 50.684z"
              />
              <path
                d="M528.921 480.19h-42.37v-.537a16.493 16.493 0 0116.491-16.491h.002l25.878.001z"
                fill="#374151"
              />
              <path
                d="M492.789 183.616l-18.2-2.812-5.88 9.464-63.272 16.129.172.872a11.904 11.904 0 102.587 12.31l76.625-15.982zM674.554 172.347a11.855 11.855 0 00-4.375.841l.363-.633-80.444-41.58-10.967 17.73 83.635 37.125a11.9 11.9 0 1011.788-13.483z"
                fill="#9e616a"
              />
              <circle
                cx="736.071"
                cy="267.733"
                r="35.538"
                transform="rotate(-80.783 501.187 294.317)"
                fill="#374151"
              />
              <circle cx="512.264" cy="70.77" r="22.671" fill="#a0616a" />
              <ellipse
                cx="512.571"
                cy="48.405"
                rx="24.509"
                ry="14.705"
                fill="#374151"
              />
              <circle cx="515.021" cy="22.671" r="14.705" fill="#374151" />
              <path
                d="M495.414 14.705A14.707 14.707 0 01508.588.08a14.87 14.87 0 00-1.532-.08 14.705 14.705 0 000 29.41 14.87 14.87 0 001.532-.079 14.707 14.707 0 01-13.174-14.626zM500.478 127.051l1.828-17.576s24.806-16.347 33.236-6.686l50.388 86.213s31.323 11.136 30.216 53.658l-1.498 205.54-35.517 3.894-21.568-160.25-19.487 166.026-41.35-1.295 3.72-109.376 19.717-106.027-.188-35.182-8.684-14.199s-15.908-6.39-16.352-24.45l-.349-25.386z"
                fill="#374151"
              />
              <path
                d="M526.488 107.615l.49-8.24s75.031 19.773 69.079 33.91-17.113 18.6-17.113 18.6l-43.155-17.112zM506.88 128.117l-5.645-6.02s-45.032 63.188-31.414 70.248 25.052 3.354 25.052 3.354l22.228-40.757z"
                fill="#374151"
              />
              <path
                d="M416.745 333.873l282.56-56.404-23.613-118.297-282.561 56.404z"
                fill="#fff"
              />
              <path
                d="M701.618 279.011l-286.416 57.174-24.384-122.152 286.417-57.173zm-283.33 52.55l278.705-55.635-22.844-114.441-278.706 55.634z"
                fill="#9CA3AF"
              />
              <path
                fill="#9CA3AF"
                d="M427.715 242.718l228.672-45.647 1.19 5.962-228.672 45.647zM432.349 265.933l228.672-45.647 1.19 5.962-228.672 45.647zM437.01 289.282l228.672-45.647 1.19 5.962L438.2 295.244z"
              />
              <path
                d="M547.129 234.12l-7.998 1.597a2.25 2.25 0 01-2.643-1.764l-3.781-18.942a2.25 2.25 0 011.763-2.643l7.998-1.597a2.25 2.25 0 012.643 1.764l3.781 18.942a2.25 2.25 0 01-1.763 2.643zM638.227 240.075l-7.998 1.597a2.25 2.25 0 01-2.643-1.764l-3.78-18.942a2.25 2.25 0 011.763-2.643l7.997-1.597a2.25 2.25 0 012.643 1.764l3.781 18.942a2.25 2.25 0 01-1.763 2.643zM588.893 274.202l-7.997 1.597a2.25 2.25 0 01-2.643-1.763l-3.782-18.943a2.25 2.25 0 011.764-2.643l7.998-1.597a2.25 2.25 0 012.643 1.764l3.78 18.942a2.25 2.25 0 01-1.763 2.643z"
                fill="currentColor"
              />
              <path
                d="M752 480.951H1a1 1 0 010-2h751a1 1 0 010 2z"
                fill="#374151"
              />
            </svg>
          </div>
        </div>
      </div>
      {/* END CTA Section: Simple With Illustration */}
    </>
    <h1 className='text-center font-semi text-4xl p-3'>Choose your Fashion</h1>
  <h1 className='text-center font-light '>Your choice, we'll design & stitch, just for you</h1>
    <FeaturedCategories/>
    </>
  )
}

export default Blouse