"use client"
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const itemsWrapper = {
  hidden : {opacity : 0 } , 
  visible : {opacity : 1 , transition : {staggerChildren : 0.3}}
}

const items = {
  hidden : {opacity : 0, x : -10 },
  visible : {opacity : 1 , x : 0 }
}

const img = {
  hidden : {opacity : 0 , x : 30},
  show : {opacity : 1 , x : 0 , transition : {duration : 1.5}}
}

export default function Landing() {
  return (
    <div className="container px-4 grid grid-cols-1 sm:grid-cols-2 sm:px-0 mt-[70px]">
      {/* leftSide */}
        <motion.div initial="hidden" animate="visible" variants={itemsWrapper} className="[&>h1]:font-spaceMedium order-1">
          <motion.h1 variants={items}>Navigating the</motion.h1>
          <motion.h1 variants={items}>digital</motion.h1>
          <motion.h1 variants={items}>landscape for</motion.h1>
          <motion.h1 variants={items}>success</motion.h1>
        </motion.div>
      

        <motion.div initial="hidden" animate="visible" variants={itemsWrapper} className="[&>p]:font-spaceGrotesk order-3 sm:order-2 sm:row-start-2">
          <motion.p variants={items} className="mt-[35px]">
            Our digital marketing agency helps businesses
          </motion.p>
          <motion.p variants={items}>grow and succeed online through a range of</motion.p>
          <motion.p variants={items}>services including SEO, PPC, social media marketing,</motion.p>
          <motion.p variants={items}>and content creation.</motion.p>
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={itemsWrapper} className="flex items-center justify-center order-4 md:order:3 sm:row-start-3 md:block">
          <button className="py-5 px-[35px] mt-[35px] border border-black rounded-xl w-full sm:w-[264px] bg-black text-white hover:bg-white hover:text-black transition-all">
            Book a consultation
          </button>
        </motion.div>

      {/* rightSide */}

      <motion.div className="order-2 sm:order-2" initial="hidden" animate="show" variants={img}>
        <Image
          className="aspect-[1.16 / 1]"
          src="/images/Illustration.png"
          width={600}
          height={515}
          alt="illustration"
          priority
        />
      </motion.div>
      
    </div>
  );
}
