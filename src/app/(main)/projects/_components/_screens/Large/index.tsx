import { useEffect, useState } from "react";
import { AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import Header from "../../Header";
import Carousel from "./Layouts/Carousel";
import Grid from "./Layouts/Grid";
import LayoutSelector from "./LayoutSelector";
import List from "./Layouts/List";
import { LayoutType } from "../../../_types/LayoutType";

type Props = {};

export default function Large({}: Props) {
   const [layout, setLayout] = useState<LayoutType>("carousel");
   const changeLayout = (newLayout: LayoutType) => setLayout(newLayout);

   const [isInitialAnimation, setIsInitialAnimation] = useState(true);

   const currentScroll = useMotionValue(0);
   const smoothScroll = useSpring(currentScroll, {
      stiffness: 1000,
      damping: 50,
      mass: 0.1,
   });

   const [showHeader, setShowHeader] = useState(false);
   useEffect(() => {
      if (!isInitialAnimation) setShowHeader(true);
   }, [isInitialAnimation]);

   return (
      <>
         <LayoutSelector changeLayout={changeLayout} layout={layout} />
         <Header showHeader={showHeader} smoothScroll={smoothScroll} />
         <AnimatePresence mode="wait" propagate>
            {layout === "carousel" && (
               <Carousel
                  key="carousel"
                  currentScroll={currentScroll}
                  isInitialAnimation={isInitialAnimation}
                  setIsInitialAnimation={setIsInitialAnimation}
               />
            )}
            {layout === "grid" && (
               <Grid key="grid" currentScroll={currentScroll} />
            )}
            {layout === "list" && (
               <List key="list" currentScroll={currentScroll} />
            )}
         </AnimatePresence>
      </>
   );
}
