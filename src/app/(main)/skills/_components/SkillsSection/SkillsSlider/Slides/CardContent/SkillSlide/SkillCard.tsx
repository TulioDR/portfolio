import Image from "next/image";
import { motion } from "framer-motion";
import { SkillType } from "@/app/skills/_types/SkillType";
import useTextRestart from "@/hooks/useTextRestart";
import AnimatedText from "@/components/AnimatedText";
import { useState } from "react";

type Props = {
   skill: SkillType;
};

export default function SkillCard({ skill }: Props) {
   const { logo, name, link } = skill;
   const onClick = () => {
      console.log(link);
   };

   const { restart, handleRestart } = useTextRestart();
   const [isHovered, setIsHovered] = useState(false);

   const startHover = () => {
      handleRestart();
      setIsHovered(true);
   };

   const stopHover = () => {
      setIsHovered(false);
   };

   return (
      <div
         onPointerEnter={startHover}
         onPointerLeave={stopHover}
         onClick={onClick}
         className="aspect-square lg:aspect-auto lg:h-full w-full relative"
      >
         <div className="h-full w-full border-gray-400 border rounded-md" />
         <motion.div
            animate={{ x: isHovered ? 8 : 0, y: isHovered ? -8 : 0 }}
            className="absolute inset-0 bg-white rounded-md gap-2 flex flex-col py-2 items-center justify-center cursor-pointer shadow-lg"
         >
            <div className="flex-1 relative w-2/5 flex items-center">
               <Image src={logo} alt={name} />
            </div>
            <AnimatedText
               className={`text-center text-black text-xs sm:text-sm`}
               restart={restart}
               text={name}
            />
         </motion.div>
      </div>
   );
}
