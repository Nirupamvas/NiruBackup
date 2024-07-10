import React from 'react'

import {RiDeleteBin6Line} from "react-icons/ri";
const CartItem = () => {
  return (
    <div className="flex py-5 gap-3 md:gap-5 border-b">
        {/* IMAGE START */}
        <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
            <img src="q11.webp" />
        </div>
        {/* IMAGE END */}
        <div className="w-full flex flex-col">
            <div className="flex flex-col md:flex-row justify-between">
                {/* PRODUCT TITLE */}
                <div className="text-lg md:text-2xl font-semibold text-black/[0.8]">
                    Floral Dress
                </div>

                {/* PRODUCT SUBTITLE */}
                <div className="text-sm md:text-md font-medium text-black/[0.5] block md:hidden">
                    Women&apos;s Dress
                </div>

                {/* PRODUCT Price */}
                <div className="text-sm md:text-md font-bold text-black/[0.5] mt-2">
                    MRP : ₹10,000.00
                </div>
            </div>
                {/* PRODUCT SUBTITLE FOR DESKTOP*/}
                <div className="text-md font-medium text-black/[0.5] hidden md:block">
                    Women&apos;s Dress
                </div>
                
                <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md">
                        {/* SIZE START */}
                        <div className="flex items-center gap-1">
                            <div className="font-semibold">Size: </div>
                                <select className="hover:text-black">
                                    <option value="XS">XS</option>
                                    <option value="S">S</option>
                                    <option value="M">M</option>
                                    <option value="L">L</option>
                                    <option value="XL">XL</option>
                                    <option value="CUSTOM">Custom</option>
                                </select>  
                        </div>
                        {/* SIZE END */}


                        {/* QUANTITY START */}
                        <div className="flex items-center gap-1">
                            <div className="font-semibold">Quantity: </div>
                                <select className="hover:text-black">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>                                
                        </div>
                        {/* QUANTITY END */}
                    </div>

                    <RiDeleteBin6Line className="cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px]" />

                </div>
        </div>
        
    </div>
  )
}

export default CartItem