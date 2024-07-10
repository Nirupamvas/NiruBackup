import React from 'react'
import { useState } from 'react';

import classNames from 'classnames';
const aniCards = () => {
    
    const [activeTab, setActiveTab] = useState(1);
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="lg:pr-10">
          <a
            href="/"
            aria-label="Go Home"
            title="Logo"
            className="inline-block mb-5"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
              <svg
                className="w-10 h-10 text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
          </a>
          <h5 className="mb-4 text-4xl font-extrabold leading-none">
            The quick, brown fox
            <br className="hidden md:block" />
            jumps over{' '}
            <span className="inline-block text-deep-purple-accent-400">
              a lazy dog
            </span>
          </h5>
          <p className="mb-6 text-gray-900">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae explicabo. Sed ut perspiciatis unde omnis iste natus error sit
            voluptatem totam rem aperiam, eaque ipsa quae explicabo.
          </p>
          <hr className="mb-5 border-gray-300" />
          <div className="flex items-center space-x-4">
            <a
              href="/"
              className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
              </svg>
            </a>
            <a
              href="/"
              className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                <circle cx="15" cy="15" r="4" />
                <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
              </svg>
            </a>
            <a
              href="/"
              className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
              </svg>
            </a>
            <a
              href="/"
              className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-6">
                <path d="M23.8,7.2c0,0-0.2-1.7-1-2.4c-0.9-1-1.9-1-2.4-1C17,3.6,12,3.6,12,3.6h0c0,0-5,0-8.4,0.2 c-0.5,0.1-1.5,0.1-2.4,1c-0.7,0.7-1,2.4-1,2.4S0,9.1,0,11.1v1.8c0,1.9,0.2,3.9,0.2,3.9s0.2,1.7,1,2.4c0.9,1,2.1,0.9,2.6,1 c1.9,0.2,8.2,0.2,8.2,0.2s5,0,8.4-0.3c0.5-0.1,1.5-0.1,2.4-1c0.7-0.7,1-2.4,1-2.4s0.2-1.9,0.2-3.9v-1.8C24,9.1,23.8,7.2,23.8,7.2z M9.5,15.1l0-6.7l6.5,3.4L9.5,15.1z" />
              </svg>
            </a>
          </div>
        </div>
        <div>
          <img
            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
            src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
            alt=""
          />
        </div>
      </div>
    </div>

    <div className="relative font-inter antialiased">
      <main className="relative min-h-screen flex flex-col justify-center bg-white overflow-hidden">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
          <div>
            {/* Tabs component */}
            <div>
              {/* Buttons */}
              <div className="flex justify-center">
                <div
                  role="tablist"
                  className="max-[480px]:max-w-[180px] inline-flex flex-wrap justify-center bg-slate-200 rounded-[20px] p-1 mb-8 min-[480px]:mb-12"
                >
                  <button
                    id="tab-1"
                    className={classNames(
                      'flex-1 text-sm font-medium h-8 px-4 rounded-2xl whitespace-nowrap focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors duration-150 ease-in-out',
                      { 'bg-white text-slate-900': activeTab === 1, 'text-slate-600 hover:text-slate-900': activeTab !== 1 }
                    )}
                    onClick={() => setActiveTab(1)}
                  >
                    Lassen Peak
                  </button>
                  <button
                    id="tab-2"
                    className={classNames(
                      'flex-1 text-sm font-medium h-8 px-4 rounded-2xl whitespace-nowrap focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors duration-150 ease-in-out',
                      { 'bg-white text-slate-900': activeTab === 2, 'text-slate-600 hover:text-slate-900': activeTab !== 2 }
                    )}
                    onClick={() => setActiveTab(2)}
                  >
                    Mount Shasta
                  </button>
                  <button
                    id="tab-3"
                    className={classNames(
                      'flex-1 text-sm font-medium h-8 px-4 rounded-2xl whitespace-nowrap focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors duration-150 ease-in-out',
                      { 'bg-white text-slate-900': activeTab === 3, 'text-slate-600 hover:text-slate-900': activeTab !== 3 }
                    )}
                    onClick={() => setActiveTab(3)}
                  >
                    Eureka Peak
                  </button>
                </div>
              </div>

              {/* Tab panels */}
              <div className="max-w-[640px] mx-auto">
                <div className="relative flex flex-col">
                  {/* Panel #1 */}
                  {activeTab === 1 && (
                    <article
                      id="tabpanel-1"
                      className="w-full bg-white rounded-2xl shadow-xl min-[480px]:flex items-stretch focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300"
                      role="tabpanel"
                      tabIndex="0"
                      aria-labelledby="tab-1"
                    >
                      <figure className="min-[480px]:w-1/2 p-2">
                        <img
                          className="w-full h-[180px] min-[480px]:h-full object-cover rounded-lg"
                          width={304}
                          height={214}
                          src="https://cruip-tutorials.vercel.app/unconventional-tabs/tabs-image-01.jpg"
                          alt="Tab 01"
                        />
                      </figure>
                      <div className="min-[480px]:w-1/2 flex flex-col justify-center p-5 pl-3">
                        <div className="flex justify-between mb-1">
                          <header>
                            <div className="font-caveat text-xl font-medium text-sky-500">Mountain</div>
                            <h1 className="text-xl font-bold text-slate-900">Lassen Peak</h1>
                          </header>
                          <button
                            className="shrink-0 h-[30px] w-[30px] border border-slate-200 hover:border-slate-300 rounded-full shadow inline-flex items-center justify-center focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors duration-150 ease-in-out"
                            aria-label="Like"
                          >
                            <svg className="fill-red-500" xmlns="http://www.w3.org/2000/svg" width="14" height="13">
                              <path d="M6.985 1.635C5.361.132 2.797.162 1.21 1.7A3.948 3.948 0 0 0 0 4.541a3.948 3.948 0 0 0 1.218 2.836l5.156 4.88a.893.893 0 0 0 1.223 0l5.165-4.886a3.925 3.925 0 0 0 .061-5.663C11.231.126 8.62.094 6.985 1.635Zm4.548 4.53-4.548 4.303-4.54-4.294a2.267 2.267 0 0 1 0-3.275 2.44 2.44 0 0 1 3.376 0c.16.161.293.343.398.541a.915.915 0 0 0 .766.409c.311 0 .6-.154.767-.409.517-.93 1.62-1.401 2.677-1.142 1.057.259 1.797 1.181 1.796 2.238a2.253 2.253 0 0 1-.692 1.63Z" />
                            </svg>
                          </button>
                        </div>
                        <div className="text-slate-500 text-sm line-clamp-3 mb-2">
                          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                        </div>
                        <div className="text-right">
                          <a
                            className="text-sm font-medium text-indigo-500 hover:text-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors duration-150 ease-out"
                            href="#0"
                          >
                            Read more -&gt;
                          </a>
                        </div>
                      </div>
                    </article>
                  )}

                  {/* Panel #2 */}
                  {activeTab === 2 && (
                    <article
                      id="tabpanel-2"
                      className="w-full bg-white rounded-2xl shadow-xl min-[480px]:flex items-stretch focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300"
                      role="tabpanel"
                      tabIndex="0"
                      aria-labelledby="tab-2"
                    >
                      <figure className="min-[480px]:w-1/2 p-2">
                        <img
                          className="w-full h-[180px] min-[480px]:h-full object-cover rounded-lg"
                          width={304}
                          height={214}
                          src="https://cruip-tutorials.vercel.app/unconventional-tabs/tabs-image-02.jpg"
                          alt="Tab 02"
                        />
                      </figure>
                      </article>
                  )}
                      </div>
                      </div>
                      </div>
                      </div></div></main></div></div>
    
  )
}

export default aniCards