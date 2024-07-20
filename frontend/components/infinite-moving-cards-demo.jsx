"use client";

import React, { useEffect, useState } from "react";

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[500px] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <h1 className="text-white font-bold text-2xl">Testimonials</h1>
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
      "It was good",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
    url: "https://img.freepik.com/premium-photo/portrait-indian-woman-beautiful-traditional-dress-ai-generated-art_272168-11689.jpg",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
    url: "https://img.freepik.com/premium-photo/portrait-indian-woman-beautiful-traditional-dress-ai-generated-art_272168-11689.jpg",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
    url: "https://img.freepik.com/premium-photo/portrait-indian-woman-beautiful-traditional-dress-ai-generated-art_272168-11689.jpg",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
    url: "https://img.freepik.com/premium-photo/portrait-indian-woman-beautiful-traditional-dress-ai-generated-art_272168-11689.jpg",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
    url: "https://img.freepik.com/premium-photo/portrait-indian-woman-beautiful-traditional-dress-ai-generated-art_272168-11689.jpg",
  },
];
