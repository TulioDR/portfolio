import { useState } from "react";
import { motion } from "framer-motion";
import HomeLeftSide from "./HomeLeftSide";
import HomeRightSide from "./HomeRightSide";

import CircularScreen from "../../CircularScreen";
import { IconType } from "@/app/_types/IconType";

type Props = {
   startAnimations: boolean;
};

export default function Large({ startAnimations }: Props) {
   const [selectedIcon, setSelectedIcon] = useState<IconType>("home");

   return (
      <motion.div
         style={{ transformStyle: "preserve-3d" }}
         className="w-full h-full pointer-events-none gap-8 hidden xl:flex px-20 2xl:px-24 py-24 2xl:py-12"
      >
         <HomeLeftSide setSelectedIcon={setSelectedIcon} />
         <CircularScreen
            selectedIcon={selectedIcon}
            startAnimations={startAnimations}
         />
         <HomeRightSide setSelectedIcon={setSelectedIcon} />
      </motion.div>
   );
}
