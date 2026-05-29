"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import TopBar from "./TopBar";
import Navbar from "./Navbar";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled && "shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
      )}
    >
      <TopBar />
      <Navbar />
    </header>
  );
}
