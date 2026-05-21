import { useState } from "react";
import { motion } from "framer-motion";
import HomeLeftSide from "./HomeLeftSide";
import HomeRightSide from "./HomeRightSide";

import CircularScreen from "../../CircularScreen";
import { IconType } from "@/app/_types/IconType";

type Props = {};

export default function Large({}: Props) {
   const [selectedIcon, setSelectedIcon] = useState<IconType>("home");

   return (
      <motion.div
         style={{ transformStyle: "preserve-3d" }}
         className="h-full w-full pointer-events-none gap-8 px-8 xl:py-24 2xl:py-4 hidden xl:flex"
      >
         <HomeLeftSide setSelectedIcon={setSelectedIcon} />
         <CircularScreen selectedIcon={selectedIcon} />
         <HomeRightSide setSelectedIcon={setSelectedIcon} />
      </motion.div>
   );
}
