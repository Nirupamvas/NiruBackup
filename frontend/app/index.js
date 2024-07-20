import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/Wrapper";
import React, { useState, useEffect } from 'react';
import Slider from "@/components/Slider";
import AppStore from "@/components/AppStore";
import FeaturedCategories from "@/components/FeaturedCategories";
import CTA from "@/components/CTA";
import CarosalCategories from "@/components/CarosalCategories";
import Example from "@/components/Example";
import FAQSection from "@/components/FAQSection";
export default function Home() {
    return <main >
        <Slider/>
        
        <Wrapper>
            {/* Heading and Paragraph Starts*/}
            <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
                <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                Tired of the same old, same old? Design your own. Fit like a dream.
                </div>
                <div className="text-md md:text-xl">
                Ditch the ordinary and unleash your creativity! Tired of clothes that never quite fit right or furniture that feels generic? Design your own! This innovative product lets you become the creator, crafting something that perfectly complements your style.
                </div>
            </div>
            {/* Heading and Paragraph Ends*/}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>
        </Wrapper>
        <CarosalCategories/>
        <CTA/>
        <FeaturedCategories/>

        <AppStore/>
        <FAQSection/>
        {/* <Example/> */}
        
    </main>;
}
