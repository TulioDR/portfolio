import ProjectType from "@/types/ProjectType";
import ListUnderline from "../ListUnderline";
import ListText from "../ListText";
import { useState } from "react";
import { motion } from "framer-motion";

type Props = {
   project: ProjectType;
};

export default function ListProjectCard({ project }: Props) {
   const [restart, setRestart] = useState(false);
   const onHoverStart = () => setRestart((prev) => !prev);

   const handleClick = () => {};

   return (
      <motion.button
         onHoverStart={onHoverStart}
         onClick={handleClick}
         className="w-full cursor-pointer h-32 px-32 flex items-center relative text-text hover:bg-text active:bg-text hover:text-black active:text-black"
      >
         <ListText flex={3} restart={restart} text={project.title} title />
         <ListText restart={restart} text="Front-End" />
         <ListText restart={restart} text="Next.js" />
         <ListUnderline />
      </motion.button>
   );
}
