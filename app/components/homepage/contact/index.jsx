// @flow strict
import { personalData } from '@/utils/data/personal-data';
import Link from 'next/link';
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { IoLogoGithub } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import ContactForm from './contact-form';

function ContactSection() {
  return (
    <section id="contact" className="relative z-50 my-12 mt-24 text-white lg:my-24">
      <div className="sticky top-10 z-10">
        <div className="absolute -top-3 left-0 h-[80px] w-[80px] translate-x-1/2 rounded-full bg-violet-100 opacity-20 blur-3xl"></div>
        <div className="relative flex items-center justify-start">
          <span className="absolute left-0 w-fit rounded-md bg-[#1a1443] px-5 py-3 text-xl text-white">
            CONTACT
          </span>
          <span className="h-[2px] w-full bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="pt-24">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.15fr] lg:gap-14">
          <div className="relative overflow-hidden rounded-[2rem] border border-[#1b2c68a0] bg-[linear-gradient(180deg,rgba(13,18,36,0.96),rgba(10,13,55,0.92))] p-7 shadow-[0_20px_60px_rgba(0,0,0,0.28)] lg:p-9">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(236,72,153,0.12),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.10),transparent_24%)]"></div>
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent opacity-80"></div>

            <div className="relative">
              <p className="text-sm uppercase tracking-[0.32em] text-pink-200/80">
                Reach Out
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-white md:text-4xl">
                Open to meaningful conversations across technology, education, and community leadership.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">
                Whether you&apos;re reaching out about software architecture, DevOps, teaching, speaking, IEEE initiatives, or collaborative projects, I&apos;d be glad to connect.
              </p>

              <div className="mt-8 space-y-4">
                <div className="rounded-[1.4rem] bg-white/[0.04] px-5 py-4">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-pink-500/12 text-pink-200">
                      <MdAlternateEmail size={22} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Email</p>
                      <p className="mt-2 text-base text-white break-all">{personalData.email}</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-[1.4rem] bg-white/[0.04] px-5 py-4">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cyan-400/12 text-cyan-200">
                      <CiLocationOn size={24} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Location</p>
                      <p className="mt-2 text-base text-white">{personalData.address}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <Link
                  target="_blank"
                  href={personalData.github}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-200 transition-all duration-300 hover:border-[#16f2b3]/40 hover:bg-[#16f2b3]/10 hover:text-white"
                >
                  <IoLogoGithub size={22} />
                </Link>
                <Link
                  target="_blank"
                  href={personalData.linkedIn}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-200 transition-all duration-300 hover:border-[#16f2b3]/40 hover:bg-[#16f2b3]/10 hover:text-white"
                >
                  <BiLogoLinkedin size={22} />
                </Link>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
