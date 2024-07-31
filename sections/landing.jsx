import React from "react";
import Image from "next/image";

export default function Landing() {
  return (
    <div className="container px-4 sm:px-0 flex flex-col gap-7 md:flex-row md:gap-0 justify-between mt-[70px]">
      {/* leftSide */}

      <div>
        <div className="[&>h1]:font-spaceMedium">
          <h1>Navigating the</h1>
          <h1>digital</h1>
          <h1>landscape for</h1>
          <h1>success</h1>
        </div>

        <div className="[&>p]:font-spaceGrotesk">
          <p className="mt-[35px]">
            Our digital marketing agency helps businesses
          </p>
          <p>grow and succeed online through a range of</p>
          <p>services including SEO, PPC, social media marketing,</p>
          <p>and content creation.</p>
        </div>

        <div className="flex items-center justify-center md:block">
          <button className="py-5 px-[35px] mt-[35px] border border-black rounded-xl w-[264px] bg-black text-white hover:bg-white hover:text-black transition-all">
            Book a consultation
          </button>
        </div>
      </div>

      {/* rightSide */}

      <div>
        <Image
          className="aspect-[1.16 / 1]"
          src="/images/Illustration.png"
          width={600}
          height={515}
          alt="illustration"
          priority
        />
      </div>
    </div>
  );
}
