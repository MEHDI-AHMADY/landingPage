"use client";
import React from "react";
import { motion } from "framer-motion";

const wrapper = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1.5 } },
};

const title = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

export default function ContactUs() {
  return (
    <div className="container px-4 sm:px-0 mb-[90px] lg:mb-[140px]">
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={wrapper}
        className="sm:px-0 mb-10 sm:mb-20 sm:flex items-center gap-x-10"
      >
        <motion.h2
          variants={title}
          className="w-52 sm:w-auto px-[7px] bg-[var(--primary)] rounded-md mx-auto sm:mx-0 mb-7 sm:mb-0"
        >
          Contact Us
        </motion.h2>

        <motion.p variants={title} className="text-center sm:text-start">
          Connect with Us: Let's Discuss Your{" "}
          <br className="hidden xl:inline-block" /> Digital Marketing Needs
        </motion.p>
      </motion.div>

      <motion.div initial="hidden" whileInView="show" variants={wrapper} className="lg:min-h-[770px] relative lg:pt-[62px] lg:pb-24 lg:pl-[100px] bg-[var(--gray)] rounded-[45px] lg:flex lg:overflow-hidden">
        <form className="flex-[2]" action="#" onSubmit={(e) => e.preventDefault()}>
          <div className="pt-[40px] pb-[50px] px-[30px] lg:p-0 lg:mb-10">
            {/* radio buttons */}

            <div className="flex items-center justify-between lg:justify-start lg:gap-[35px] px-5 mb-[36px] lg:mb-10">
              <div className="flex items-center gap-1 cursor-pointer">
                <div className="w-7 h-7 flex items-center justify-center border border-black rounded-full p-1 cursor-pointer">
                  <input
                    type="radio"
                    id="sayHi"
                    name="radio"
                    className="w-4 h-4 rounded-full appearance-none checked:bg-[var(--primary)] cursor-pointer"
                  />
                </div>

                <label htmlFor="sayHi">Say Hi</label>
              </div>

              <div className="flex items-center gap-1 cursor-pointer">
                <div className="w-7 h-7 flex items-center justify-center border border-black rounded-full p-1 cursor-pointer">
                  <input
                    type="radio"
                    id="getQuote"
                    name="radio"
                    className="w-4 h-4 rounded-full appearance-none checked:bg-[var(--primary)] cursor-pointer"
                  />
                </div>

                <label htmlFor="getQuote">Get a Quote</label>
              </div>
            </div>

            {/* other elements in form */}

            <div>
              <div className="flex flex-col gap-2.5">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  placeholder="Name"
                  id="name"
                  className="py-4 px-5 rounded-xl"
                />
              </div>

              <div className="mt-5 lg:mt-[25px] flex flex-col gap-2.5">
                <label htmlFor="email">Email*</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="py-4 px-5 rounded-xl"
                />
              </div>

              <div className="mt-5 lg:mt-[25px] flex flex-col gap-2.5">
                <label htmlFor="message">Message*</label>
                <textarea
                  id="message"
                  className="py-4 px-5 rounded-xl min-h-32 lg:min-h-48"
                  placeholder="Message"
                ></textarea>
              </div>
            </div>
          </div>

          <motion.button whileHover={{scale : 1.05 , boxShadow : '0px 0px 11px 1px #000000' , textShadow : '3px 4px 3px #40CE60'}} className="absolute bottom-[-36px] right-0 left-0 lg:static w-full py-5 bg-[var(--secondary)] rounded-[14px] text-white cursor-pointer">
            Send Message
          </motion.button>
        </form>

        <div className="hidden lg:block flex-[2]">
          <div className="absolute top-[62px] bottom-[62px] right-[-310px]">
            <img src="/images/contactus.png" alt="contactus" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
