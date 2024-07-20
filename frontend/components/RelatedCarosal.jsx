import React from 'react'
import "react-multi-carousel/lib/styles.css"

import Carousel from 'react-multi-carousel';
import ProductCard from './ProductCard';
import FeaturedCategories from './FeaturedCategories';
import SingleFeaturedCat from './SingleFeaturedCat';

const RelatedCarosal = ({CategorieData}) => {
  console.log(CategorieData);
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2 
          }
    };
  return (
<div className="mt-12 md:mt-24 mb-24 md:mb-0 overscroll-auto">
    <div className="text-2xl font-bold mb-5 text-center">Related Products</div>
    
    <Carousel 
        responsive={responsive} 
        containerClass="container mx-auto px-4" 
        itemClass="px-2"
    >
        {CategorieData.map((category) => (
            <SingleFeaturedCat key={category.id} CategorieData={category} />
        ))}
    </Carousel>
    <div className='mb-4'></div>
</div>

  )
}

export default RelatedCarosal