import React, { useState, useEffect } from 'react';


const Popup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-75 overflow-y-auto h-screen"
    >
      <div className="bg-white rounded-lg shadow-md p-4 w-full md:w-1/2">
        <h1 className="text-xl font-medium text-center mb-4">Hey there!</h1>
        <p className="text-base text-center mb-8">
          Want to get notified when I add new Tailwind designs?
        </p>
        <div className="flex justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <button
            className="bg-blue-500 text-white font-medium rounded-md px-4 py-2 hover:bg-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            Try it
          </button>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-200 rounded-md p-2 absolute top-right"
        >
          <svg
            aria-hidden="true"
            className="h-6 w-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10L4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Popup;
