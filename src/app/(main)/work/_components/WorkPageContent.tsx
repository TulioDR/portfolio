"use client";

import PageHeader from "./PageHeader";
import WorkCard from "./WorkCard";
import ReactLenis from "lenis/react";
import { motion } from "framer-motion";
import usePreloaderContext from "@/modules/preloader/context/PreloaderContext";
import { ENTER_EASE } from "@/constants/TRANSITIONS";

type Props = {};

export default function WorkPageContent({}: Props) {
   const { isLoaded } = usePreloaderContext();
   return (
      <ReactLenis root>
         <div className="px-4 lg:px-24 pb-24 lg:pb-4">
            <PageHeader isLoaded={isLoaded} />
            <motion.div
               initial={{ y: "9rem" }}
               animate={{ y: isLoaded ? "0rem" : "9rem" }}
               transition={ENTER_EASE}
               className="grid grid-cols-1 gap-8 w-full -mt-36"
            >
               {Array.from({ length: 2 }).map((_, index) => (
                  <WorkCard key={index} />
               ))}
            </motion.div>
         </div>
      </ReactLenis>
   );
}
