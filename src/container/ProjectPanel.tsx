import ProjectItem from "@/components/ProjectItem";
import { projects } from "@/constant/projects";

export default function ProjectPanel() {
  return (
    <div className="flex flex-wrap gap-y-48 gap-x-32 justify-center mb-24">
      {projects.map((project, index) => (
        <ProjectItem key={index} project={project} index={index} />
      ))}
    </div>
  );
}
