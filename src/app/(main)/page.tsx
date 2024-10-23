import React from "react";
import Navbar from "../../components/nav";
import Products from "@/components/productCard";
import Products1 from "@/components/productCard2";
import Info from "@/components/info";
import TestimonialCarousel from "@/components/testimonial";
import FAQSection from "@/components/faqSection";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen w-screen">
      <Navbar />
      <Info />

      {/* Explore Our Fleet Section */}
      <div className="w-full text-center mt-8 text-3xl mb-16 font-bold">
        <span className="text-[#1B4572]">Explore Our Fleet</span>
      </div>

      {/* Products Section */}
      <div className="flex flex-col gap-10 mb-16">
        <Products />
        <Products1 />
      </div>

      {/* Testimonials Section */}
      <div className="w-full text-center mt-8 text-3xl mb-56 font-bold">
        <span className="text-[#1B4572]">What Our Partners Say About Us</span>
      </div>
      <div className="mb-16">
        <TestimonialCarousel />
      </div>

      {/* FAQ Section */}
      <FAQSection />
      <Footer />
    </div>
  );
}
