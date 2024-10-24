import React from "react";
import Image from "next/image";

const HeroSection: React.FC = () => {
  return (
    <div className="relative w-screen h-screen bg-white flex items-center px-16">
      {/* Thunder SVG in the background */}
      <div className="absolute inset-y-0 right-0 w-1/2 h-full flex justify-end z-0">
        <Image
          src="/thunderHero.svg" // Ensure your thunder SVG path
          alt="Thunder Icon"
          layout="fill"
          objectFit="contain"
          className="z-0" // Keeps it behind other content
        />
      </div>

      {/* Left Section - Text and Buttons */}
      <div className="relative z-10 flex flex-col justify-center w-1/2">
        <h1 className="text-5xl font-bold text-[#1B4572] mb-4">
          Power Up with E-Vi Electric 3 Vehicles
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Revolutionize urban transport with Chhota Otto, designed for comfort
          and efficiency. Ideal for city commuting, ensuring a smooth ride for
          every passenger.
        </p>
        <div className="flex space-x-4">
          <button className="px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-500">
            Get in Touch
          </button>
          <button className="px-6 py-3 bg-gray-200 text-gray-900 font-semibold rounded-lg hover:bg-gray-300">
            Book a Test Drive
          </button>
        </div>
      </div>

      {/* Right Section - Larger Rickshaw Image */}
      <div className="relative z-10 w-1/2 flex justify-end items-end">
        <div className="w-[600px] h-auto mr-20 ">
          {" "}
          {/* Increased the size */}
          <Image
            src="/rick1.svg" // Replace with your actual rickshaw image 1
            alt="Chhota Otto"
            width={900} // Increased width
            height={900} // Increased height
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
