"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0, x: 10 },
  show: { opacity: 1, transition: { duration: 1 }, x: 0 },
};

export default function Happy() {
  return (
    <div className="container px-4 sm:px-0 mt-[70px] mb-[60px] xl:mb-[140px]">
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={container}
        className="bg-[var(--gray)] mx-auto p-[50px] lg:p-[60px] rounded-[45px] lg:flex lg:items-center lg:relative"
      >
        <div className="flex flex-col gap-y-5 lg:gap-y-[26px] flex-1">
          <h3>Let’s make things happen</h3>
          <p className="">
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <motion.button whileHover={{scale : 1.05 , boxShadow : '0px 0px 11px 1px #000000' , textShadow : '3px 3px 2px #0092CE'}} className="py-5 px-[35px] border border-black rounded-xl w-full sm:w-[264px] bg-[var(--secondary)] text-white hover:bg-white hover:text-black transition-all">
            Get your free proposal
          </motion.button>
        </div>

        <div className="hidden lg:block flex-1">
          <div className="absolute right-0 top-[-23px] w-[494px] h-[370px]">
            <Image src="/images/happy.png" fill={true} alt="happy" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
