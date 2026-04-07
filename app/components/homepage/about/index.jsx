// @flow strict

import { personalData } from "@/utils/data/personal-data";

function AboutSection() {
  const paragraphs = personalData.description.split("\n\n");

  return (
    <section id="about" className="relative my-16 lg:my-28">
      <div className="absolute left-1/2 top-10 h-56 w-56 -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl"></div>
      <div className="absolute right-0 top-24 h-52 w-52 rounded-full bg-pink-500/10 blur-3xl"></div>

      <div className="relative">
        <div className="sticky top-10 z-10 mb-10">
          <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 blur-3xl opacity-20"></div>
          <div className="flex items-center justify-start relative">
            <span className="bg-[#1a1443] absolute left-0 w-fit text-white px-5 py-3 text-xl rounded-md uppercase">
              About Me
            </span>
            <span className="w-full h-[2px] bg-[#1a1443]"></span>
          </div>
        </div>

        <div className="relative grid grid-cols-1 gap-10 pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch lg:gap-12">
          <div className="flex h-full flex-col">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.32em] text-violet-200/80">
                <span className="text-sky-300">Technology leader</span>
                <span> • </span>
                <span className="text-[#16f2b3]">educator</span>
                <span> • </span>
                <span className="text-yellow-300">volunteer</span>
              </p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
                Building systems,
                <span className="block bg-gradient-to-r from-violet-300 via-white to-pink-300 bg-clip-text text-transparent">
                  mentoring people,
                </span>
                <span className="block">and shaping communities.</span>
              </h2>
            </div>

          </div>

          <div>
            <div className="relative h-full">
              <div className="absolute -left-6 top-10 h-32 w-32 rounded-[2rem] border border-violet-400/20 bg-violet-500/10 blur-sm"></div>
              <div className="absolute -right-4 bottom-8 h-36 w-36 rounded-full bg-pink-500/15 blur-2xl"></div>

              <div className="relative h-full overflow-hidden rounded-[1.8rem] border border-[#1b2c68a0] bg-[linear-gradient(180deg,rgba(13,18,36,0.96),rgba(10,13,55,0.92))] p-6 shadow-[0_16px_48px_rgba(0,0,0,0.24)] lg:p-8">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.12),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(34,211,238,0.10),transparent_24%)] opacity-80"></div>
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent opacity-80"></div>

                <div className="relative space-y-4 text-sm leading-7 text-slate-300 md:text-base">
                  {paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
