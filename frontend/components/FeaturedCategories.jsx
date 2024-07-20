"use client";
import React from 'react'

import Link from 'next/link';
import Image from 'next/image';

const FeaturedCategories = ({FeaturedCategoriesData}) => {


  return (
    <>
      {/* Product List Section: Categories Grid */}
      <div className="bg-white dark:bg-gray-100 dark:text-gray-100">
   
    <div className="fixed-height-container mx-auto px-4 py-16  lg:px-8 lg:py-10 xl:max-w-7xl float-items">
    <div className="text-center mb-8 fixed-height-container">
      <h1 className="text-2xl font-bold text-black">Choose your fashion</h1>
      <p className="text-lg text-black font-light">Your choice, we'll design & stitch, just for you</p>
    </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 ">
          {FeaturedCategoriesData.map((item)=>{
            return(
            <React.Fragment key={item.id}>
            <Link
              href={`/stitching/${item.catName}`}
              className="group relative block overflow-hidden transition ease-out active:opacity-75"
            >
             
              <Image
                src={item.imgUrl}
                width={500}
                height={200}
                //src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwGxx1DUJNuxRai0IV8G04TKWCpkcmRlkRhA&s"
                alt="Product Image"
                className="transition ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/25 transition ease-out group-hover:bg-black/0" />
              <div className="absolute inset-0 flex items-center justify-center top-3/4">
                <div className=" bg-white/95 p-96 py-2 text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:bg-[#446c13] group-hover:text-white dark:border-gray-600 dark:bg-gray-900/90">
                  {item.catName}
                </div>
              </div>
            </Link>
            </React.Fragment>
            )
          })}
          </div>
        </div>
      </div>
      {/* END Product List Section: Categories Grid */}
    </>
  )
}

export default FeaturedCategories