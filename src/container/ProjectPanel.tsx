import ProjectItem from "@/components/ProjectItem";
import { projects } from "@/constant/projects";

// 모바일 사이즈일 때 프로젝트 아이템 UI 변경하고, 데스크탑에서도 Carousel 형식으로 보여줄 수 있도록 해야함
export default function ProjectPanel() {
  return (
    <div className="flex flex-wrap gap-y-48 gap-x-32 justify-center mb-24">
      {projects.map((project, index) => (
        <ProjectItem key={index} project={project} index={index} />
      ))}
    </div>
  );
}
