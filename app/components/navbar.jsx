// @flow strict
"use client";

import { personalData } from "@/utils/data/personal-data";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiArrowUpRight, HiMiniBars3, HiMiniXMark } from "react-icons/hi2";

const navItems = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Education", href: "/#education" },
  { label: "Awards", href: "/#awards" },
  { label: "Contact", href: "/#contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 24) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
        setIsOpen(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-4 z-[100] pt-4 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-[140%]"
      }`}
    >
      <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(12,18,36,0.94),rgba(9,15,31,0.9))] shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(236,72,153,0.10),transparent_22%),radial-gradient(circle_at_top_right,rgba(34,211,238,0.08),transparent_24%)]"></div>
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent opacity-80"></div>

        <div className="relative flex items-center justify-between px-4 py-4 md:px-6">
          <Link href="/" className="min-w-0">
            <div className="min-w-0">
              <p className="truncate text-base font-semibold text-white md:text-lg">
                Amir Andaliby
              </p>
              <p className="truncate text-[11px] uppercase tracking-[0.24em] text-slate-400 md:text-xs">
                Senior Software Architect, Senior IEEE Member, Educator
              </p>
            </div>
          </Link>

          <div className="hidden items-center gap-2 lg:flex">
            <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] px-2 py-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-4 py-2 text-sm text-slate-200 transition-all duration-300 hover:bg-white/[0.06] hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <span className="ml-2 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-5 py-3 text-sm font-medium uppercase tracking-[0.22em] text-white transition-all duration-300 hover:translate-y-[-1px] hover:shadow-[0_14px_32px_rgba(236,72,153,0.22)]">
              <span>Resume</span>
              <HiArrowUpRight size={16} />
            </span>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-white transition-all duration-300 hover:bg-white/[0.08] lg:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <HiMiniXMark size={22} /> : <HiMiniBars3 size={22} />}
          </button>
        </div>

        {isOpen && (
          <div className="relative border-t border-white/8 px-4 pb-4 pt-2 lg:hidden">
            <div className="flex flex-col gap-2 rounded-[1.5rem] bg-white/[0.03] p-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm text-slate-200 transition-all duration-300 hover:bg-white/[0.06] hover:text-white"
                >
                  {item.label}
                </Link>
              ))}

              <span
                onClick={() => setIsOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-pink-500 to-violet-600 px-5 py-3 text-sm font-medium uppercase tracking-[0.22em] text-white"
              >
                <span>Resume</span>
                <HiArrowUpRight size={16} />
              </span>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
