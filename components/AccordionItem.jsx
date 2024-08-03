import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

export default function AccordionItem({ id, title, txt, handleOpen, open }) {
  return (
    <>
      <Accordion open={open === id} className={`shadow-custom rounded-[45px] p-[30px] lg:py-[41px] lg:px-[60px] ${open === id ? "bg-[var(--primary)]" : 'bg-[var(--gray)]'}`}>
        <AccordionHeader className="relative" onClick={() => handleOpen(id)}>
          <div className="flex items-center gap-2 lg:gap-5">
            <span className="font-spaceMedium text-[60px]">0{id}</span>
            <span>{title}</span>
          </div>

          <div className="absolute right-0 top-4">
            {open === id ? (
              <svg
                width="58"
                height="59"
                viewBox="0 0 58 59"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="29"
                  cy="29.5"
                  r="28.5"
                  fill="#F3F3F3"
                  stroke="#191A23"
                />
                <path d="M20 32.14V26.5H37.76V32.14H20Z" fill="black" />
              </svg>
            ) : (
              <svg
                width="58"
                height="59"
                viewBox="0 0 58 59"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="29"
                  cy="29.5"
                  r="28.5"
                  fill="#F3F3F3"
                  stroke="#191A23"
                />
                <path
                  d="M25.6 41.58V31.86H16V26.22H25.6V16.5H31.48V26.22H41.08V31.86H31.48V41.58H25.6Z"
                  fill="#191A23"
                />
              </svg>
            )}
          </div>
        </AccordionHeader>
        <AccordionBody className={`${open === id ? "block" : "hidden"}`}>
          {txt}
        </AccordionBody>
      </Accordion>
    </>
  );
}
