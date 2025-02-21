"use client";

import { useState, useEffect } from "react";

const slides = [
  {
    image: "/slider1.jpg",
    title: "মাদ্রাসা মসজিদ",
    description: "আত-তাফিজ ইন্টারন্যাশনাল মাদ্রাসা মসজিদ বাংলাদেশের অন্যতম পরিচিত একটি ধর্মীয় শিক্ষা প্রতিষ্ঠান ও মসজিদ। এটি ধর্মীয় শিক্ষার পাশাপাশি সামাজিক উন্নয়নেও গুরুত্বপূর্ণ ভূমিকা পালন করে।",
  },
  {
    image: "/slider2.jpg",
    title: "মাদ্রাসার খেলার মাঠ",
    description: "আত-তাফিজ ইন্টারন্যাশনাল মাদ্রাসা খেলার মাঠ শিক্ষার্থীদের শারীরিক ও মানসিক বিকাশের জন্য একটি গুরুত্বপূর্ণ স্থান। প্রশস্ত এবং সবুজে ঘেরা এই মাঠটি মাদ্রাসার শিক্ষার্থীদের জন্য খেলার ও শরীরচর্চার আদর্শ ব্যবস্থা প্রদান করে।"
  },
  {
    image: "/slider3.jpg",
    title: "মাদরাসা এরিয়া",
    description: "আত-তাফিজ ইন্টারন্যাশনাল মাদ্রাসা এরিয়া একটি প্রশস্ত ও সুশৃঙ্খল পরিবেশে অবস্থিত, যা শিক্ষার্থীদের জন্য উপযুক্ত একটি শিক্ষামূলক পরিবেশ প্রদান করে। মাদ্রাসার চারপাশের এলাকা সবুজে ঘেরা এবং শান্তিপূর্ণ, যা শিক্ষার্থীদের মনোযোগ কেন্দ্রীভূত করতে সহায়ক।"
  },
  // Add more slides as needed
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[450px] sm:h-[600px] overflow-hidden bg-black">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="text-white absolute inset-0 flex flex-col gap-4 items-center justify-center bg-black bg-opacity-50">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">{slide.title}</h2>
            <p className="text-lg sm:text-xl mb-6 text-center max-w-2xl">{slide.description}</p>
          </div>
        </div>
      ))}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2"
      >
        &#10095;
      </button>
    </div>
  );
}
