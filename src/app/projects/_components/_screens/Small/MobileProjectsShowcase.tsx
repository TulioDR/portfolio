import projects from "@/assets/projects";
import React from "react";
import ProjectCard from "../ProjectCard";

type Props = {};

export default function MobileProjectsShowcase({}: Props) {
   return (
      <div className="w-full grid sm:grid-cols-2 gap-4 px-4">
         {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
         ))}
      </div>
   );
}
