import {useRef, useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export const Carousell = ({ images, style, disabled}) => {
  
  // Default img from list
  let count = 0;
  
  const [currentImage, setCurrentImage] = useState(count);
  
  // Timer for auto-slide (1000 = 1s)
  const timer = 5000;
  let slideInterval;
  
  const listLength = images.length;
  
  // Slide to left
  const handleOnPrevClick = () => {
    count = (currentImage + listLength - 1) % listLength;
    setCurrentImage(count);
  };

  // Slide to right
  const handleOnNextClick = () => {
    count = (currentImage + listLength + 1) % listLength;
    setCurrentImage(count);
  };

  const slideRef = useRef(null);

  useEffect(() => {
    if ( !disabled ) 
    {
      startSlider();
      if (slideRef.current) {
        slideRef.current.addEventListener("mouseenter", pauseSlider);
      }
      if (slideRef.current) {
        slideRef.current.addEventListener("mouseleave", startSlider);
      }
  
      return () => {
        clearInterval(slideInterval);
      };
    }

  }, []);

  const startSlider = () => {
      slideInterval = setInterval(() => {
        handleOnNextClick();
      }, timer);
  };

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };

  return (
    <div className="m-auto text-white">
      <div ref={slideRef} className="w-full select-none">
        <img
          className={style + " object-cover"}
          src={images[currentImage]}
          alt={currentImage + " hero image"}
        />
      </div>

      <div className="w-full absolute top-1/2 transform -translate-y-1/2 flex justify-between items-start px-3">
        <button onClick={handleOnPrevClick} className="focus:outline-none">
          <FaAngleLeft size="50" />
        </button>
        <button onClick={handleOnNextClick} className="focus:outline-none">
        <FaAngleRight size="50" />
        </button>
      </div>
    </div>
  );
};
