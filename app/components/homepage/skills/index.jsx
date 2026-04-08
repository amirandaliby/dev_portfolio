// @flow strict

import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";

function Skills() {
  const rows = [0, 1, 2].map((rowIndex) =>
    skillsData.filter((_, index) => index % 3 === rowIndex)
  );

  return (
    <div id="skills" className="relative z-50 my-12 lg:my-24">
      <div className="absolute left-[20%] top-10 h-28 w-28 rounded-full bg-cyan-300/10 blur-3xl"></div>
      <div className="absolute right-[12%] top-24 h-32 w-32 rounded-full bg-fuchsia-400/10 blur-3xl"></div>

      <div className="sticky top-10 z-10">
        <div className="flex items-center justify-start relative">
          <span className="bg-[#1a1443] absolute left-0 w-fit text-white px-5 py-3 text-xl rounded-md">
            SKILLS
          </span>
          <span className="w-full h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="pt-24">
        <div className="mb-8 max-w-6xl">
          <p className="text-sm uppercase tracking-[0.32em] text-cyan-300/80">
            <span className="text-yellow-300">Platforms</span>,{" "}
            <span className="text-sky-300">technologies</span>, and{" "}
            <span className="text-[#16f2b3]">workflows</span>
          </p>
          <h2 className="mt-4 text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
            My toolkit for{" "}
            <span className="bg-gradient-to-r from-violet-300 via-white to-pink-300 bg-clip-text text-transparent">
              building, shipping, and scaling.
            </span>
          </h2>
        </div>

      <div className="w-full space-y-3 overflow-hidden">
        {rows.map((rowSkills, rowIndex) => (
          <div key={rowIndex} className="skills-marquee-row">
            <div
              className={`skills-marquee-track ${
                rowIndex === 1 ? "skills-marquee-track-reverse" : ""
              }`}
            >
              {[...rowSkills, ...rowSkills].map((skill, id) => (
                <div
                  className="group relative m-3 flex h-fit w-40 min-w-fit cursor-pointer flex-col items-center justify-center rounded-2xl transition-all duration-500 hover:-translate-y-1 hover:scale-[1.04] sm:m-4"
                  key={`${rowIndex}-${id}-${skill}`}
                >
                  <div className="h-full w-full overflow-hidden rounded-[1.35rem] bg-[linear-gradient(160deg,rgba(11,18,34,0.96),rgba(15,23,42,0.92))] shadow-[0_18px_40px_rgba(0,0,0,0.22)] transition-all duration-500 group-hover:shadow-[0_24px_55px_rgba(0,0,0,0.32)]">
                    <div className="flex flex-row">
                      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-300/80 to-fuchsia-400/80"></div>
                      <div className="h-[1px] w-full bg-gradient-to-r from-fuchsia-400/80 to-transparent"></div>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-4 px-6 py-7">
                      <div className="flex h-14 w-14 items-center justify-center">
                        {skillsImage(skill)?.src ? (
                          <Image
                            src={skillsImage(skill).src}
                            alt={skill}
                            width={34}
                            height={34}
                            className="h-[34px] w-auto"
                          />
                        ) : null}
                      </div>
                      <p className="text-center text-sm uppercase tracking-[0.08em] text-white sm:text-base">
                        {skill}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Skills;
