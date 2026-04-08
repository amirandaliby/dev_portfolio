import { awards } from "@/utils/data/awards";
import Image from "next/image";

function AwardsSection() {
  return (
    <section id="awards" className="relative z-50 my-12 lg:my-24">
      <Image
        src="/section.svg"
        alt="Awards background"
        width={1572}
        height={795}
        className="absolute top-0 -z-10 opacity-70"
      />

      <div className="sticky top-10 z-10">
        <div className="absolute -top-3 left-0 h-[80px] w-[80px] translate-x-1/2 rounded-full bg-violet-100 opacity-20 blur-3xl"></div>
        <div className="relative flex items-center justify-start">
          <span className="absolute left-0 w-fit rounded-md bg-[#1a1443] px-5 py-3 text-xl text-white">
            AWARDS
          </span>
          <span className="h-[2px] w-full bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="pt-24">
        <div className="mb-10 max-w-6xl">
          <p className="text-sm uppercase tracking-[0.3em] text-violet-200/70">
            <span className="text-yellow-300">Recognition</span>,{" "}
            <span className="text-[#16f2b3]">service</span>, and{" "}
            <span className="text-sky-300">professional distinction</span>
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
            Honors and awards across{" "}
            <span className="bg-gradient-to-r from-violet-300 via-white to-pink-300 bg-clip-text text-transparent">
              engineering leadership,
            </span>
            <span className="block">education, and volunteer service.</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {awards.map((award) => (
            <article
              key={award.id}
              className="relative overflow-hidden rounded-[1.75rem] border border-[#1b2c68a0] bg-[linear-gradient(180deg,rgba(13,18,36,0.96),rgba(10,13,55,0.92))] shadow-[0_16px_48px_rgba(0,0,0,0.24)]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.10),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(34,211,238,0.08),transparent_24%)] opacity-80"></div>
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent opacity-80"></div>

              <div className="relative px-5 py-5 lg:px-8 lg:py-7">
                <div className="mb-6">
                  <span className="inline-flex rounded-full border border-pink-400/20 bg-pink-500/10 px-4 py-2 text-xs uppercase tracking-[0.24em] text-pink-200">
                    {award.date}
                  </span>
                </div>

                <div className="min-w-0">
                  <h3 className="text-2xl font-semibold leading-tight text-white md:text-3xl">
                    {award.title}
                  </h3>
                  <p className="mt-2 text-base text-violet-200 md:text-lg">
                    {award.organization}
                  </p>
                </div>

                <p className="mt-6 text-sm leading-7 text-slate-300 md:text-base">
                  {award.summary}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AwardsSection;
