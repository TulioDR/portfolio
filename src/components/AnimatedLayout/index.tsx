"use client";

import useIsLoadedContext from "@/context/IsLoadedContext";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

type Props = {
   children: React.ReactNode;
};

export default function AnimatedLayout({ children }: Props) {
   const { targetRoute, completeNavigation } = useIsLoadedContext();
   const pathname = usePathname();
   const isExiting = targetRoute && targetRoute !== pathname;

   return (
      <AnimatePresence mode="wait" onExitComplete={completeNavigation}>
         {!isExiting && <motion.div key={pathname}>{children}</motion.div>}
      </AnimatePresence>
   );
}
