import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
   isPowerOn: boolean;
   isBright: boolean;
   squareScreen?: true;
};

export default function Screen({
   children,
   isPowerOn,
   isBright,
   squareScreen,
}: Props) {
   const [isHovered, setIsHovered] = useState<boolean>(false);
   const [showLight, setShowLight] = useState<boolean>(false);

   useEffect(() => {
      if (isPowerOn && !isHovered && isBright) setShowLight(true);
      else setShowLight(false);
   }, [isPowerOn, isHovered, isBright]);

   const onHoverStart = () => setIsHovered(true);
   const onHoverEnd = () => setIsHovered(false);

   return (
      <motion.div
         onMouseEnter={onHoverStart}
         onMouseLeave={onHoverEnd}
         className={`w-full bg-primary h-full border-black border-8 ${
            squareScreen ? "aspect-square" : "flex-1"
         }`}
      >
         <motion.div
            animate={{
               boxShadow: showLight
                  ? "0px 0px 100px 0px #FFDB81"
                  : "0px 0px 0px 0px #FFDB81",
            }}
            transition={{ duration: 0.3 }}
            className="w-full h-full rounded-sm overflow-hidden border border-slate-700 relative"
         >
            {children}
         </motion.div>
      </motion.div>
   );
}
