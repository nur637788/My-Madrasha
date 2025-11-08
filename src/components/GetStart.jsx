import React, { useState, useEffect } from "react";
import Footer from "./Footer";


const slides = [
  {
    id: 1,
    img: "/image/gallary/image 1.jpg",
  },
  {
    id: 2,
    img: "/image/gallary/image 2.jpg",
  },
  {
    id: 3,
    img: "/image/gallary/image 3.jpg",
  },
  {
    id: 4,
    img: "/image/gallary/image 4.jpg",
  },
  {
    id: 5,
    img: "/image/gallary/image 5.jpg",
  },
  {
    id: 6,
    img: "/image/gallary/image 6.jpg",
  },
  {
    id: 7,
    img: "/image/gallary/image 7.jpg",
  },
  
   {
    id: 8,
    img: "/image/gallary/image 8.jpg",
  },
  {
    id: 8,
    img: "/image/gallary/image 9.jpg",
  },
  {
    id: 8,
    img: "/image/gallary/image 10.jpg",
  },
  {
    id: 8,
    img: "/image/gallary/image 11.jpg",
  },
  {
    id: 8,
    img: "/image/gallary/image 12.jpg",
  },
  {
    id: 8,
    img: "/image/gallary/image 13.jpg",
  },
  
];

const GetStart = () => {

  const [current, setCurrent] = useState(0);

  // Auto slide every 3s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div>
    <div data-aos='zoom-in' className="mb-20 mt-30 text-center font-bold text-2xl">
      <h2>Gallary</h2>
    <div className="my-5 md:mx-50 relative w-cover h-60 md:h-[400px] overflow-hidden rounded-2xl border-2">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.img}
            alt={slide.title}
            className="w-full h-76 md:h-[500px] object-cover"
          />
        </div>
      ))}

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2 bg-black/40 text-white px-3 py-2 rounded-full"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2 bg-black/40 text-white px-3 py-2 rounded-full"
      >
        ❯
      </button>

      {/* Indicators */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full ${
              i === current ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
            
    </div>
    </div>
  );
};

export default GetStart;
