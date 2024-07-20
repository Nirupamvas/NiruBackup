"use client";

import FeaturedCategories from '@/components/FeaturedCategories'
import { CardHoverEffectDemo } from '@/components/CardHoverEffectDemo';
import Testimonials from '@/components/Testimonials';
import { FlipWords } from '@/components/ui/flip-words';
import RelatedCarosal from '@/components/RelatedCarosal';
import React, { useState } from 'react';
import Modal from 'react-modal';
import CarosalCategories from '@/components/CatgeoryCarosal';
import CategoryCarosal from '@/components/CatgeoryCarosal';
import ModalConsulation from '@/components/ModalConsulation';

import {CategorieData, FeaturedCategoriesData} from "../../../assessts/data";
import StitchDetails from '@/components/StitchDetails';
import {StitchingBlouse} from '../../../assessts/data'

const getDataByType = (type) => {
  switch (type.toLowerCase()) {
    case 'blouse':
      return StitchingBlouse;
    case 'dress':
      return StitchingDress;
    default:
      return [];
  }
};



const Stitching = ({ params }) => {
  const data = 'StitchingBlouse';
  const wordList = ["better", "Comfortable", "casual", "ethnic tunic","Unique"];
  wordList[0]=params.stitchingName;
  const words = wordList.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  return (
    <>
      {/* Flip Words Title */}
      <div className="w-full text-center  md:text-center  bg-[#a3b7a4] ">
        <h1 className="py-12 animate-marquee whitespace-nowrap mb-6 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight ">
          Flawless Ethnic Flair{" "}
          <span className="block w-full text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-500 lg:inline">
            <FlipWords words={words} />
            {/* {params.stitchingName} */}
            {/* <Meteors number={50}  /> */}
          </span>
        </h1>
      </div>

      
      <h1>{"Stitching"+params.stitchingName}</h1>

      <StitchDetails StitchData = {StitchingBlouse} StitchingCategory={params.stitchingName} />
      {/* //<StitchDetails data={data} /> */}

      <Testimonials />
      <CardHoverEffectDemo />

      <FeaturedCategories FeaturedCategoriesData={FeaturedCategoriesData} />

      <RelatedCarosal CategorieData={CategorieData} />
      {/* <CarosalCategories/> */}
      {/* <CategoryCarosal/> */}
    </>
  );
}

export default Stitching



