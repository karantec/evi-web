import React from "react";
import Image from "next/image";

const WhyChhotaBull: React.FC = () => {
  return (
    <div className="w-screen py-16 px-24 bg-white flex justify-between items-center">
      {/* Left Section */}
      <div className="max-w-xl">
        {/* Title */}
        <h2 className="text-3xl font-bold text-[#1B4572] mb-8">
          Why Chhota Bull?
        </h2>

        {/* Feature Cards */}
        <div className="space-y-6">
          {/* Card 1: Reliability */}
          <div className="flex items-start bg-gray-100 p-6 rounded-lg shadow-md">
            <div className="mr-4">
              <span className="text-3xl">🛡️</span>{" "}
              {/* You can replace with SVG or Icon */}
            </div>
            <div>
              <h3 className="text-lg font-semibold">
                Reliability - Built to Last
              </h3>
              <p className="text-gray-600">
                Built to Last Designed to withstand tough conditions, E-Vi
                delivers durability and dependability for long-lasting
                performance.
              </p>
            </div>
          </div>

          {/* Card 2: Safety */}
          <div className="flex items-start bg-gray-100 p-6 rounded-lg shadow-md">
            <div className="mr-4">
              <span className="text-3xl">🔒</span>{" "}
              {/* You can replace with SVG or Icon */}
            </div>
            <div>
              <h3 className="text-lg font-semibold">
                Safety: Designed with Care
              </h3>
              <p className="text-gray-600">
                E-Vi prioritizes passenger safety with low risk of toppling or
                tumbling, stable handling, and a controlled speed.
              </p>
            </div>
          </div>

          {/* Card 3: Efficiency */}
          <div className="flex items-start bg-gray-100 p-6 rounded-lg shadow-md">
            <div className="mr-4">
              <span className="text-3xl">⚡</span>{" "}
              {/* You can replace with SVG or Icon */}
            </div>
            <div>
              <h3 className="text-lg font-semibold">
                Efficiency – Maximizing every Journey
              </h3>
              <p className="text-gray-600">
                Optimized for range and power, E-Vi ensures energy-efficient
                rides with quick charging and high torque capabilities.
              </p>
            </div>
          </div>

          {/* Card 4: Comfort */}
          <div className="flex items-start bg-gray-100 p-6 rounded-lg shadow-md">
            <div className="mr-4">
              <span className="text-3xl">🛋️</span>{" "}
              {/* You can replace with SVG or Icon */}
            </div>
            <div>
              <h3 className="text-lg font-semibold">Comfort & Adaptability</h3>
              <p className="text-gray-600">
                Enhanced suspension and ergonomic design provide a smooth,
                fatigue-free experience for drivers.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section: Rickshaw Image */}
      <div className="w-1/2 flex justify-center">
        <Image
          src="/rick1.svg" // Make sure this path is correct and points to the actual image
          alt="Chhota Bull Rickshaw"
          width={650}
          height={650}
        />
      </div>
    </div>
  );
};

export default WhyChhotaBull;
