"use client";

import React, { useEffect, useState } from "react";

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function Testimonials() {
  return (
    <div className="h-[500px] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <h1 className="text-white font-bold text-3xl top-3">Testimonials</h1>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
      
    </div>
  );
}

const testimonials = [
  {
    quote:
      "I was blown away by the custom dress I had made for a party. It fits perfectly and accentuates my shape beautifully. The fabric is luxurious, and the finish is flawless – highly recommended!",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
    url: "https://img.freepik.com/premium-photo/portrait-indian-woman-beautiful-traditional-dress-ai-generated-art_272168-11689.jpg",
  },
  {
    quote:
      "My custom-made salwar suit is amazing! The fit is spot on, and the quality of the fabric is excellent. It's stylish yet traditional, and I felt stunning wearing it all day.",
    name: "William Shakespeare",
    title: "Hamlet",
    url: "https://img.freepik.com/premium-photo/portrait-indian-woman-beautiful-traditional-dress-ai-generated-art_272168-11689.jpg",
  },
  {
    quote: "Finding the right blouse has always been tough, but this boutique nailed it! The fit is perfect, and the detailing is exquisite. It matches my saree perfectly and feels so comfortable.All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
    url: "https://img.freepik.com/premium-photo/portrait-indian-woman-beautiful-traditional-dress-ai-generated-art_272168-11689.jpg",
  },
  {
    quote:
      "The kurtha I got stitched fits me like a dream! The fabric is comfortable, and the design is beautifully crafted. It's now my favorite piece of clothing, and I couldn't be happier!",
    name: "Jane Austen",
    title: "Pride and Prejudice",
    url: "https://img.freepik.com/premium-photo/portrait-indian-woman-beautiful-traditional-dress-ai-generated-art_272168-11689.jpg",
  },
  {
    quote:
      "I had a lehanga stitched for a wedding, and it was perfect in every way! The fit was flawless, and the intricate embroidery was stunning. I received endless compliments and felt like a princess!",
    name: "Herman Melville",
    title: "Moby-Dick",
    url: "https://img.freepik.com/premium-photo/portrait-indian-woman-beautiful-traditional-dress-ai-generated-art_272168-11689.jpg",
  },
];

export default Testimonials;