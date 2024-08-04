"use client";
import React from "react";
import { motion } from "framer-motion";
import CustomSwiper from "@/components/customSwiper";
import { SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { testimonialItems } from "@/utils/util";
import TestimonialItem from "@/components/TestimonialItem";
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";

const wrapper = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1 } },
};

const title = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

export default function Testimonial() {
  return (
    <div className="container px-4 sm:px-0 mb-[60px] lg:mb-[140px]">
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={wrapper}
        className="sm:px-0 mb-10 sm:mb-20 sm:flex items-center gap-x-10"
      >
        <motion.h2
          variants={title}
          className="w-[231px] sm:w-auto px-[7px] bg-[var(--primary)] rounded-md mx-auto sm:mx-0 mb-7 sm:mb-0"
        >
          Testimonials
        </motion.h2>

        <motion.p variants={title} className="text-center sm:text-start">
          Hear from Our Satisfied Clients: Read Our Testimonials{" "}
          <br className="hidden xl:inline-block" /> to Learn More about Our
          Digital Marketing Services
        </motion.p>
      </motion.div>

      <motion.div initial="hidden" whileInView="show" variants={wrapper} className="relative pt-[30px] lg:pt-[84px] pb-[60px] lg:pb-[68px] px-[30px] bg-[var(--secondary)] rounded-[45px]">
        <CustomSwiper
          modules={[Navigation, Pagination, Autoplay]}
          loop={true}
          spaceBetween={50}
          breakPoints={{
            0: {
              slidesPerView: 1,
            },
            768 : {
                slidesPerView : 1.8
            }
          }}
        centeredSlides={true}
        navigation
        pagination={{ clickable: true, el: ".custom-pagination" }}
          autoplay={{ delay: 3000 }}
        >
          {testimonialItems.map((item) => (
            <SwiperSlide key={item.id}>
              <TestimonialItem {...item} />
            </SwiperSlide>
          ))}
        </CustomSwiper>
        <div className="custom-prev absolute bottom-[60px] left-[30px] lg:left-[26%] cursor-pointer">
            <GoArrowLeft className="text-white"/>
        </div>
        <div className="custom-next absolute bottom-[60px] right-[30px] lg:right-[26%] cursor-pointer">
            <GoArrowRight className="text-white"/>
        </div>
        <div className="mt-[60px] custom-pagination flex items-center justify-center gap-5"></div>
      </motion.div>
    </div>
  );
}
