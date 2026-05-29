"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/data/navigation";

interface DropdownMenuProps {
  item: NavItem;
  isActive?: boolean;
}

export default function DropdownMenu({ item, isActive }: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsOpen(false), 150);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setIsOpen(!isOpen);
    }
    if (e.key === "Escape") {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div
      ref={menuRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={cn(
          "flex items-center gap-1 whitespace-nowrap px-3 py-2 text-sm font-semibold tracking-wide transition-all duration-200 rounded-lg",
          "text-white/90 hover:text-white hover:bg-white/10",
          isActive && "text-white bg-white/10"
        )}
        style={{ textShadow: "0 1px 2px rgba(0,0,0,0.2)" }}
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {item.label}
        <ChevronDown
          className={cn(
            "w-3.5 h-3.5 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>

      {/* Dropdown Panel */}
      <div
        className={cn(
          "absolute top-full left-0 min-w-[220px] rounded-xl mt-2 overflow-hidden",
          "transition-all duration-200 origin-top",
          isOpen
            ? "opacity-100 scale-y-100 pointer-events-auto"
            : "opacity-0 scale-y-95 pointer-events-none"
        )}
        style={{
          background: "linear-gradient(180deg, #4a7a0d 0%, #3d6a0a 100%)",
          boxShadow: "0 20px 40px rgba(0,0,0,0.3), 0 4px 10px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.12)",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
        role="menu"
      >
        <div className="py-2">
          {item.children?.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className={cn(
                "block px-6 py-3 text-sm text-white/75 transition-all duration-200",
                "hover:text-white hover:bg-white/10 hover:pl-7"
              )}
              role="menuitem"
              onClick={() => setIsOpen(false)}
            >
              {child.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
