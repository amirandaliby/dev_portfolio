'use client';

import { educations } from "@/utils/data/educations";
import Image from "next/image";

function Education() {
  return (
    <section id="education" className="relative z-50 my-12 lg:my-24">
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10 opacity-70"
      />

      <div className="sticky top-10 z-10">
        <div className="absolute -top-3 left-0 h-[80px] w-[80px] translate-x-1/2 rounded-full bg-violet-100 opacity-20 blur-3xl"></div>
        <div className="relative flex items-center justify-start">
          <span className="absolute left-0 w-fit rounded-md bg-[#1a1443] px-5 py-3 text-xl text-white">
            EDUCATION
          </span>
          <span className="h-[2px] w-full bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="pt-24">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.25fr] lg:gap-14">
          <div className="relative overflow-hidden rounded-[2rem] border border-[#1b2c68a0] bg-[linear-gradient(180deg,rgba(13,18,36,0.96),rgba(10,13,55,0.92))] p-7 shadow-[0_20px_60px_rgba(0,0,0,0.28)] lg:p-9">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(236,72,153,0.12),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.10),transparent_24%)]"></div>
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent opacity-80"></div>

            <div className="relative">
              <p className="text-sm uppercase tracking-[0.32em] text-pink-200/80">
                Academic Foundation
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-white md:text-4xl">
                The academic journey behind my work in systems, networking, and technology leadership.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">
                My education spans artificial intelligence, communications, signal processing, and electronics engineering, forming the technical base behind my work across software architecture, infrastructure, and teaching.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-3">
                <div className="rounded-2xl bg-white/[0.04] px-4 py-4">
                  <p className="text-2xl font-semibold text-white">3</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.22em] text-slate-400">
                    Degrees
                  </p>
                </div>
                <div className="rounded-2xl bg-white/[0.04] px-4 py-4">
                  <p className="text-2xl font-semibold text-white">2</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.22em] text-slate-400">
                    Masters
                  </p>
                </div>
                <div className="rounded-2xl bg-white/[0.04] px-4 py-4">
                  <p className="text-2xl font-semibold text-white">AI</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.22em] text-slate-400">
                    Research Focus
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-pink-500/70 via-violet-400/40 to-transparent md:block"></div>
            <div className="flex flex-col gap-6">
              {educations.map((education) => (
                <article
                  key={education.id}
                  className="group relative overflow-hidden rounded-[1.8rem] border border-[#1b2c68a0] bg-[linear-gradient(180deg,rgba(13,18,36,0.96),rgba(10,13,55,0.92))] p-6 shadow-[0_16px_48px_rgba(0,0,0,0.24)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(0,0,0,0.34)] md:ml-14 md:p-7"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.12),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(34,211,238,0.10),transparent_24%)] opacity-80"></div>
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent opacity-80"></div>
                  <div className="absolute left-5 top-10 hidden h-4 w-4 -translate-x-[3.55rem] rounded-full border border-pink-300/30 bg-[#0d1224] shadow-[0_0_18px_rgba(236,72,153,0.25)] md:block"></div>
                  <div className="absolute left-5 top-[2.85rem] hidden h-4 w-4 -translate-x-[3.55rem] rounded-full bg-gradient-to-r from-pink-400 to-violet-400 md:block"></div>

                  <div className="relative">
                    <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                      <div className="min-w-0 flex-1">
                        <p className="text-xs uppercase tracking-[0.28em] text-pink-200">
                          {education.title}
                        </p>
                        <h3 className="mt-3 text-2xl font-semibold leading-tight text-white md:text-[1.85rem]">
                          {education.degree}
                        </h3>
                        <p className="mt-3 text-base text-violet-200 md:text-lg">
                          <span>{education.institution}</span>
                          {education.location && (
                            <>
                              <span className="mx-2 text-slate-500">&bull;</span>
                              <span className="whitespace-nowrap text-sm uppercase tracking-[0.22em] text-slate-400">
                                {education.location}
                              </span>
                            </>
                          )}
                        </p>
                      </div>

                      <div className="shrink-0 rounded-full border border-pink-400/20 bg-pink-500/10 px-4 py-2 text-xs uppercase tracking-[0.24em] text-pink-200">
                        {education.duration}
                      </div>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                      <span className="rounded-full border border-[#2f3c7c] bg-[#11152e] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-[#16f2b3]">
                        {education.focus}
                      </span>
                    </div>

                    <p className="mt-6 max-w-3xl text-sm leading-7 text-slate-300 md:text-base">
                      {education.emphasis}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
