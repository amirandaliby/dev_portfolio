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
        <div className="mb-10 max-w-7xl">
          <p className="text-sm uppercase tracking-[0.3em] text-violet-200/70">
            <span className="text-yellow-300">Research</span>,{" "}
            <span className="text-[#16f2b3]">engineering</span>, and{" "}
            <span className="text-sky-300">academic foundations</span>
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
            Education that shaped my{" "}
            <span className="bg-gradient-to-r from-violet-300 via-white to-pink-300 bg-clip-text text-transparent">
              technical depth,
            </span>
            <span className="block">systems thinking, and teaching practice.</span>
          </h2>
        </div>

        <div className="relative mx-auto max-w-6xl">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-pink-500/70 via-violet-400/30 to-transparent md:block"></div>

          <div className="flex flex-col gap-5 md:gap-6">
            {educations.map((education, index) => (
              <article
                key={education.id}
                className="experience-card relative md:grid md:grid-cols-2 md:gap-10"
                style={{ "--card-index": index + 1 }}
              >
                <div className="absolute left-1/2 top-8 hidden h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border border-pink-400/25 bg-[#0d1224] shadow-[0_0_30px_rgba(236,72,153,0.18)] md:flex">
                  <div className="absolute inset-1 rounded-full border border-white/10 bg-gradient-to-br from-[#1a1443] to-[#0d1224]"></div>
                  <div className="absolute h-5 w-5 rounded-full bg-gradient-to-r from-pink-400 via-violet-400 to-cyan-300 shadow-[0_0_16px_rgba(236,72,153,0.45)]"></div>
                  <div className="absolute h-8 w-8 rounded-full border border-pink-300/20"></div>
                </div>

                <div
                  className={`relative ${
                    index % 2 === 0 ? "md:col-start-1" : "md:col-start-2"
                  }`}
                >
                  <div
                    className={`absolute top-11 hidden h-px w-10 bg-gradient-to-r md:block ${
                      index % 2 === 0
                        ? "right-[-2.5rem] from-pink-500/70 to-transparent"
                        : "left-[-2.5rem] from-transparent to-pink-500/70"
                    }`}
                  ></div>

                  <div className="experience-card-panel relative overflow-hidden rounded-[1.75rem] border border-[#1b2c68a0] bg-gradient-to-r from-[#0d1224] to-[#0a0d37] shadow-[0_0_30px_0_rgba(0,0,0,0.28)]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.10),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(236,72,153,0.10),transparent_24%)]"></div>
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent opacity-80"></div>

                    <div className="relative px-5 py-5 lg:px-8 lg:py-7">
                      <div className="mb-6">
                        <span className="inline-flex rounded-full border border-pink-400/20 bg-pink-500/10 px-4 py-2 text-xs uppercase tracking-[0.24em] text-pink-200">
                          {education.duration}
                        </span>
                      </div>

                      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                        <div className="min-w-0 flex-1">
                          <p className="text-xs uppercase tracking-[0.28em] text-pink-200">
                            {education.title}
                          </p>
                          <h3 className="mt-3 text-2xl font-semibold leading-tight text-white md:text-3xl">
                            {education.degree}
                          </h3>
                          <p className="mt-2 text-base text-violet-200 md:text-lg">
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
                      </div>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {(education.tags || [education.focus]).map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-[#2f3c7c] bg-[#11152e] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-[#16f2b3]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
