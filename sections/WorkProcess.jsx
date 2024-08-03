"use client";
import React from "react";
import { motion } from "framer-motion";

const wrapper = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1 } },
};

const title = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

export default function WorkProcess() {
  return (
    <div className="container px-4 sm:px-0">
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={wrapper}
        className="sm:px-0 mb-10 sm:mb-20 flex flex-col lg:flex-row items-center gap-[30px]"
      >
        <div className="flex flex-col lg:flex-row items-center text-[40px] lg:bg-[var(--primary)]">
          <span
            variants={title}
            className="inline-block text-center px-[7px] bg-[var(--primary)] rounded-md"
          >
            Our Working
          </span>

          <span className="inline-block text-center px-[7px] bg-[var(--primary)] rounded-md w-fit">
            Process
          </span>
        </div>

        <motion.p variants={title} className="text-center sm:text-start">
          Step-by-Step Guide to Achieving <br className="hidden xl:inline-block" /> Your Business Goals Studies
        </motion.p>
      </motion.div>
    </div>
  );
}
