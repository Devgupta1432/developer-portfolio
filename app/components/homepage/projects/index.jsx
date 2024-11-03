import { projectsData } from "@/utils/data/projects-data"; // Ensure projectsData includes a behance link for UI/UX projects
import ProjectCard from "./project-card";

const Projects = () => {
  const renderProjectsSection = (title, projects) => (
    <div className="relative z-50 my-12 lg:my-24">
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            {title}
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="flex justify-center">
            <div className="w-full max-w-[450px]">
              <ProjectCard project={project} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const webDevelopmentProjects = projectsData.slice(0, 3); // Assuming the first 4 are web development projects
  const uiUxProjects = projectsData.slice(3, 7); // Assuming the next 4 are UI/UX projects

  return (
    <>
      
      {renderProjectsSection("UI/UX Projects", uiUxProjects)}
      {renderProjectsSection("Web Development Projects", webDevelopmentProjects)}
    </>
  );
};

export default Projects;
