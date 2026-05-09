import React, { useState } from "react";
import CORE from "./CORE";
import Cables from "./Cables";
import GestureHandler from "@/components/GestureHandler";

type Props = {};

export default function Content({}: Props) {
   const [isHovered, setIsHovered] = useState(false);

   const onMouseEnter = () => setIsHovered(true);
   const onMouseLeave = () => setIsHovered(false);

   return (
      <GestureHandler
         onEnter={onMouseEnter}
         onLeave={onMouseLeave}
         el="div"
         className="w-full h-full relative bg-slate-800 flex items-center"
      >
         <Cables isHovered={isHovered} />
         <div className="h-full w-2/3 flex flex-col">
            <Cables vertical isHovered={isHovered} />
            <CORE isHovered={isHovered} />
            <Cables vertical reverse isHovered={isHovered} />
         </div>
         <Cables reverse isHovered={isHovered} />
      </GestureHandler>
   );
}
