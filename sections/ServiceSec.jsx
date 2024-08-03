"use client";
import React from "react";
import { motion } from "framer-motion";
import { servicesItems } from "@/utils/util";
import ServiceCard from "@/components/ServiceCard";

const wrapper = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1 } },
};

const paragraphsWrapper = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.5 } },
};

const paragraphs = {
  hidden: { opacity: 0, x: 10 },
  show: { opacity: 1, x: 0 , transition : {duration : 2} },
};

export default function ServicesSec() {

  return (
      <motion.div
        className="container px-4"
        initial="hidden"
        animate="show"
        variants={wrapper}
        whileInView="show"
      >
        <div className="sm:px-0 mb-10 sm:mb-20 sm:flex items-center gap-x-10">
          <h2 className="px-[7px] bg-[var(--primary)] rounded-md mx-auto sm:mx-0 w-[161px] sm:w-[178px] mb-7 sm:mb-0">Services</h2>

          <motion.div
            initial="hidden"
            whileInView="show"
            variants={paragraphsWrapper}
          >
            <motion.p className="text-center sm:text-start" variants={paragraphs}>
            At our digital marketing agency, we offer a range of services to <br className="hidden 2xl:inline-block"/> help businesses grow and succeed online. These services include:
            </motion.p>
          </motion.div>
        </div>

        <motion.div initial="hidden"
            whileInView="show"
            variants={paragraphsWrapper} className="grid grid-cols-1 sm:grid-cols-2 gap-[30px] sm:gap-5 lg:gap-10">
          {servicesItems.map((item) => (
            <ServiceCard key={item.id} url={item.src} title={item.title} title2={item.title2} btn={item.more} bgColor={item.bgColor} arrow={item.arrow} txtBg={item.txtBg} aspect={item.aspectRatio} txtColor={item.txtColor}/>
          ))}
        </motion.div>
      </motion.div>
  );
}
