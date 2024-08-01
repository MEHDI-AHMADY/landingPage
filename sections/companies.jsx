"use client";
import React from "react";
import { companyItems } from "@/utils/util";
import { SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import CustomSwiper from "@/components/customSwiper";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Companies() {
  return (
    <motion.div initial={{ opacity : 0 }} whileInView={{ opacity : 1 }} transition={{ duration : 1 }} className="container px-4 sm:px-0 mt-[70px] mb-[60px] sm:mb-[77px]">
      <CustomSwiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={96}
        breakPoints={{
          0: {
            slidesPerView: 3,
          },

          1200: {
            slidesPerView: 6,
          },
        }}
        autoplay={{ delay: 3000 }}
        navigation
        pagination={{ clickable: true }}
      >
        {companyItems.map((item, index) => (
          <SwiperSlide key={index}>
            <Image src={item.src} width={item.width} height={48} alt="company" />
          </SwiperSlide>
        ))}
      </CustomSwiper>
    </motion.div>
  );
}
