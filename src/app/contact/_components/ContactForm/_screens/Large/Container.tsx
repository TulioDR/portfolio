import React, { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { LINE_SELECTOR } from "@/app/contact/_constants/LINE_SELECTOR";
import AnimatedLine from "../../../AnimatedLine";

type Props = {
   children: React.ReactNode;
};

export default function Container({ children }: Props) {
   const [scope, animate] = useAnimate();

   useEffect(() => {
      animate(
         `.${LINE_SELECTOR}`,
         { width: "100%", height: "100%" },
         { delay: stagger(0.1) },
      );
   }, [animate, LINE_SELECTOR]);

   return (
      <motion.div ref={scope} className="h-svh w-screen p-4">
         <div className="flex w-full h-full relative">
            <AnimatedLine className="absolute left-0 top-0" />
            <AnimatedLine className="absolute left-0 bottom-0" />
            <div className="h-full w-16 relative">
               <AnimatedLine vertical className="absolute left-0 top-0" />
               <AnimatedLine vertical className="absolute right-0 top-0" />
            </div>
            <div className="h-full flex-1">{children}</div>
            <div className="h-full w-16 relative">
               <AnimatedLine vertical className="absolute left-0 top-0" />
               <AnimatedLine vertical className="absolute right-0 top-0" />
            </div>
         </div>
      </motion.div>
   );
}
