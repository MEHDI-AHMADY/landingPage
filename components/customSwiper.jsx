"use client";
import React, { useEffect, useState } from "react";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export default function CustomSwiper({
  modules,
  spaceBetween,
  slidesPerView,
  breakPoints,
  children,
  navigation,
  pagination,
  autoplay,
  destroyOnLargeScreen,
}) {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (destroyOnLargeScreen && isLargeScreen) {
    return null; 
  }

  return (
    <Swiper
      modules={modules}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      breakpoints={breakPoints}
      autoplay={autoplay}
      navigation={navigation}
      pagination={pagination}
    >
      {children}
    </Swiper>
  );
}
