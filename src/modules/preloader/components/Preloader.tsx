"use client";
import {
   motion,
   AnimatePresence,
   useTransform,
   useMotionValueEvent,
} from "framer-motion";
import ProgressBar from "./ProgressBar";
import Message from "./Message";
import ScanLine from "./ScanLine";
import LoadValue from "./LoadValue";
import { useState } from "react";
import usePreloaderContext from "../context/PreloaderContext";

export default function Preloader() {
   const { setIsLoaded, progress, isFinished, setIsFinished } =
      usePreloaderContext();

   const displayValue = useTransform(progress, (latest) => Math.round(latest));
   const scaleXProgress = useTransform(progress, [0, 100], [0, 1]);

   const [message, setMessage] = useState<string>("Initializing");

   useMotionValueEvent(displayValue, "change", (e) => {
      if (e === 100) {
         setMessage("welcome");
         setTimeout(() => {
            setIsFinished(true);
         }, 1000);
      }
   });

   return (
      <AnimatePresence onExitComplete={() => setIsLoaded(true)}>
         {!isFinished && (
            <motion.div
               key="preloader-overlay"
               initial={{ opacity: 1 }}
               exit={{
                  opacity: 0,
                  transition: { duration: 0.5, ease: [0.19, 1, 0.22, 1] },
               }}
               className="fixed inset-0 z-9999 flex flex-col gap-8 items-center justify-center bg-primary text-white"
            >
               {/* ScanLine */}
               <ScanLine />

               {/* Load number */}
               <LoadValue displayValue={displayValue} />

               <div className="flex flex-col gap-8 w-64 xl:w-80">
                  {/* Progress Bar */}
                  <ProgressBar scaleX={scaleXProgress} />
                  {/* Bottom text */}
                  <Message message={message} />
               </div>
            </motion.div>
         )}
      </AnimatePresence>
   );
}
