"use client";
import React , { useEffect , useState } from "react";
import { createPortal } from "react-dom";

export default function Portal({ toggle , children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);


  return mounted ?  createPortal(
    <div
      className={`bg-black/10 backdrop-blur-sm ${
        toggle ? "fixed inset-0 opacity-100 z-10" : "opacity-0 -z-10"
      }`}
    >{children}</div>,
    document.getElementById("portal-root")
  ) : null;
}
