import React from "react";
import Image from "next/image";

// Assuming 'rick-1.svg' is in your 'public' folder or you can set the correct path.
const CardComponent: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row bg-[#E5E5E5] rounded-lg shadow-lg p-6 md:p-8 max-w-6xl mx-auto items-center">
      {/* Left Section - Text Content */}
      <div className="flex flex-col justify-center w-full md:w-1/2 text-left">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">
          Introducing Chhota Bull
        </h2>
        <p className="text-gray-600 mb-6">
          The &quot;Chhota Bull&quot; is E-Vi&apos;s sturdy electric loader with
          a 400 kg capacity, quick charge feature, and 20 paise/km running cost.
          Ideal for multiple sectors.
        </p>

        <ul className="mb-6 space-y-4">
          <li className="flex items-center text-gray-800">
            <svg
              className="w-6 h-6 mr-2 text-blue-900"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8c-4.418 0-8 3.582-8 8v4h16v-4c0-4.418-3.582-8-8-8z"
              />
            </svg>
            Charges fully in just 2.5 hours
          </li>
          <li className="flex items-center text-gray-800">
            <svg
              className="w-6 h-6 mr-2 text-blue-900"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8c-4.418 0-8 3.582-8 8v4h16v-4c0-4.418-3.582-8-8-8z"
              />
            </svg>
            Achieves 100 kms on a single charge
          </li>
          <li className="flex items-center text-gray-800">
            <svg
              className="w-6 h-6 mr-2 text-blue-900"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l-2 2 6 6L21 8"
              ></path>
            </svg>
            Offers swappable and fixed battery options
          </li>
          <li className="flex items-center text-gray-800">
            <svg
              className="w-6 h-6 mr-2 text-blue-900"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 16l4-4m0 0l-4-4m4 4H3"
              ></path>
            </svg>
            Supports a payload of 400 kg
          </li>
        </ul>

        <div className="flex space-x-4">
          <button className="px-6 py-2 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-700">
            Learn More
          </button>
          <button className="px-6 py-2 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-500">
            Get a Quote
          </button>
        </div>
      </div>

      {/* Right Section - Rickshaw SVG */}
      <div className="w-full md:w-1/2 flex justify-center">
        {/* Rickshaw SVG Image */}
        <div className="w-full max-w-xs h-auto">
          <Image
            src="/rick1.svg" // Ensure your 'rick-1.svg' is in the 'public' directory.
            alt="Rickshaw"
            width={700}
            height={700}
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
