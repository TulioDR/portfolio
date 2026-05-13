import { useEffect, useRef, useState } from "react";
import PageTitle from "@/components/PageTitle";
import useLanguageContext from "@/context/LanguageContext";
import { useAnimationControls } from "framer-motion";
import AnimatedText from "@/components/AnimatedText";
import MobileMouseIcon from "@/components/MouseIcon/MobileMouseIcon";
import HeaderLine from "../../../HeaderLine";

type Props = {};

export default function Mobile({}: Props) {
   const { language, isEnglish } = useLanguageContext();

   const { title } = language.about;

   const titleRef = useRef<HTMLDivElement>(null);
   const containerRef = useRef<HTMLDivElement>(null);

   const [HorizontalWidth, setHorizontalWidth] = useState(0);

   // const { windowWidth } = useWindowWidth();

   useEffect(() => {
      if (!titleRef.current) return;
      const { width: tWidth } = titleRef.current!.getBoundingClientRect();
      const { width: cWidth } = containerRef.current!.getBoundingClientRect();
      const restWidth = (cWidth - tWidth) / 2;
      setHorizontalWidth(restWidth + tWidth);
   }, [
      isEnglish,
      // windowWidth
   ]);

   const TOTAL_DURATION = 1;

   const line1 = useAnimationControls();
   const line2 = useAnimationControls();
   const line3 = useAnimationControls();
   const mouse = useAnimationControls();

   useEffect(() => {
      const startAnimation = async () => {
         await line1.start("animate");
         await line2.start("animate");
         await line3.start("animate");
         mouse.start("animate");
      };
      startAnimation();
   }, [line1, line2, line3, mouse]);

   return (
      <div className="h-svh w-screen flex flex-col items-center px-4">
         <div className="flex-1" />
         <div ref={titleRef} className="py-2 px-4 relative">
            <PageTitle title={title} />
            <div className="absolute top-0 right-0 h-full">
               <HeaderLine
                  vertical
                  duration={TOTAL_DURATION / 4}
                  controls={line1}
               />
            </div>
         </div>
         <div ref={containerRef} className="w-full flex-1 relative">
            <div className="w-full flex flex-col items-center text-xs sm:text-sm text-center pt-4 gap-4">
               <AnimatedText initial text="Coder" />
               <AnimatedText initial text="Developer" />
               <AnimatedText initial text="Engineer" />
            </div>
            <div
               style={{ width: HorizontalWidth }}
               className="absolute top-0 left-0 rotate-180"
            >
               <HeaderLine duration={TOTAL_DURATION / 4} controls={line2} />
            </div>
            <div className="absolute top-0 left-0 h-full">
               <HeaderLine
                  vertical
                  duration={TOTAL_DURATION / 2}
                  controls={line3}
               />
            </div>
            <MobileMouseIcon controls={mouse} />
         </div>
      </div>
   );
}
