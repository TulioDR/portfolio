import useLanguageContext from "@/context/LanguageContext";
import ProjectType from "@/types/ProjectType";
import {
   MotionValue,
   useMotionValue,
   useMotionValueEvent,
   motion,
   useMotionTemplate,
   useTransform,
} from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

type Props = {
   tile1?: true;
   tile2?: true;
   tile3?: true;
   smoothWandX: MotionValue;
   project: ProjectType;
};

export default function Card({
   tile1,
   tile2,
   tile3,
   smoothWandX,
   project,
}: Props) {
   const percentage = useMotionValue(0);

   const cardRef = useRef<HTMLDivElement>(null);
   useMotionValueEvent(smoothWandX, "change", (current) => {
      if (!cardRef.current) return;
      const { width } = cardRef.current.getBoundingClientRect();
      const left = cardRef.current!.offsetLeft;
      const relativeWandX = current - left;
      const relativeWandXPercentage = relativeWandX / width;
      percentage.set(relativeWandXPercentage);
   });

   const opacity = useTransform(percentage, [0, 0.8], [0, 1]);
   const blur = useTransform(percentage, [0, 0.8], [10, 0]);
   const filter = useMotionTemplate`blur(${blur}px)`;

   const { language } = useLanguageContext();

   const { message1, message2, message3, smallMessage1 } =
      language.skills.strengths.strengthScreens.wandReveal;

   return (
      <motion.div
         ref={cardRef}
         className={`flex-1 relative aspect-square rounded-3xl overflow-hidden bg-[#353338] 
            ${tile1 ? "rotate-2 top-0 z-2 " : ""}
            ${tile2 ? "-rotate-2 top-4 -ml-5 z-1 hidden lg:block" : ""}
            ${tile3 ? "rotate-[5deg] top-2 -ml-5 hidden lg:block" : ""}
         `}
      >
         <div className="w-full h-full flex items-center justify-center relative">
            {tile1 && (
               <span className="text-gray-500 text-base w-min text-center font-bold lg:hidden">
                  {smallMessage1}
               </span>
            )}
            <span className="text-gray-500 text-2xl font-bold hidden lg:block">
               {tile1 ? message1 : ""}
               {tile2 ? message2 : ""}
               {tile3 ? message3 : ""}
            </span>
            <motion.div
               style={{ opacity, filter }}
               className="absolute top-0 left-0 w-full h-full z-10"
            >
               <Image
                  priority
                  alt={project.title}
                  src={project.showcaseImg}
                  fill
                  sizes="100%"
                  className="object-cover"
               />
            </motion.div>
            <div
               style={{
                  boxShadow:
                     "0 20px 25px rgba(0,0,0,.5), inset 0 2px 2px #525154",
               }}
               className="z-20 w-full h-full absolute top-0 left-0 rounded-3xl"
            />
         </div>
      </motion.div>
   );
}
