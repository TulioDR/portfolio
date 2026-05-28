"use client";

import PROJECTS from "@/data/projects";
import { use } from "react";
import ProjectDetailsPageContent from "@/app/(main)/projects/[project]/_components/ProjectDetailsPageContent";

// 1. Define the TypeScript types for your props and params
type Props = {
   params: Promise<{
      project: string; // This matches your folder name [project] exactly
   }>;
};
export default function InterceptorPage({ params }: Props) {
   const resolvedParams = use(params);
   const projectSlug = resolvedParams.project;
   const project = PROJECTS.find((p) => p.link === projectSlug);

   return <ProjectDetailsPageContent project={project} />;
}
