import React from 'react'

const SingleFeaturedCat = ({CategorieData}) => {
  const {id, catName, imgUrl, status} = CategorieData;
  return (
    <>
    {/* <h1 className='text-black font-extrabold'>{imgUrl}</h1> */}
    <div className='text-white'>
        <a
          href="#"
          className="group relative block overflow-hidden transition ease-out active:opacity-75"
        >
          <img
            src={imgUrl}
            alt="Product Image"
            className="transition ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/25 transition ease-out group-hover:bg-black/0" />
          <div className="absolute inset-0 flex items-center justify-center top-3/4">
            <div className=" bg-white/95 p-96 py-2 text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:bg-[#446c13] group-hover:text-white dark:border-gray-600 dark:bg-gray-900/90">
              {catName}
            </div>
          </div>
        </a>
        
      </div>
      </>
  )
}

export default SingleFeaturedCat