import { IconType } from "@/app/_types/IconType";
import { motion } from "framer-motion";

type Props = {
   index: number;
   selectedIcon: IconType;
};

export default function CircularScreenIcon({ index, selectedIcon }: Props) {
   const total = 5;
   const isTop = index === total - 1;
   // 1. Scale Jump: Lower starting point (0.3) for a more dramatic growth
   // Index 0: 0.3 | Index 4: 1.0
   const scaleValue = 0.3 + (index / (total - 1)) * 0.9;
   // 2. Opacity: Fades out as it goes deeper
   // Index 0: 0.2 | Index 4: 1.0
   const opacityValue = 0.2 + (index / (total - 1)) * 0.8;
   // 3. TranslateZ: Positive values moving toward the screen
   const zValue = index * 15;

   return (
      <motion.div
         key={index}
         style={{
            transform: `translateZ(${zValue}px) scale(${scaleValue})`,
            opacity: opacityValue,
            zIndex: index,
         }}
         className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
         <span
            className={`material-symbols-outlined text-9xl! lg:text-[10rem] xl:text-[15rem] 2xl:text-[20rem]! text-white ${
               isTop ? "drop-shadow-2xl" : ""
            }`}
         >
            {selectedIcon}
         </span>
      </motion.div>
   );
}
