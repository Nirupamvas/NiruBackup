import Testimonials from '@/components/Testimonials'
import React from 'react'
import {FeaturedCategoriesData} from "../../../assessts/data";
import ShopByCategory from '@/components/shopByCategory';

const CategoryShopBy = ({params}) => {
  return (
    <>
    <ShopByCategory shopByCategoryDate ={FeaturedCategoriesData}  categoryParam={params.categoryType}/>

    {/* <Testimonials/> */}
    </>
  )
}

export default CategoryShopBy