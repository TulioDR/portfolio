import { useScroll, motion } from "framer-motion";
import { useRef } from "react";

type Props = {};

export default function ScrollIndicator({}: Props) {
   const ref = useRef(null);
   const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start center", "end center"],
   });

   return (
      <div className="absolute top-0 left-0 h-full w-1  pb-[50svh]">
         <div ref={ref} className="w-full h-full bg-white/10">
            <motion.div
               style={{ scaleY: scrollYProgress }}
               className="w-full h-full bg-accent origin-top"
            />
         </div>
      </div>
   );
}
