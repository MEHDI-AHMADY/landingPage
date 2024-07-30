"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Menu from "@/components/Menu";
import Link from "next/link";

function Header() {
  const [isToggle, setIsToggle] = useState(false);

  const showMenuHandler = () => {
    setIsToggle(!isToggle)
  };

  return (
    <header className="w-full mt-[61px] mb-[70px] sticky top-4 right-0 left-0 z-50">
      <div className="container px-4 sm:px-0 flex items-center justify-between">
        <div>
          <Image src="/images/Logo.png" alt="logo" width={219} height={36} />
        </div>

        <div className="flex items-center gap-10">
          <nav className="hidden lg:block">
            <ul className="hidden lg:flex lg:items-center lg:gap-10">
              <li>
                <Link href="/about">About us</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/useCases">Use Cases</Link>
              </li>
              <li>
                <Link href="/pricing">Pricing</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
            </ul>
          </nav>

          <Menu className="block lg:hidden" toggle={isToggle} setIsToggle={setIsToggle} />

          <button className="hidden lg:block px-[35px] py-5 border border-black rounded-xl hover:bg-[var(--primary)] transition-all">
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
    </header>
  );
}

export default Header;
