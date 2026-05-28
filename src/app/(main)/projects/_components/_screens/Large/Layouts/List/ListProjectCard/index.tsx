import ProjectType from "@/types/ProjectType";
import ListUnderline from "../ListUnderline";
import ListText from "../ListText";
import { useState } from "react";
import Link from "next/link";

type Props = {
   project: ProjectType;
   onHover: () => void;
   onClick: () => void;
};

export default function ListProjectCard({ project, onHover, onClick }: Props) {
   const [restart, setRestart] = useState(false);
   const onHoverStart = () => {
      onHover();
      setRestart((prev) => !prev);
   };

   return (
      <Link
         href={`/projects/${project.link}`}
         onClick={onClick}
         onPointerEnter={onHoverStart}
         className="w-full cursor-pointer h-32 px-24 flex items-center relative text-text hover:bg-text active:bg-text hover:text-black active:text-black"
      >
         <ListText flex={3} restart={restart} text={project.title} title />
         <ListText restart={restart} text="Front-End" />
         <ListText restart={restart} text="Next.js" />
         <ListUnderline />
      </Link>
   );
}
