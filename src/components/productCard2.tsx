import React from "react";
import Image from "next/image";

// Assuming the image is in the 'public' folder and named 'chhota-otto.svg'
const ChhotaOttoCard: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg p-6 md:p-8 max-w-6xl  mx-auto items-center">
      {/* Left Section - Rickshaw Image */}
      <div className="w-full md:w-2/3 flex justify-center">
        {/* Rickshaw Image */}
        <div className="w-full max-w-lg h-auto">
          {" "}
          {/* Adjusted max-width to make the image bigger */}
          <Image
            src="/rick2.svg" // Assuming your image is named 'chhota-otto.svg' and located in the 'public' directory
            alt="Chhota Otto"
            width={700} // Increased width
            height={700} // Increased height
            layout="responsive"
          />
        </div>
      </div>

      {/* Right Section - Text Content */}
      <div className="flex flex-col justify-center w-full md:w-1/3 text-left">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">
          Introducing Chhota Otto
        </h2>
        <p className="text-gray-600 mb-6">
          The &quot;Chhota Otto&quot; is E-Vi&apos;s durable electric rickshaw,
          offering low operational costs, quick charging, and seating for six.
          Perfect for city commutes.
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
            Seats up to six comfortably: 4 adults and 2 children
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
            Built with a sturdy, full metal body
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
            Travels 120 kms on a full charge
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
            IP67-rated battery ensures waterproof and dustproof safety
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
    </div>
  );
};

export default ChhotaOttoCard;
