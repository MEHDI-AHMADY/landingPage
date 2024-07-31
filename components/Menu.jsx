"use client";
import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { IoMdCloseCircleOutline } from "react-icons/io";
import Portal from "@/components/Portal";
import { menuItems } from "@/utils/util";

const menuVariants = {
  hidden: { translateX: "260px", opacity: 0 },
  visible: { translateX: 0, opacity: 1 },
  exit: { translateX: "260px", opacity: 0 },
};

function Menu({ toggle, setIsToggle }) {
  useEffect(() => {
    if (toggle) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [toggle]);

  return (
    <Portal toggle={toggle}>
      <AnimatePresence>
        {toggle && (
          <motion.div
            key="menu"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            transition={{
              duration: 0.5,
            }}
            className={`lg:hidden fixed top-0 right-0 bottom-0 p-7 w-60 z-50 bg-[var(--secondary)]`}
          >
            <div className="flex items-center justify-center">
              <IoMdCloseCircleOutline
                onClick={() => setIsToggle(false)}
                className="text-white w-7 h-7 mb-5"
              />
            </div>
            <ul className="flex flex-col items-center gap-7 text-white">
              {menuItems.map((item, index) => (
                <motion.li key={index} initial={{opacity : 0}} animate={{opacity : 1}} transition={{duration : 2}}>
                  <Link href={item.href}>{item.title}</Link>
                </motion.li>
              ))}
            </ul>

            <div className="mt-4 flex items-center justify-center">
              <button className="p-3 border border-[var(--primary)] rounded-xl hover:bg-[var(--primary)] transition-all text-white hover:bg-white hover:text-black">
                Request a quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Portal>
  );
}

export default Menu;
