import React, { useEffect, useRef } from "react";
import "../css/TextCarousel.css";
import '../assets/fonts/fonts.css';

export const TextCarousel = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    const text = carousel.innerHTML;

    // Duplica el contenido suficiente para llenar el ancho
    while (carousel.scrollWidth < window.innerWidth * 2) {
      carousel.innerHTML += text;
    }
  }, []);

  return (
    <div className="carousel-container">
      <div className="carousel-text" ref={carouselRef}>
        <span>BOOKS &bull; COMICS &bull; MANGA &bull; </span>
      </div>
    </div>
  );
};
