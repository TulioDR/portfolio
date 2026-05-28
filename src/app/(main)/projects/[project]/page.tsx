import PROJECTS from "@/data/projects";
import ProjectDetailsPageContent from "./_components/ProjectDetailsPageContent";

type Props = {};

export default function ProjectPage({}: Props) {
   const project = PROJECTS[0];

   return <ProjectDetailsPageContent project={project} background />;
}
