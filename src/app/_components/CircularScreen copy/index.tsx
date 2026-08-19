import { IconType } from "@/app/_types/IconType";
import CircularScreenIcon from "./CircularScreenIcon";
import CircularScreenAnimation from "./CircularScreenAnimation";
import { motion } from "framer-motion";
import { CIRCULAR_SELECTOR } from "@/app/_constants/ANIMATION_CLASSNAMES";
type Props = {
   selectedIcon: IconType;
};

export default function CircularScreen({ selectedIcon }: Props) {
   let currentIcon: IconType = selectedIcon;

   return (
      <div
         style={{ transformStyle: "preserve-3d" }}
         className="h-full aspect-square relative"
      >
         <motion.div
            initial={{ scale: 0 }}
            style={{ z: -45 }}
            className={`absolute -inset-15 xl:inset-[-30%] rounded-full border-2 border-accent ${CIRCULAR_SELECTOR}`}
         />
         <motion.div
            initial={{ scale: 0 }}
            style={{ z: -75 }}
            className={`absolute inset-[-60%] rounded-full border-2 border-black ${CIRCULAR_SELECTOR}`}
         />
         <motion.div
            style={{ z: -50 }}
            className="absolute inset-0 rounded-full bg-gray-100 shadow-xl"
         />

         <div
            style={{ transformStyle: "preserve-3d" }}
            className="h-full aspect-square p-4 bg-white rounded-full border border-gray-300"
         >
            <div
               style={{ transformStyle: "preserve-3d" }}
               className="h-full w-full border-16 border-black bg-primary rounded-full"
            >
               <div
                  style={{ transformStyle: "preserve-3d" }}
                  className="w-full h-full rounded-full border border-slate-700 relative"
               >
                  <CircularScreenAnimation selectedIcon={currentIcon}>
                     {Array.from({ length: 5 }).map((_, index) => (
                        <CircularScreenIcon
                           key={index}
                           index={index}
                           selectedIcon={currentIcon}
                        />
                     ))}
                  </CircularScreenAnimation>
               </div>
            </div>
         </div>
      </div>
   );
}
