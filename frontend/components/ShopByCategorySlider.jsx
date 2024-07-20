import Link from 'next/link';
import React from 'react';

const ShopByCategorySlider = ({category,setCategory}) => {
  return (
    <>
<div className='bg-gray-50 mt-2 mb-2 p-6 rounded-lg shadow-lg'>
  <h1 className='mt-4 text-center text-grey-700 text-3xl font-medium'>Search by Category</h1>
  <div className="flex flex-nowrap justify-around mt-8 space-x-4 sm:space-x-2">

    <Link href={`/category/party`}>
    <div className="flex flex-col items-center cursor-pointer mb-4">
      <div className="flex h-16 w-16 lg:h-24 lg:w-24 md:h-20 md:w-20 sm:h-16 sm:w-16 transition-transform duration-300 hover:scale-110">
        <img className="rounded-full shadow-xl border-4 border-indigo-200" src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp" alt="Party" />
      </div>
      <div className="text-center text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-gray-900 mt-2">Party</div>
    </div>
    </Link>

    <Link href={`/category/formal`}>
    <div className="flex flex-col items-center cursor-pointer mb-4">
      <div className="flex h-16 w-16 lg:h-24 lg:w-24 md:h-20 md:w-20 sm:h-16 sm:w-16 transition-transform duration-300 hover:scale-110">
        <img className="rounded-full shadow-xl border-4 border-green-200" src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp" alt="Formal" />
      </div>
      <div className="text-center text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-gray-900 mt-2">Formal</div>
    </div>
    </Link>

    <Link href={`/category/casual`}>
    <div className="flex flex-col items-center cursor-pointer mb-4">
      <div className="flex h-16 w-16 lg:h-24 lg:w-24 md:h-20 md:w-20 sm:h-16 sm:w-16 transition-transform duration-300 hover:scale-110">
        <img className="rounded-full shadow-xl border-4 border-yellow-200" src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp" alt="Casual" />
      </div>
      <div className="text-center text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-gray-900 mt-2">Casual</div>
    </div>
    </Link>

    <Link href={`/category/occastional`}>
    <div className="flex flex-col items-center cursor-pointer mb-4">
      <div className="flex h-16 w-16 lg:h-24 lg:w-24 md:h-20 md:w-20 sm:h-16 sm:w-16 transition-transform duration-300 hover:scale-110">
        <img className="rounded-full shadow-xl border-4 border-pink-200" src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp" alt="Occasional" />
      </div>
      <div className="text-center text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-gray-900 mt-2">Occasional</div>
    </div>
    </Link>

    <Link href={`/category/fabric`}>
    <div className="flex flex-col items-center cursor-pointer mb-4">
      <div className="flex h-16 w-16 lg:h-24 lg:w-24 md:h-20 md:w-20 sm:h-16 sm:w-16 transition-transform duration-300 hover:scale-110">
        <img className="rounded-full shadow-xl border-4 border-blue-200" src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp" alt="Fabrics" />
      </div>
      <div className="text-center text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-gray-900 mt-2">Fabrics</div>
    </div>
    </Link>

  </div>
</div>




</>
  );
}

export default ShopByCategorySlider;
