"use client";
import React, { useState } from "react";
import Image from "next/image";
import Menu from "@/components/Menu";
import Link from "next/link";
import { menuItems } from "@/utils/util";
import { motion } from "framer-motion";

const header = {
  hidden: { y: 0 },
  show: {
    y: [0, 50, -20, 0],
    transition: {
      duration: 1.5,
      ease: "easeOut",
      times: [0, 0.2, 0.8, 1],
    },
  },
};

function Header() {
  const [isToggle, setIsToggle] = useState(false);

  const showMenuHandler = () => setIsToggle(!isToggle);

  return (
    <motion.header initial="hidden" animate="show" variants={header}
      className={`w-full pt-[61px] customSticky ${isToggle ? "z-0" : "z-40"}`}
    >
      <div className="container px-4 sm:px-0 flex items-center justify-between">
        <div>
          <Image src="/images/Logo.png" alt="logo" width={219} height={36} />
        </div>

        <div className="flex items-center gap-10">
          <nav className="hidden lg:block">
            <ul className="hidden lg:flex lg:items-center lg:gap-10">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link href={item.href}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <Menu toggle={isToggle} setIsToggle={setIsToggle} />

          <button className="hidden lg:block px-[35px] py-5 border border-black rounded-xl hover:bg-[var(--primary)] transition-all text-black">
            Request a quote
          </button>

          <div
            onClick={showMenuHandler}
            className="lg:hidden flex flex-col items-center gap-1"
          >
            <span className="w-5 h-[2px] bg-black"></span>
            <span className="w-5 h-[2px] bg-black"></span>
            <span className="w-5 h-[2px] bg-black"></span>
          </div>
        </div>
      </div>
    </motion.header>
  );
}

export default Header;
