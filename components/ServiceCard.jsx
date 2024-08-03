"use client";
import React from "react";
import { motion } from "framer-motion";

const items = {
  hidden: { opacity: 0, x: 10 },
  show: { opacity: 1, x: 0 , transition : {duration : 1}},
};

export default function ServiceCard({
  url,
  title,
  title2,
  btn,
  bgColor,
  arrow,
  txtBg,
  aspect,
  txtColor,
}) {
  return (
    <motion.div
      variants={items}
      className={`flex flex-col gap-[27px] ${bgColor} p-12 rounded-[45px] lg:grid lg:grid-cols-2 lg:items-center lg:relative`}
    >
      <div className="lg:row-start-1 lg:mb-[140px]">
        <h3
          className={`${txtBg} w-fit px-[7px] rounded-[7px] text-[26px] xl:text[28px]`}
        >
          {title}
        </h3>
        <h3
          className={`${txtBg} w-fit px-[7px] rounded-[7px] text-[26px] xl:text[28px]`}
        >
          {title2}
        </h3>
      </div>
      <div className="flex items-end justify-between sm:flex-col sm:items-start sm:gap-[27px] lg:row-start-1">
        <div className="flex items-center gap-[4.5px] lg:gap-[6.5px] sm:order-2 lg:absolute lg:left-12 lg:bottom-12">
          <img src={arrow} className="cursor-pointer" />
          <span className={`${txtColor} hidden sm:inline`}>{btn}</span>
        </div>

        <div className=" max-w-[210px] w-full sm:order-1">
          <img src={url} className={`w-full h-auto ${aspect}`} />
        </div>
      </div>
    </motion.div>
  );
}
