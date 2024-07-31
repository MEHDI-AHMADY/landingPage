"use client";
import React from "react";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export default function CustomSwiper({ modules, spaceBetween, slidesPerView, breakPoints ,  children }) {
  return <Swiper modules={modules} spaceBetween={spaceBetween} slidesPerView={slidesPerView} breakpoints={breakPoints}>{children}</Swiper>;
}
