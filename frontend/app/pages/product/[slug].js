import Header from '@/components/Header'
import ProductDetailsCarousel from '@/components/ProductDetailsCarousel'
import RelatedProducts from '@/components/RelatedProducts'
import Wrapper from '@/components/Wrapper'
import React from 'react'
import { IoMdHeartEmpty } from 'react-icons/io'


const ProductDetails = () => {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
            {/* left coloumn Start */}
            <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full
                mx-auto lg:mx-0"> <ProductDetailsCarousel/></div>
            {/* left coloumn End */}

            {/* Right coloumn Start */}
            <div className="flex-[1] py-3">
              {/* Product Title */}
              <div className='text-[34px] font-semibold mb-2'>
                Floral Dress
              </div>
              {/* Product SubTitle */}
              <div className='text-lg font-semibold mb-5'>
                Women&apos;s Western Dress
              </div>
              {/* Product Price */}
              <div className='text-lg font-semibold'>
                MRP : ₹10,000.00
              </div>
              <div className='text-md font-medium text-black/[0.5]'>
                incl. of taxes
              </div>
              <div className='text-md font-medium text-black/[0.5] mb-20'>
                {`(Also includes all applicable duties)`}
              </div>
              
              {/* Product SIZE RANGE START */}
              <div className='mb-10'>
                {/* Heading SIZE RANGE START */}
                <div className="flex justify-between mb-2">
                  <div className="text-md font-semibold">
                    Select Size
                  </div>
                  <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                    Select Guide
                  </div>
                </div>  
                {/* Heading SIZE RANGE END */}

                {/* SIZE START */}
                <div className="grid grid-cols-3 gap-2">
                  <div className="border rounded-md text-center py-3 font-medium hover:border-[#6e9e1c] cursor-pointer"> 
                        XS
                  </div>
                  <div className="border rounded-md text-center py-3 font-medium hover:border-[#6e9e1c] cursor-pointer"> 
                        S
                  </div>
                  <div className="border rounded-md text-center py-3 font-medium hover:border-[#6e9e1c] cursor-pointer"> 
                        M
                  </div>
                  <div className="border rounded-md text-center py-3 font-medium hover:border-[#6e9e1c] cursor-pointer"> 
                        L
                  </div>
                  {/* For Not Available Size */}
                  <div className="border rounded-md text-center py-3 font-medium cursor-not-allowed bg-[#4f7022]/[0.1] opacity-50%"> 
                        XL
                  </div>
                  <div className="border rounded-md text-center py-3 font-medium hover:border-[#6e9e1c] cursor-pointer"> 
                        Custom
                  </div>
                </div>
                {/* SIZE END */}

                {/* SHOW ERROR START */}
                <div className="text-red-600 mt-1">
                  Size selection is required
                </div>
                {/* SHOW ERROR START */}                
                
                </div>
                {/* Product SIZE RANGE END */}

                {/* ADD TO CART BUTTON START */}
                <button className="w-full py-4 rounded-full bg-[#5c8c29] text-white text-lg
                    font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
                      Add to Cart
                </button>
                {/* ADD TO CART BUTTON START */}

                
                {/* WISHLIST BUTTON START */}
                <button className="w-full py-4 rounded-full border border-black text-lg
                    font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 text-[black] mb-10">
                      Wishlist
                      <IoMdHeartEmpty size={20} color='green' />
                </button>
                {/* WISHLIST BUTTON END */}

                {/* Product Deatails Start */}
                <div>
                  <div className="text-lg font-bold mb-5">
                    Product Details
                  </div>
                  <div className="text-md mb-5">
                  Description: Printed Dress with side pockets.
                  Fabric: Upcycled linen (factory deadstock)
                  Length - 33"
                  Sleeve Length - 23"
                  Color - Printed
                  Wash care - Machine wash in cold cycle
                  Thread: Polyester sourced in mixed lots of factory leftovers
                  Made in India: This product is made in Delhi with a fair wage factory. The factory specialises in small scale production, where we can reduce waste generation and manage factory waste by upcycling scraps into patchwork fabric. Zero resources are used in material creation, processing, dyeing and finishing. Just good ol' artisanal skills to put waste to use!ach piece may come with an extra e
                  </div>
                  <div className="text-md mb-5">
                  Description: Printed Dress with side pockets.
                  Fabric: Upcycled linen (factory deadstock)
                  Length - 33"
                  Sleeve Length - 23"
                  Color - Printed
                  Wash care - Machine wash in cold cycle
                  Thread: Polyester sourced in mixed lots of factory leftovers
                  Made in India: This product is made in Delhi with a fair wage factory. The factory specialises in small scale production, where we can reduce waste generation and manage factory waste by upcycling scraps into patchwork fabric. Zero resources are used in material creation, processing, dyeing and finishing. Just good ol' artisanal skills to put waste to use!ach piece may come with an extra e
                  </div>
                </div>
                {/* Product Details END */}

            </div>
            {/* Right coloumn End */}
        </div>

        {/* Related Products */}
        <div>
          <RelatedProducts/>
        </div>
      </Wrapper>
    </div>
  )
}

export default ProductDetails