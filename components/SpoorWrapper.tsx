"use client";

import { useEffect } from "react";

export default function SpoorWrapper({ spoor }: { spoor: string }) {
  useEffect(() => {
    if (spoor) {
      document.documentElement.setAttribute("data-spoor", spoor);
    } else {
      document.documentElement.removeAttribute("data-spoor");
    }
    
    return () => {
      document.documentElement.removeAttribute("data-spoor");
    };
  }, [spoor]);

  return null;
}
