import React from "react";
import Link from "next/link";
import { IoMdCloseCircleOutline } from "react-icons/io";

function Menu({ toggle, setIsToggle }) {
  return (
    <>
      <div
        className={`fixed top-0 bottom-0 right-0 z-50 p-7 w-60 bg-[var(--secondary)] transition-all duration-300 ${
          toggle ? "translate-x-0" : "translate-x-[260px]"
        }`}
      >
        <div className="flex items-center justify-center">
          <IoMdCloseCircleOutline onClick={() => setIsToggle(false)} className="text-white w-7 h-7 mb-5" />
        </div>
        <ul className="flex flex-col items-center gap-7 text-white">
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
      </div>
      <div
        onClick={() => setIsToggle(false)}
        className={`fixed inset-0 bg-black/10 backdrop-blur-sm ${
          toggle ? "opacity-100 z-10" : "opacity-0 -z-10"
        }`}
      ></div>
    </>
  );
}

export default Menu;
