import Image from 'next/image';
import React from 'react'

const SingleFeaturedCat = ({CategorieData}) => {
  const {id, catName, imgUrl, status} = CategorieData;
  return (
    <>
    {/* <h1 className='text-black font-extrabold'>{imgUrl}</h1> */}
    <div className='text-white px-5'>
    <a
        href="#"
        className="group relative block overflow-hidden transition ease-out active:opacity-75"
    >
        <Image
            width={500}
            height={200}
            src={imgUrl}
            alt="Product Image"
            className="transition ease-out group-hover:scale-110"
        />
        <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black to-transparent transition ease-out group-hover:opacity-75" />
        <div className="absolute inset-0 flex items-center justify-center top-3/4">
            <div className=" text-base font-semibold uppercase tracking-wide transition ease-out">
                {catName}
            </div>
        </div>
    </a>
</div>


      </>
  )
}

export default SingleFeaturedCat