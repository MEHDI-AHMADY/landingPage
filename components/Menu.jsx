"use client";
import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { IoMdCloseCircleOutline } from "react-icons/io";
import Portal from "@/components/Portal";
import { menuItems } from "@/utils/util";

const menuVariants = {
  hidden: { x: "100%", opacity: 0 },
  visible: { x: 0, opacity: 1 },
  exit: { x: "100%", opacity: 0 },
};

const listVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1, staggerChildren: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.5 } },
};

const itemVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 , transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.5 } },
};

function Menu({ toggle, setIsToggle }) {
  useEffect(() => {
    document.body.style.overflowY = toggle ? "hidden" : "auto";
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
            <motion.div
              initial="hidden"
              animate="show"
              exit="exit"
              variants={itemVariants}
              className="flex items-center justify-center"
            >
              <IoMdCloseCircleOutline
                onClick={() => setIsToggle(false)}
                className="text-white w-7 h-7 mb-5"
              />
            </motion.div>
            <motion.ul
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={listVariants}
              className="flex flex-col items-center gap-7 text-white"
            >
              {menuItems.map((item, index) => (
                <motion.li
                  key={index}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  variants={itemVariants}
                >
                  <Link href={item.href}>{item.title}</Link>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              initial="hidden"
              animate="show"
              exit="exit"
              variants={itemVariants}
              className="mt-4 flex items-center justify-center"
            >
              <button className="p-3 border border-[var(--primary)] rounded-xl hover:bg-[var(--primary)] transition-all text-white hover:bg-white hover:text-black">
                Request a quote
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Portal>
  );
}

export default Menu;
