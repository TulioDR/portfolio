import CardFrontImg from "./CardFrontImg";
import CardTitle from "./CardTitle";
import MobileBackImg from "./CardBackImg/MobileBackImg";
import DesktopBackImg from "./CardBackImg/DesktopBackImg";
import Link from "next/link";
import ProjectType from "@/types/ProjectType";

type Props = {
   adapt?: true;
   backOnly?: true;
   project: ProjectType;
};

export default function ProjectCard({ adapt, backOnly, project }: Props) {
   const isMobile = false;

   return (
      <Link
         href={`/projects/${project.link}`}
         scroll={false}
         className={`h-full relative ${
            adapt ? "w-full pointer-events-none" : "aspect-square"
         }`}
      >
         {isMobile ? (
            <MobileBackImg project={project} />
         ) : (
            <DesktopBackImg project={project} />
         )}
         {!backOnly && (
            <>
               <CardFrontImg project={project} />
               <CardTitle title={project.title} />
            </>
         )}
      </Link>
   );
}
