import React from 'react'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel  } from 'react-responsive-carousel';

import { BiArrowBack, BiArrowToRight } from 'react-icons/bi';

const HeroBanner = () => {
  return (
    <div className="relative text-white text-[20px] w-full max-w-[11360px]">
        <Carousel 
            autoPlay={true} infiniteLoop={true} showThumbs={false} showIndicators={false} showStatus={false}
            renderArrowPrev={(clickHandler, hasPrev)=>(
                <div
                    onClick={clickHandler}
                    className="absolute right-[31px] md:right-[51px] bottom-0 w-[30px]
                    md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center
                    justify-center cursor-pointer hover:opacity-90"
                >
                    <BiArrowBack className="text-sm md:text-lg"/>
                </div>
            )}
            renderArrowNext={(clickHandler, hasPrev)=>(
                <div
                    onClick={clickHandler}
                    className="absolute right-0 bottom-0 w-[30px]
                    md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center
                    justify-center cursor-pointer hover:opacity-90"
                >
                    <BiArrowBack className="rotate-180 text-sm md:text-lg"/>
                </div>
            )}
        >
            <div>
                <img src="/b1.webp" className="aspect-[16/9] md:aspect-ratio object-cover"/>
                <div className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald
                    bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9]
                      text-[15px] md:text-[30px] uppercase font-medium cursor-pointer
                    hover:opacity-90">Show Now</div>
            </div>
            <div>
                <img src="/slide-2.png" className="aspect-[16/9] md:aspect-ratio object-cover"/>
                <div className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald
                    bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9]
                      text-[15px] md:text-[30px] uppercase font-medium cursor-pointer
                    hover:opacity-90">Show Now</div>
            </div>
            <div>
                <img src="/slide-3.png" className="aspect-[16/9] md:aspect-ratio object-cover"/>
                <div className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald
                    bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9]
                      text-[15px] md:text-[30px] uppercase font-medium cursor-pointer
                    hover:opacity-90">Show Now</div>
            </div>
        </Carousel>
        <div class="grid grid-cols-6 gap-4 text-black">
        <div class="col-start-2 col-span-4 ...">1</div>
  <div class="col-start-1 col-end-3 ...">2</div>
  <div class="col-end-7 col-span-2 ...">3</div>
  <div class="col-start-1 col-end-7 ...">4</div>
</div>
    </div>
    
  )
}

export default HeroBanner