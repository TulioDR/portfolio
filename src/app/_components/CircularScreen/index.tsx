import { IconType } from "@/app/_types/IconType";
import { motion } from "framer-motion";
import CircularScreenIcon from "./CircularScreenIcon";
import CircularScreenAnimation from "./CircularScreenAnimation";
import { useEffect, useState } from "react";
import usePageTransitionContext from "@/context/PageTransitionContext";
import NAV_ITEMS from "@/constants/NAV_ITEMS";
import { usePathname } from "next/navigation";
type Props = {
   selectedIcon: IconType;
};

export default function CircularScreen({ selectedIcon }: Props) {
   const [hardcodedIcon, setHardcodedIcon] = useState<IconType | null>(null);
   const { targetRoute } = usePageTransitionContext();

   useEffect(() => {
      if (!targetRoute) return;
      const navItem = NAV_ITEMS.find((item) => item.link === targetRoute);
      if (navItem) setHardcodedIcon(navItem.icon);
   }, [targetRoute, NAV_ITEMS]);

   const pathname = usePathname();
   useEffect(() => {
      if (pathname === "/") setHardcodedIcon(null);
   }, [pathname]);

   const currentIcon: IconType = hardcodedIcon || selectedIcon;

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
            className="h-full aspect-square border-20 border-black bg-primary rounded-full"
         >
            <div
               style={{ transformStyle: "preserve-3d" }}
               className="w-full h-full rounded-full border border-slate-700 relative"
            >
               <CircularScreenAnimation selectedIcon={currentIcon}>
                  {Array.from({ length: 5 }).map((_, index) => (
                     <CircularScreenIcon
                        key={index}
                        index={index}
                        selectedIcon={currentIcon}
                     />
                  ))}
               </CircularScreenAnimation>
            </div>
         </motion.div>
      </div>
   );
}
