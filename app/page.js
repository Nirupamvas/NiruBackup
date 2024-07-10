"use client";
import AppStore from "@/components/AppStore";
import CTA from "@/components/CTA";
import CarosalCategories from "@/components/CarosalCategories";
import FAQSection from "@/components/FAQSection";
import FeaturedCategories from "@/components/FeaturedCategories";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import RelatedCarosal from "@/components/RelatedCarosal";

import Slider from "@/components/Slider";
import StepsToBook from "@/components/StepsToBook";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
      <>
      <Slider/>
      <CTA/>
      <FeaturedCategories/>
      
      <StepsToBook/>
      <Testimonials/>

      <RelatedCarosal/>
      <AppStore/>
      </>
  );
}
