"use client"; // Mark as client-side

import React, { useEffect, useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "Partnering with EVI has significantly expanded our product offerings and increased our market share. Their electric 3-Wheelers are top-notch, offering advanced features that our clients love.",
    name: "Rohit Mehta, Director of Sales, AutoFleet Solutions",
  },
  {
    quote:
      "EVI's support team has been amazing! Their electric vehicles have transformed our business, reducing operational costs significantly. We're excited about future opportunities.",
    name: "Amit Sharma, CEO, FleetCorp",
  },
  {
    quote:
      "Our collaboration with EVI has been seamless. Their innovation in electric 3-wheelers is a game changer for last-mile delivery solutions. We're beyond satisfied with their service.",
    name: "Neha Gupta, COO, Delivery Solutions",
  },
  {
    quote:
      "EVI provides unparalleled after-sales service and has helped us grow our fleet efficiently. Their electric vehicles are both reliable and cost-effective.",
    name: "Suresh Patil, Managing Director, TransFleet",
  },
  {
    quote:
      "EVI's electric rickshaws are the best in the market. We’ve seen massive growth since we partnered with them. Our customers love the smooth rides and operational efficiency.",
    name: "Priya Nair, Founder, RideSafe",
  },
];

const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Autoplay function that runs every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Adjust the speed here (3000ms = 3 seconds)
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div
      className="max-w-5xl mx-auto p-8 relative"
      style={{ minHeight: "400px" }}
    >
      <div className="relative w-full h-full">
        {/* Testimonial Cards */}
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="p-8 bg-gray-100 rounded-lg shadow-lg h-full flex justify-center items-center">
              <div className="flex flex-col md:flex-row bg-gray-100 rounded-lg max-w-5xl mx-auto">
                {/* Left Section - Thunderbolt SVG */}
                <div className="w-full md:w-1/3 flex justify-start">
                  <div className="w-48 h-auto">
                    <Image
                      src="/thunder.svg" // Ensure your 'thunder.svg' is in the 'public' directory
                      alt="Thunderbolt"
                      width={192}
                      height={192}
                      layout="responsive"
                    />
                  </div>
                </div>

                {/* Right Section - Testimonial Text */}
                <div className="w-full md:w-2/3 flex flex-col justify-center text-left mt-4 md:mt-0">
                  <p className="text-xl font-medium text-gray-800 mb-4">
                    "{testimonial.quote}"
                  </p>
                  <p className="text-sm font-semibold text-blue-900">
                    • {testimonial.name}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots for navigation */}
      <div className="flex justify-center mt-4 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full ${
              currentIndex === index ? "bg-blue-900" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
