"use client";
import React from "react";
import { motion } from "framer-motion";
import { teamMembers } from "@/utils/util";
import TeamMember from "@/components/TeamMember";

const wrapper = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1 } },
};

const title = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

export default function Team() {
  return (
    <div className="container px-4 sm:px-0 mt-44 mb-[60px] lg:mt-[140px] lg:mb-[100px]">
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={wrapper}
        className="sm:px-0 mb-10 sm:mb-20 sm:flex items-center gap-x-10"
      >
        <motion.h2
          variants={title}
          className="w-[105px] px-[7px] bg-[var(--primary)] rounded-md mx-auto sm:mx-0 mb-7 sm:mb-0"
        >
          Team
        </motion.h2>

        <motion.p variants={title} className="text-center sm:text-start">
          Meet the skilled and experienced team behind our{" "}
          <br className="hidden xl:inline-block" /> successful digital marketing
          strategies
        </motion.p>
      </motion.div>

      <motion.div initial="hidden" whileInView="show" variants={wrapper} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        {teamMembers.map((member, index) => (
          <TeamMember key={member.id} {...member} index={index} />
        ))}
      </motion.div>

      <div className="flex items-center justify-center md:justify-end">
        <motion.button whileHover={{boxShadow : '-1px -1px 9px -1px rgba(0,0,0,0.75)', textShadow : '3px 4px 3px #40CE60' , scale : 1.03}} className="w-full md:w-auto flex items-center justify-center py-5 px-[76px] mt-10 cursor-pointer bg-[var(--secondary)] text-white rounded-xl transition-all">
          See all team
        </motion.button>
      </div>
    </div>
  );
}
