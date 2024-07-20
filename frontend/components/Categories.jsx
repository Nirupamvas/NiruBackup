import React from 'react'

const Categories = ({CategorieData}) => {
  const {id, catName, imgUrl, status} = CategorieData;
  return (
    <>
    {/* <h1 className='text-black font-extrabold'>{imgUrl}</h1> */}
    <div className="text-white px-5 z-2">
  <a
    href="#"
    className="group relative block overflow-hidden transition ease-out active:opacity-75"
  >
    <img
      src={imgUrl}
      alt="Product Image"
      className="transition ease-out group-hover:scale-110 rounded-full"
    />
    <div className="absolute inset-0 bg-black/25 transition ease-out group-hover:bg-black/0" />
    <div className="relative flex items-center justify-center mt-4">
      <div className="bg-white/95 p-4 py-2 text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:bg-[#446c13] group-hover:text-white dark:border-gray-600 dark:bg-gray-900/90">
        {catName}
      </div>
    </div>
  </a>
</div>

      </>
  )
}

export default Categories