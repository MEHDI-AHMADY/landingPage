"use client";
import React , { useState } from "react";
import { motion } from "framer-motion";
import { accordionItems } from "@/utils/util";
import AccordionItem from "@/components/AccordionItem";

const wrapper = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1 , staggerChildren : 0.7 } },
};

const title = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

export default function WorkProcess() {
    const [open, setOpen] = useState(null);
 
  const handleOpen = (itemId) => setOpen(open === itemId ? null : itemId);

  return (
    <div className="container px-4 sm:px-0">

      <motion.div
        initial="hidden"
        whileInView="show"
        variants={wrapper}
        className="sm:px-0 mb-10 sm:mb-20 flex flex-col lg:flex-row items-center gap-[30px]"
      >

        <motion.div initial="hidden" whileInView="show" variants={wrapper} className="flex flex-col lg:flex-row items-center text-[36px] lg:text-[40px] lg:bg-[var(--primary)]">
          <motion.span
            variants={title}
            className="inline-block text-center px-[7px] bg-[var(--primary)] rounded-md"
          >
            Our Working
          </motion.span>

          <motion.span variants={title} className="inline-block text-center px-[7px] bg-[var(--primary)] rounded-md w-fit">
            Process
          </motion.span>
        </motion.div>

        <motion.p variants={title} className="text-center sm:text-start">
          Step-by-Step Guide to Achieving <br className="hidden xl:inline-block" /> Your Business Goals Studies
        </motion.p>
        
      </motion.div>

      <motion.div initial="hidden" whileInView="show" variants={wrapper} className="flex flex-col gap-[30px]">
        {accordionItems.map((item , index) => (
          <AccordionItem key={item.id} {...item} open={open} handleOpen={handleOpen} index={index}/>
        ))}
      </motion.div>
    </div>
  );
}
