"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { menuItems } from "@/utils/util";
import { motion } from "framer-motion";

const wrapper = {
  hidden: { opacity: 0  },
  show: { opacity: 1, transition: { duration: 2 } },
};

export default function Footer() {
  return (
    <div className="lg:container bg-[var(--secondary)] lg:rounded-t-[45px]">

      <motion.div initial="hidden" whileInView="show" variants={wrapper} className="lg:grid lg:grid-cols-4 lg:items-start lg:py-[55px] lg:px-[60px]">

        <div className="flex items-center flex-col gap-[37px] pt-[50px] px-5 text-white lg:flex-row lg:items-start lg:p-0 lg:gap-0 lg:justify-between lg:col-start-1 lg:col-span-3 lg:order-1">
          <Image width={144} height={23} alt="logo" src="/images/mobLogo.png" />

          <ul className="flex flex-col items-center gap-[15px] lg:gap-10 lg:flex-row">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link href={item.href}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center flex-col gap-[15px] text-white my-[37px] lg:mb-0 lg:mt-[66px] lg:order-3 lg:items-start lg:col-span-2">
          <button className="text-black bg-[var(--primary)] px-3 rounded-sm mb-5">
            Contact us:
          </button>

          <span className="text-base">
            email :<Link href="#">info@positivus.com</Link>
          </span>

          <span className="text-base">Phone: 555-567-8901</span>

          <div className="flex flex-col gap-1 items-center lg:items-start">
            <span className="text-base">Address: 1234 Main St</span>

            <span>Moonstone City, Stardust State 12345</span>
          </div>
        </div>

        <form
          className="flex flex-col items-center gap-[22px] p-[30px] bg-[#292A32] rounded-[14px] mx-5 mb-[37px] lg:mb-0 lg:mx-0 lg:py-14 lg:px-10 lg:my-[66px] lg:order-4 lg:col-start-3 lg:col-span-2 lg:flex-row"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-[14px] py-5 px-[25px]"
          />
          <button className="w-full rounded-[14px] bg-[var(--primary)] py-5 cursor-pointer">
            Subscribe to news
          </button>
        </form>

        <div className="flex items-center justify-center gap-5 mx-5 pb-[37px] border-b border-[var(--gray)] lg:justify-end lg:mx-0 lg:border-b-0 lg:p-0 lg:order-2">
          <Link className="linkedinIcon" href="#"></Link>
          <Link className="facebookIcon" href="#"></Link>
          <Link className="twitterIcon" href="#"></Link>
        </div>

        <div className="flex flex-col items-center py-[37px] gap-[15px] text-white lg:flex-row lg:p-0 lg:col-span-4 lg:items-start lg:mt-[50px] lg:pt-[50px] lg:border-t border-[var(--gray)] lg:order-5">
          <p>© 2023 Positivus. All Rights Reserved.</p>
          <p>Privacy Policy</p>
        </div>

      </motion.div>
    </div>
  );
}
