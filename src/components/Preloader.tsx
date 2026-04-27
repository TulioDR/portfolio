"use client";
import {
   motion,
   AnimatePresence,
   useSpring,
   useTransform,
} from "framer-motion";
import { useEffect, useState } from "react";
import useIsLoadedContext from "@/context/IsLoadedContext";

export default function Preloader() {
   const { isLoaded } = useIsLoadedContext();
   const [isMounted, setIsMounted] = useState(false);

   // Hooks MUST run every single time, no matter what
   const progress = useSpring(0, {
      stiffness: 35,
      damping: 20,
   });

   const displayValue = useTransform(progress, (latest) => Math.round(latest));
   const scaleXProgress = useTransform(progress, [0, 100], [0, 1]);

   useEffect(() => {
      setIsMounted(true);
      progress.set(100);
   }, [progress]);

   return (
      <AnimatePresence>
         {isMounted && !isLoaded && (
            <motion.div
               key="preloader-overlay"
               initial={{ opacity: 1 }}
               exit={{
                  opacity: 0,
                  transition: { duration: 1, ease: [0.19, 1, 0.22, 1] },
               }}
               className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-primary font-kode-mono text-white"
            >
               {/* Scanline */}
               <motion.div
                  initial={{ top: "-10%" }}
                  animate={{ top: "110%" }}
                  transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                  className="absolute left-0 right-0 h-0.5 bg-white/5 z-0"
               />

               <div className="relative z-10 flex flex-col items-center gap-8">
                  <div className="flex items-baseline gap-3">
                     <motion.span className="text-9xl font-bold tabular-nums tracking-tighter">
                        {displayValue}
                     </motion.span>
                     <div className="flex flex-col">
                        <span className="text-2xl font-light opacity-40">
                           %
                        </span>
                        <span className="text-[10px] tracking-[0.2em] opacity-20">
                           LOAD
                        </span>
                     </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="relative h-px w-80 bg-white/10 overflow-hidden">
                     <motion.div
                        style={{ scaleX: scaleXProgress, originX: 0 }}
                        className="absolute inset-0 bg-white shadow-[0_0_10px_#fff]"
                     />
                  </div>

                  <div className="flex flex-col items-center gap-3">
                     <motion.div
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="flex items-center gap-2"
                     >
                        <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                        <p className="text-[10px] tracking-[0.7em] uppercase">
                           Initializing Connection
                        </p>
                     </motion.div>
                  </div>
               </div>
            </motion.div>
         )}
      </AnimatePresence>
   );
}
