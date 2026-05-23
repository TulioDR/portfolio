"use client";

import ReactLenis from "lenis/react";
import PageHeader from "./PageHeader";
import SkillsSection from "./SkillsSection";
import StrengthsSection from "./StrengthsSection";
import { motion } from "framer-motion";
import usePreloaderContext from "@/modules/preloader/context/PreloaderContext";
import { ENTER_EASE } from "@/constants/TRANSITIONS";

type Props = {};

export default function SkillsPageContent({}: Props) {
   const { isLoaded } = usePreloaderContext();

   return (
      <ReactLenis root>
         <div className="w-full overflow-hidden">
            <PageHeader isLoaded={isLoaded} />
            {/* This y value is the same as the -mt-36 in the className */}
            <motion.div
               initial={{ y: "9rem" }}
               animate={{ y: isLoaded ? "0rem" : "9rem" }}
               transition={ENTER_EASE}
               className="w-full px-4 lg:px-8 xl:px-24 flex flex-col gap-32 pb-24 lg:pb-4 -mt-36"
            >
               <SkillsSection />
               <StrengthsSection />
            </motion.div>
         </div>
      </ReactLenis>
   );
}
