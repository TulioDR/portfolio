import { useState } from "react";
import { motion, MotionValue, Transition } from "framer-motion";
import HomeLeftSide from "./HomeLeftSide";
import HomeRightSide from "./HomeRightSide";

import CircularScreen from "../../CircularScreen";
import { IconType } from "@/app/_types/IconType";

type Props = {
   handleMouseMove: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
   handleMouseLeave: () => void;
   rotateX: MotionValue<number>;
   rotateY: MotionValue<number>;
};

export default function Large({
   handleMouseMove,
   handleMouseLeave,
   rotateX,
   rotateY,
}: Props) {
   const value = "";
   const [selectedIcon, setSelectedIcon] = useState<IconType>("home");

   const transition: Transition = { duration: 1, ease: [0.22, 1, 0.36, 1] };

   return (
      <motion.div
         onMouseMove={handleMouseMove}
         onMouseLeave={handleMouseLeave}
         style={{ perspective: 3000 }}
         className="h-svh w-full bg-text gap-8 px-8 xl:py-32 2xl:py-8 overflow-hidden hidden xl:block"
      >
         <motion.div
            style={{
               transformStyle: "preserve-3d",
               rotateX: rotateX,
               rotateY: rotateY,
            }}
            initial={{ scale: 3 }}
            animate={{ scale: 1, transition }}
            exit={{ scale: 3, transition }}
            className="w-full h-full pointer-events-none flex gap-8"
         >
            <HomeLeftSide setSelectedIcon={setSelectedIcon} />
            <CircularScreen selectedIcon={selectedIcon} />
            <HomeRightSide setSelectedIcon={setSelectedIcon} />
         </motion.div>
      </motion.div>
   );
}
