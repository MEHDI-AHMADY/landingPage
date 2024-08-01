"use client";
import React , { useEffect , useState } from "react";
import { createPortal } from "react-dom";

export default function Portal({ toggle , children }) {
  const [mounted, setMounted] = useState(false);
  const [show ,setShow] = useState(toggle);

  useEffect(() => {
    if(toggle) {
      setShow(true);
    }else {
      setTimeout(() => setShow(false), 500);
    }
  }, [toggle]);

  useEffect(() => {
    if(show){
      setMounted(true)
    }else {
      setMounted(false)
    }
  } , [show])


  return mounted ?  createPortal(
    <div
      className={`fixed inset-0 bg-black/10 backdrop-blur-sm ${
        show ? "opacity-100 z-10" : "opacity-0 -z-10"
      }`}
    >{children}</div>,
    document.getElementById("portal-root")
  ) : null;
}
