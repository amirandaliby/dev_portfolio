// @flow strict
import { personalData } from "@/utils/data/personal-data";
import Link from "next/link";
import { BiLogoLinkedin } from "react-icons/bi";
import { IoLogoGithub } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { HiArrowUpRight } from "react-icons/hi2";

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
    <footer className="relative overflow-hidden border-t border-[#18214a] bg-[linear-gradient(180deg,#090f1f_0%,#070b16_100%)] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(236,72,153,0.16),transparent_26%),radial-gradient(circle_at_top_right,rgba(34,211,238,0.10),transparent_24%),radial-gradient(circle_at_bottom_center,rgba(109,40,217,0.12),transparent_28%)]"></div>
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent opacity-80"></div>

      <div className="relative mx-auto px-6 py-12 sm:px-12 lg:max-w-[72rem] xl:max-w-[80rem] 2xl:max-w-[92rem]">
        <div className="grid gap-10 lg:grid-cols-[1.35fr_0.8fr_0.9fr] lg:gap-12">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-pink-200/80">
              Amir Andaliby
            </p>
            <h3 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight text-white md:text-4xl">
              Engineering leadership,
              <span className="block bg-gradient-to-r from-violet-300 via-white to-pink-300 bg-clip-text text-transparent">
                education, and impact
              </span>
              <span className="block">across systems and communities.</span>
            </h3>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
              Building resilient platforms, mentoring future engineers, and advancing meaningful collaboration across industry, academia, and IEEE.
            </p>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-slate-400">
              Navigation
            </p>
            <div className="mt-5 grid grid-cols-1 gap-3">
              {siteMap.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="w-fit text-sm text-slate-300 transition-colors duration-300 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:justify-self-end">
            <p className="text-sm uppercase tracking-[0.28em] text-slate-400">
              Connect
            </p>
            <div className="mt-5 space-y-4">
              <Link
                href={`mailto:${personalData.email}`}
                className="flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-slate-200 transition-all duration-300 hover:border-pink-400/30 hover:bg-pink-500/10 hover:text-white"
              >
                <MdAlternateEmail size={18} />
                <span>{personalData.email}</span>
              </Link>
              <Link
                href="mailto:andalia@algonquincollege.com"
                className="flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-slate-200 transition-all duration-300 hover:border-pink-400/30 hover:bg-pink-500/10 hover:text-white"
              >
                <MdAlternateEmail size={18} />
                <span>andalia@algonquincollege.com</span>
              </Link>

              <div className="flex items-center gap-3">
                <Link
                  target="_blank"
                  href={personalData.github}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-200 transition-all duration-300 hover:border-pink-400/30 hover:bg-pink-500/10 hover:text-white"
                >
                  <IoLogoGithub size={20} />
                </Link>
                <Link
                  target="_blank"
                  href={personalData.linkedIn}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-200 transition-all duration-300 hover:border-pink-400/30 hover:bg-pink-500/10 hover:text-white"
                >
                  <BiLogoLinkedin size={20} />
                </Link>
                <Link
                  target="_blank"
                  href="https://amirandaliby.netlify.app/"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-200 transition-all duration-300 hover:border-pink-400/30 hover:bg-pink-500/10 hover:text-white"
                >
                  <TbWorld size={20} />
                </Link>
              </div>

              <Link
                target="_blank"
                href={personalData.resume}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-5 py-3 text-sm font-medium uppercase tracking-[0.22em] text-white transition-all duration-300 hover:translate-y-[-1px] hover:shadow-[0_14px_32px_rgba(236,72,153,0.22)]"
              >
                <span>Resume</span>
                <HiArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/8 pt-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© {year} Amir Andaliby</p>
          <p>Senior Software Architect | Senior IEEE Member | Educator</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
