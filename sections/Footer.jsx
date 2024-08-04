"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { menuItems } from "@/utils/util";

export default function Footer() {
  return (
    <div className="container bg-[var(--secondary)]">
      <div>
        <div className="flex items-center flex-col gap-[37px] pt-[50px] pb-[30px] px-5 text-white">
          <Image width={144} height={23} alt="logo" src="/images/mobLogo.png" />

          <ul className="flex flex-col items-center gap-[15px]">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link href={item.href}>{item.title}</Link>
              </li>
            ))}
          </ul>

          <button className="text-black bg-[var(--primary)] px-3 rounded-sm">
            Contact us:
          </button>

          <span className="text-base">
            email :<Link href="#">info@positivus.com</Link>
          </span>

          <span className="text-base">Phone: 555-567-8901</span>

          <div className="flex flex-col gap-1 items-center">
            <span className="text-base">Address: 1234 Main St</span>

            <span>Moonstone City, Stardust State 12345</span>
          </div>
        </div>

        <form
          className="flex flex-col items-center gap-[22px] p-[30px] bg-[#292A32] rounded-[14px] mx-5 mb-[37px]"
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

        <div className="flex items-center justify-center gap-5 mx-5 pb-[37px]">
          <div className="linkedinIcon">
            <Link href="#"></Link>
          </div>
          <div className="facebookIcon">
            <Link href="#"></Link>
          </div>
          <div className="twitterIcon">
            <Link href="#"></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
