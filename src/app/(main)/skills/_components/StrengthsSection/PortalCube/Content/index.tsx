import { useRef } from "react";
import { motion } from "framer-motion";
import Portal from "./Portal";
import Cube from "./Cube";
import PortalSymbol from "./PortalSymbol";

type Props = {
   bottom?: true;
};

export default function Content({ bottom }: Props) {
   const constraintsRef = useRef(null);

   return (
      <div
         className={`h-full w-full relative flex items-center justify-center bg-[#313A41] ${
            bottom ? "flex-col-reverse" : "flex-col"
         }`}
      >
         <Portal bottom={bottom} />
         <PortalSymbol bottom={bottom} />

         <motion.div
            ref={constraintsRef}
            className={`w-full aspect-1/2 left-0 absolute z-10 ${
               bottom ? "bottom-0" : "top-0"
            }`}
         >
            <Cube dragConstraints={constraintsRef} />
         </motion.div>
      </div>
   );
}
