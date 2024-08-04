"use client";
import React, { useLayoutEffect, useState, useRef } from "react";
import { studioCards } from "@/utils/util";
import StudioCard from "@/components/StudioCard";
import CustomSwiper from "@/components/customSwiper";
import { SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

const wrapper = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1 } },
};

const title = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

export default function Studios() {
  const ref = useRef(null);
  const [maxHeight, setMaxHeight] = useState(0);
  useLayoutEffect(() => {
    setMaxHeight(ref.current.clientHeight);
  }, []);
  return (
    <div className="container px-4 sm:px-0 mb-[70px] lg:mb-[140px]">
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={wrapper}
        className="sm:px-0 mb-10 sm:mb-20 sm:flex items-center gap-x-10"
      >
        <motion.h2
          variants={title}
          className="px-[7px] bg-[var(--primary)] rounded-md mx-auto w-[242px] sm:w-auto sm:mx-0 mb-7 sm:mb-0"
        >
          Case Studies
        </motion.h2>

        <motion.p variants={title} className="text-center sm:text-start">
          Explore Real-Life Examples of Our Proven Digital Marketing
          <br className="hidden xl:inline-block" /> Success through Our Case
          Studies
        </motion.p>
      </motion.div>

      <motion.div className="pl-5 lg:pl-0" ref={ref} initial="hidden" whileInView="show" variants={wrapper}>
        {/* small screen  */}

        <CustomSwiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          breakPoints={{
            0: {
              slidesPerView: 1.1,
            },
          }}
          autoplay={{ delay: 3000 }}
          destroyOnLargeScreen={true}
        >
          {studioCards.map((item, index) => (
            <SwiperSlide key={item.id}>
              <StudioCard txt={item.txt} btn={item.btn} index={index} maxHeight={maxHeight}/>
            </SwiperSlide>
          ))}
        </CustomSwiper>

        {/* larger screen  */}

        <motion.div initial="hidden" whileInView="show" variants={wrapper} className="hidden lg:flex lg:items-center lg:bg-[var(--secondary)] lg:py-[70px] lg:px-[60px] lg:rounded-[45px] lg:divide-x-2 lg:overflow-hidden">
          {studioCards.map((item, index) => (
            <StudioCard
              key={item.id}
              txt={item.txt}
              btn={item.btn}
              index={index}
              maxHeight={maxHeight}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
