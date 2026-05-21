import { IconType } from "@/app/_types/IconType";
import CircularScreenIcon from "./CircularScreenIcon";
import NAV_ITEMS from "@/constants/NAV_ITEMS";
import usePageTransitionContext from "@/modules/pageTransition/context/PageTransitionContext";
import { AnimatePresence, motion } from "framer-motion";
import usePreloaderContext from "@/modules/preloader/context/PreloaderContext";
type Props = {
   selectedIcon: IconType;
};

export default function CircularScreen({ selectedIcon }: Props) {
   const { targetRoute } = usePageTransitionContext();
   const { isLoaded } = usePreloaderContext();

   let currentIcon: IconType = selectedIcon;

   if (targetRoute) {
      const navItem = NAV_ITEMS.find((item) => item.link === targetRoute);
      if (navItem) {
         currentIcon = navItem.icon;
      }
   }

   return (
      <div
         style={{ transformStyle: "preserve-3d" }}
         className="h-full aspect-square relative"
      >
         <div
            style={{ transform: `translateZ(${50}px)` }}
            className="absolute -inset-40 rounded-full border-2 border-accent"
         />

         <div
            style={{ transform: `translateZ(${-100}px)` }}
            className="absolute -inset-96 rounded-full border-2 border-black"
         />
         <div
            style={{ transform: `translateZ(${-50}px)` }}
            className="absolute inset-0 rounded-full bg-gray-100 shadow-xl"
         />

         <div
            style={{ transformStyle: "preserve-3d" }}
            className="h-full aspect-square p-4 bg-white rounded-full border border-gray-300"
         >
            <div
               style={{ transformStyle: "preserve-3d" }}
               className="h-full w-full border-16 border-black bg-primary rounded-full"
            >
               <div
                  style={{ transformStyle: "preserve-3d" }}
                  className="w-full h-full rounded-full border border-slate-700 relative"
               >
                  <AnimatePresence propagate>
                     <motion.div
                        key={currentIcon}
                        initial={{ scale: 0 }}
                        animate={{ scale: isLoaded ? 1 : 0 }}
                        exit={{ scale: 0 }}
                        transition={{ duration: 0.1 }}
                        style={{ transformStyle: "preserve-3d" }}
                        className="absolute inset-0 flex items-center justify-center"
                     >
                        {Array.from({ length: 5 }).map((_, index) => (
                           <CircularScreenIcon
                              key={index}
                              index={index}
                              selectedIcon={currentIcon}
                           />
                        ))}
                     </motion.div>
                  </AnimatePresence>
               </div>
            </div>
         </div>
      </div>
   );
}
