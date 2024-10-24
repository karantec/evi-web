"use client"; // Mark as client-side

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const thunderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Thunder SVG Animation
      if (thunderRef.current) {
        gsap.to(thunderRef.current, {
          y: -20,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        });
      }

      // Text Animation
      if (textRef.current) {
        gsap.from(textRef.current, {
          opacity: 0,
          x: -50,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
          },
        });
      }

      // Buttons Animation
      if (buttonsRef.current) {
        gsap.from(buttonsRef.current.children, {
          opacity: 0,
          y: 20,
          stagger: 0.2,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: buttonsRef.current,
            start: "top 80%",
          },
        });
      }

      // Image Animation
      if (imageRef.current) {
        gsap.from(imageRef.current, {
          opacity: 0,
          scale: 0.95,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%",
          },
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      className="relative w-screen h-screen bg-white flex items-center px-16 overflow-hidden"
      ref={heroRef}
    >
      {/* Thunder SVG in the background */}
      <div className="absolute inset-y-0 right-0 w-1/2 h-full flex justify-end z-0">
        <div className="relative w-full h-full" ref={thunderRef}>
          <Image
            src="/thunderHero.svg" // Ensure your thunder SVG path
            alt="Thunder Icon"
            layout="fill"
            objectFit="contain"
            className="z-0"
          />
        </div>
      </div>

      {/* Left Section - Text and Buttons */}
      <div
        className="relative z-10 flex flex-col justify-center w-1/2"
        ref={textRef}
      >
        <h1 className="text-5xl font-bold text-[#1B4572] mb-4">
          Power Up with E-Vi Electric 3 Vehicles
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Revolutionize urban transport with Chhota Otto, designed for comfort
          and efficiency. Ideal for city commuting, ensuring a smooth ride for
          every passenger.
        </p>
        <div className="flex space-x-4" ref={buttonsRef}>
          <button className="px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-500 transform transition-transform duration-300">
            Get in Touch
          </button>
          <button className="px-6 py-3 bg-gray-200 text-gray-900 font-semibold rounded-lg hover:bg-gray-300 transform transition-transform duration-300">
            Book a Test Drive
          </button>
        </div>
      </div>

      {/* Right Section - Larger Rickshaw Image */}
      <div
        className="relative z-10 w-1/2 flex justify-end items-end"
        ref={imageRef}
      >
        <div className="w-[600px] h-auto mr-20">
          <Image
            src="/rick1.svg" // Replace with your actual rickshaw image
            alt="Chhota Otto"
            width={900}
            height={900}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
