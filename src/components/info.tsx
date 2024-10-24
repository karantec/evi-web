import React from "react";
import { FaBolt, FaPiggyBank, FaShieldAlt } from "react-icons/fa"; // Importing icons

const Info: React.FC = () => {
  return (
    <div className="bg-orange-500 py-16">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">Why Choose E-Vi?</h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
          <FaShieldAlt className="text-orange-500 text-4xl mb-4" /> {/* Icon */}
          <h3 className="text-lg font-bold text-gray-900 mb-2">Reliability</h3>
          <p className="text-gray-600 text-center">
            Engineered to Endure – Tough, dependable, and crafted for
            India&apos;s diverse landscapes.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
          <FaBolt className="text-orange-500 text-4xl mb-4" /> {/* Icon */}
          <h3 className="text-lg font-bold text-gray-900 mb-2">Efficiency</h3>
          <p className="text-gray-600 text-center">
            Efficiency at its Best – Quick charging and extensive range to keep
            you on the move.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
          <FaPiggyBank className="text-orange-500 text-4xl mb-4" /> {/* Icon */}
          <h3 className="text-lg font-bold text-gray-900 mb-2">
            Cost - Effective
          </h3>
          <p className="text-gray-600 text-center">
            Experience significant savings with operational costs as low as 20
            paise per km.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
