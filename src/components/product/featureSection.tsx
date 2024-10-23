import React from "react";

const FeatureSection: React.FC = () => {
  return (
    <div className="w-screen bg-white py-16">
      {/* Feature Cards */}
      <div className="max-w-6xl mx-auto flex justify-between items-center text-center">
        {/* Feature 1: Range */}
        <div className="flex flex-col">
          <p className="text-gray-600 text-sm">Range</p>
          <p className="text-[#1B4572] text-xl font-semibold">
            100+ Kilometers
          </p>
        </div>

        {/* Vertical Divider */}
        <div className="border-r border-gray-300 h-12"></div>

        {/* Feature 2: Top Speed */}
        <div className="flex flex-col">
          <p className="text-gray-600 text-sm">Top Speed</p>
          <p className="text-[#1B4572] text-xl font-semibold">25 kmph</p>
        </div>

        {/* Vertical Divider */}
        <div className="border-r border-gray-300 h-12"></div>

        {/* Feature 3: Peak Torque */}
        <div className="flex flex-col">
          <p className="text-gray-600 text-sm">Peak Torque</p>
          <p className="text-[#1B4572] text-xl font-semibold">26 Nm</p>
        </div>

        {/* Vertical Divider */}
        <div className="border-r border-gray-300 h-12"></div>

        {/* Feature 4: Payload Capacity */}
        <div className="flex flex-col">
          <p className="text-gray-600 text-sm">Payload Capacity</p>
          <p className="text-[#1B4572] text-xl font-semibold">400 Kg</p>
        </div>
      </div>

      {/* Description Section */}
      <div className="mt-16 text-center">
        <p className="text-gray-500 text-2xl font-bold">
          Experience the next generation of mobility with our electric auto
          rickshaw, equipped with industry-leading features and advanced
          engineering.
        </p>
      </div>
    </div>
  );
};

export default FeatureSection;
