import React, { useState } from 'react';

function ImageSlider({ images, desc }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Images Wrapper */}
      <div
        className="flex h-full w-full transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index}`}
            className="h-full w-full flex-shrink-0 object-cover"
          />
        ))}
      </div>

      {/* Bottom Bar: Text and Navigation */}
      <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between sm:bottom-10 sm:left-10 sm:right-10">
        {/* Text */}

        <p className="text-sm font-bold text-stone-100 sm:text-lg">
          {desc[currentIndex]}
        </p>

        {/* Navigation Buttons and Index */}
        <div className="flex items-center gap-2 text-stone-600 sm:gap-4">
          {/* Previous Button */}
          <button
            onClick={goToPrev}
            className="flex h-10 w-10 items-center justify-center transition-transform duration-300 hover:scale-110 sm:h-14 sm:w-14"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              className="fill-stone-100 transition-transform duration-300 hover:scale-110 hover:fill-yellow-500 sm:h-10 sm:w-10"
            >
              <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" />
            </svg>
          </button>

          {/* Current Index */}
          <span className="text-sm text-stone-100 sm:text-xl">
            0{currentIndex + 1} / 0{images.length}
          </span>

          {/* Next Button */}
          <button
            onClick={goToNext}
            className="flex h-10 w-10 items-center justify-center transition-transform duration-300 hover:scale-110 sm:h-14 sm:w-14"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              className="fill-stone-100 transition-transform duration-300 hover:scale-110 hover:fill-yellow-500 sm:h-10 sm:w-10"
            >
              <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImageSlider;
