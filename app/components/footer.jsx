// @flow strict
import { personalData } from "@/utils/data/personal-data";
import Link from "next/link";
import { BiLogoLinkedin } from "react-icons/bi";
import { IoLogoGithub } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";

function Footer() {
  const year = new Date().getFullYear();
  const siteMap = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Awards", href: "#awards" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-[#1d2444] bg-[#090f1f] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(236,72,153,0.12),transparent_24%),radial-gradient(circle_at_top_right,rgba(34,211,238,0.08),transparent_24%)]"></div>
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent opacity-80"></div>

      <div className="relative mx-auto px-6 py-10 sm:px-12 lg:max-w-[70rem] lg:py-12 xl:max-w-[76rem] 2xl:max-w-[92rem]">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.75fr_0.75fr] lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-pink-200/80">
              Amir Andaliby
            </p>
            <h3 className="mt-4 max-w-2xl text-2xl font-semibold leading-tight text-white md:text-3xl">
              Technology leadership grounded in architecture, education, and community impact.
            </h3>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
              Building resilient systems, mentoring future engineers, and supporting technical communities through thoughtful leadership and collaboration.
            </p>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-slate-400">
              Site Map
            </p>
            <div className="mt-4 flex flex-col gap-3">
              {siteMap.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-slate-300 transition-colors duration-300 hover:text-[#16f2b3]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:justify-self-end">
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href={`mailto:${personalData.email}`}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-200 transition-all duration-300 hover:border-[#16f2b3]/40 hover:bg-[#16f2b3]/10 hover:text-white"
              >
                <MdAlternateEmail size={18} />
                <span>{personalData.email}</span>
              </Link>
              <Link
                target="_blank"
                href={personalData.github}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-200 transition-all duration-300 hover:border-[#16f2b3]/40 hover:bg-[#16f2b3]/10 hover:text-white"
              >
                <IoLogoGithub size={20} />
              </Link>
              <Link
                target="_blank"
                href={personalData.linkedIn}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-200 transition-all duration-300 hover:border-[#16f2b3]/40 hover:bg-[#16f2b3]/10 hover:text-white"
              >
                <BiLogoLinkedin size={20} />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/8 pt-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© {year} Amir Andaliby. All rights reserved.</p>
          <p>Designed for software architecture, education, and leadership.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
