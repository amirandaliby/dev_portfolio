"use client";
import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";

function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10"
      />

      <div className="grid grid-cols-1 items-start gap-y-8 lg:grid-cols-2 lg:gap-12">
        <div className="order-2 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:order-1 lg:pt-10">
          <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
            Hello, <br />
            I&apos;m{" "}
            <span className="text-pink-500">{personalData.name}</span>
            {`, a detail-driven `}
            <span className="text-sky-300">Software Architect</span>
            {` with a focus on `}
            <span className="text-[#16f2b3]">full-stack development</span>
            {` and `}
            <span className="text-yellow-300">DevOps</span>
            {`, building `}
            <span className="text-white">scalable solutions</span>
            .
          </h1>

          <div className="my-12 flex items-center gap-5">
            <Link
              href={personalData.github}
              target="_blank"
              className="text-pink-500 transition-all duration-300 hover:scale-125"
            >
              <BsGithub size={30} />
            </Link>
            <Link
              href={personalData.linkedIn}
              target="_blank"
              className="text-pink-500 transition-all duration-300 hover:scale-125"
            >
              <BsLinkedin size={30} />
            </Link>
            <Link
              href="https://amirandaliby.netlify.app/"
              target="_blank"
              className="text-pink-500 transition-all duration-300 hover:scale-125"
            >
              <TbWorld size={30} />
            </Link>
            <Link
              href="#contact"
              className="text-pink-500 transition-all duration-300 hover:scale-125"
            >
              <RiContactsFill size={30} />
            </Link>
            <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-white transition-all duration-300 hover:gap-3">
              <span>Get Resume</span>
              <MdDownload size={16} />
            </span>
          </div>
        </div>

        <div className="relative order-1 overflow-hidden rounded-[1.8rem] border border-[#1b2c68a0] bg-[linear-gradient(180deg,rgba(13,18,36,0.96),rgba(10,13,55,0.92))] shadow-[0_16px_48px_rgba(0,0,0,0.24)] lg:order-2">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.12),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(34,211,238,0.10),transparent_24%)] opacity-80"></div>
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent opacity-80"></div>

          <div className="relative overflow-hidden px-4 py-4 lg:px-8 lg:py-5">
            <code className="font-mono text-xs md:text-sm lg:text-base">
              <div className="blink">
                <span className="mr-2 text-pink-500">const</span>
                <span className="mr-2 text-white">coder</span>
                <span className="mr-2 text-pink-500">=</span>
                <span className="text-gray-400">{"{"}</span>
              </div>
              <div>
                <span className="ml-4 mr-2 text-white lg:ml-8">name:</span>
                <span className="text-gray-400">{`'`}</span>
                <span className="text-amber-300">Amir Andaliby</span>
                <span className="text-gray-400">{`',`}</span>
              </div>
              <div className="ml-4 mr-2 lg:ml-8">
                <span className="text-white">skills:</span>
                <span className="text-gray-400">{`['`}</span>
                <span className="text-amber-300">Software Architecture</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">DevOps</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Automation</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Infrastructure</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Cloud Platforms</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">CI/CD</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Teaching</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Leadership</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">IEEE Service</span>
                <span className="text-gray-400">{"'],"}</span>
              </div>
              <div>
                <span className="ml-4 mr-2 text-white lg:ml-8">hardWorker:</span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 mr-2 text-white lg:ml-8">quickLearner:</span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 mr-2 text-white lg:ml-8">problemSolver:</span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 mr-2 text-white lg:ml-8">mentor:</span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 mr-2 text-green-400 lg:ml-8">impactDriven:</span>
                <span className="text-orange-400">function</span>
                <span className="text-gray-400">{"() {"}</span>
              </div>
              <div>
                <span className="ml-8 mr-2 text-orange-400 lg:ml-16">return</span>
                <span className="text-gray-400">{`(`}</span>
              </div>
              <div>
                <span className="ml-12 text-cyan-400 lg:ml-24">this.</span>
                <span className="mr-2 text-white">hardWorker</span>
                <span className="text-amber-300">&amp;&amp;</span>
              </div>
              <div>
                <span className="ml-12 text-cyan-400 lg:ml-24">this.</span>
                <span className="mr-2 text-white">problemSolver</span>
                <span className="text-amber-300">&amp;&amp;</span>
              </div>
              <div>
                <span className="ml-12 text-cyan-400 lg:ml-24">this.</span>
                <span className="mr-2 text-white">mentor</span>
                <span className="text-amber-300">&amp;&amp;</span>
              </div>
              <div>
                <span className="ml-12 text-cyan-400 lg:ml-24">this.</span>
                <span className="mr-2 text-white">skills.length</span>
                <span className="mr-2 text-amber-300">&gt;=</span>
                <span className="text-orange-400">5</span>
              </div>
              <div>
                <span className="ml-8 mr-2 text-gray-400 lg:ml-16">{`);`}</span>
              </div>
              <div>
                <span className="ml-4 text-gray-400 lg:ml-8">{`};`}</span>
              </div>
              <div>
                <span className="text-gray-400">{`};`}</span>
              </div>
            </code>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
