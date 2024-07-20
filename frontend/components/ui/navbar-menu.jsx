"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({ setActive, active, item, children }) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-black hover:opacity-80"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_0.35  rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="bg-[#F4F1F8] backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-300 dark:border-gray-700 shadow-xl"
              >
                <motion.div layout className="w-max h-full p-4">
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menus = ({ setActive, children }) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className="relative border border-transparent shadow-input flex justify-center py-6"
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({ title, description, href, src }) => {
  return (
    <Link href={href} className="block">
      <div className="flex space-x-2 overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105">
        <Image
          src={src}
          width={140}
          height={70}
          alt={title}
          className="flex-shrink-0 rounded-md shadow-2xl"
        />
        <div>
          <h4 className="text-xl font-bold mb-1 text-black">{title}</h4>
          <p className="text-gray-500 text-sm max-w-[10rem] tracking-normal">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};



export const HoveredLink = ({ children, ...rest }) => {
  return (
    <Link
      {...rest}
      className="relative text-black-900 text-base transition-colors duration-300 ease-in-out hover:text-[#35491f] before:absolute before:-bottom-1 before:left-0 before:w-full before:h-0.5 before:bg-[#35491f] before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100"
    >
      {children}
    </Link>
  );
};
