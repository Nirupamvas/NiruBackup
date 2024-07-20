import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { Collections } from "../assessts/data"

const ShopByCategory = ({ shopByCategoryDate, categoryParam }) => {
  // Find the collection that matches the categoryParam
  const matchingCollection = Collections.find(
    collection => collection.collectName.toLowerCase() === categoryParam.toLowerCase()
  );

  // Get the items to display
  const itemsToDisplay = matchingCollection ? matchingCollection.collectItems : [];
  const collectTitle = matchingCollection ? matchingCollection.collectTitle : '';
  const collectDesc = matchingCollection ? matchingCollection.collectDesc : '';


  return (
    <>
      {/* Product List Section: Categories Grid */}
      <div className="bg-white  dark:text-gray-100">
        <div className="fixed-height-container mx-auto px-4 py-16 lg:px-8 lg:py-10 xl:max-w-7xl float-items">
          {/* <div className="text-center mb-8 fixed-height-container">
            <h1 className="text-2xl font-bold text-black">{collectTitle}</h1>
            <p className="text-lg text-black font-light">{collectDesc}</p>
          </div> */}
<div className="text-center mb-8 fixed-height-container bg-white p-6 rounded-lg shadow-md">
  <h1 className="text-3xl font-semibold text-gray-800 mb-2">{collectTitle}</h1>
  <p className="text-lg text-gray-600">{collectDesc}</p>
</div>


          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {shopByCategoryDate.map((item) => {
              if (itemsToDisplay.includes(item.catName)) {
                return (
                  <React.Fragment key={item.id}>
                    <div className='text-white px-5'>
                      <Link
                        href={`/stitching/${item.catName}`}
                        className="group relative block overflow-hidden transition ease-out active:opacity-75 rounded-lg"
                      >
                        <Image
                          src={item.imgUrl}
                          width={900}
                          height={700}
                          alt="Product Image"
                          className="transition ease-out group-hover:scale-110 rounded-lg"
                        />
                        <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black to-transparent transition ease-out group-hover:opacity-75 rounded-lg" />
                        <div className="absolute inset-0 flex items-center justify-center top-3/4 rounded-lg">
                          <div className="text-base font-semibold uppercase tracking-wide transition ease-out">
                            {item.catName}
                          </div>
                        </div>
                      </Link>
                    </div>
                  </React.Fragment>
                )
              }
            })}
          </div>
        </div>
      </div>
      {/* END Product List Section: Categories Grid */}
    </>
  )
}

export default ShopByCategory
