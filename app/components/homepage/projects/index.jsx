import { projectsData } from '@/utils/data/projects-data';
import ProjectCard from './project-card';

const Projects = () => {

  return (
    <div id='projects' className="relative z-50  my-12 lg:my-24">
      <div className="sticky top-10">
        <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl  opacity-30"></div>
        <div className="flex items-center justify-start relative">
          <span className="bg-[#1a1443] absolute left-0  w-fit text-white px-5 py-3 text-xl rounded-md">
            PROJECTS
          </span>
          <span className="w-full h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="pt-24">
        <div className="mb-10 max-w-6xl">
          <p className="text-sm uppercase tracking-[0.32em] text-violet-200/70">
            <span className="text-yellow-300">Systems</span>,{" "}
            <span className="text-sky-300">platforms</span>, and{" "}
            <span className="text-[#16f2b3]">solutions</span>
          </p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
            Selected work across
            <span className="block bg-gradient-to-r from-violet-300 via-white to-pink-300 bg-clip-text text-transparent">
              software delivery,
            </span>
            <span className="block">automation, and applied engineering.</span>
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          {projectsData.slice(0, 4).map((project, index) => (
            <div
              id={`sticky-card-${index + 1}`}
              key={index}
              className="sticky-card w-full mx-auto max-w-2xl sticky"
            >
              <div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-[0.5s]">
                <ProjectCard project={project} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
