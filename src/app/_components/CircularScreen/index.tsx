import { IconModel } from "@/app/_models/IconModel";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
   selectedIcon: IconModel;
};

export default function CircularScreen({ selectedIcon }: Props) {
   return (
      <div
         style={{ transformStyle: "preserve-3d" }}
         className="h-full aspect-square relative"
      >
         <div
            style={{ transform: `translateZ(${-200}px)` }}
            className="absolute -inset-52 rounded-full border-80 border-slate-700"
         />
         <div
            style={{ transform: `translateZ(${-100}px)` }}
            className="absolute -inset-96 rounded-full border-2 border-black"
         />
         <div
            style={{ transform: `translateZ(${-50}px)` }}
            className="absolute inset-0 rounded-full bg-black shadow-xl"
         />
         <div
            style={{ transform: `translateZ(${50}px)` }}
            className="absolute inset-0 border border-accent rounded-full"
         />
         <motion.div
            style={{ transformStyle: "preserve-3d" }}
            className="h-full relative aspect-square border-20 border-black bg-primary rounded-full"
         >
            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               transition={{ duration: 0.1 }}
               style={{ transformStyle: "preserve-3d" }}
               className="w-full h-full rounded-full border border-slate-700"
            >
               <AnimatePresence>
                  <motion.div
                     key={selectedIcon}
                     initial={{ scale: 0 }}
                     animate={{ scale: 1 }}
                     exit={{ scale: 0 }}
                     transition={{ duration: 0.1 }}
                     style={{ transformStyle: "preserve-3d" }}
                     className="absolute inset-0 flex items-center justify-center"
                  >
                     {Array.from({ length: 5 }).map((_, index) => {
                        const total = 5;
                        const isTop = index === total - 1;
                        // 1. Scale Jump: Lower starting point (0.3) for a more dramatic growth
                        // Index 0: 0.3 | Index 4: 1.0
                        const scaleValue = 0.3 + (index / (total - 1)) * 0.9;
                        // 2. Opacity: Fades out as it goes deeper
                        // Index 0: 0.2 | Index 4: 1.0
                        const opacityValue = 0.2 + (index / (total - 1)) * 0.8;
                        // 3. TranslateZ: Positive values moving toward the screen
                        const zValue = index * 20;

                        return (
                           <motion.div
                              key={index}
                              style={{
                                 transform: `translateZ(${zValue}px) scale(${scaleValue})`,
                                 opacity: opacityValue,
                                 zIndex: index,
                              }}
                              className="absolute inset-0 flex items-center justify-center pointer-events-none"
                           >
                              <span
                                 className={`material-symbols-outlined text-9xl! lg:text-[10rem] xl:text-[15rem] 2xl:text-[20rem]! text-white ${
                                    isTop ? "drop-shadow-2xl" : ""
                                 }`}
                              >
                                 {selectedIcon}
                              </span>
                           </motion.div>
                        );
                     })}
                  </motion.div>
               </AnimatePresence>
            </motion.div>
         </motion.div>
      </div>
   );
}
