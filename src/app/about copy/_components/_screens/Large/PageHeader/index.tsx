import useLanguageContext from "@/context/LanguageContext";
import { useAnimationControls } from "framer-motion";
import { useEffect } from "react";
import HeaderLine from "../../../HeaderLine";
import PageTitle from "@/components/PageTitle";
import MouseIcon from "@/components/MouseIcon";
import Description from "./Description";

type Props = {};

export default function PageHeader({}: Props) {
   const { language } = useLanguageContext();

   const { title } = language.about;

   const line1 = useAnimationControls();
   const line2 = useAnimationControls();
   const line3 = useAnimationControls();
   const mouse = useAnimationControls();

   useEffect(() => {
      const startAnimation = async () => {
         await line1.start("animate");
         await line2.start("animate");
         line3.start("animate");
         mouse.start("animate");
      };
      startAnimation();
   }, [line1, line2, line3, mouse]);

   const TOTAL_DURATION = 1;

   return (
      <div className="h-svh w-screen flex items-center shrink-0">
         <div className="flex-1 h-full" />
         <div className="h-full flex flex-col">
            <div className="w-full flex-1" />
            <div className="px-20 py-16 shrink-0 relative">
               <PageTitle title={title} />
               <div className="absolute bottom-0 right-0 h-px w-full">
                  <HeaderLine controls={line1} duration={TOTAL_DURATION / 2} />
               </div>
               <div className="absolute bottom-0 right-0 h-[calc(50%+1px)] w-px rotate-180">
                  <HeaderLine
                     vertical
                     controls={line2}
                     duration={TOTAL_DURATION / 4}
                  />
               </div>
               <div className="h-1/2 left-full absolute bottom-0 flex items-center pl-8">
                  <MouseIcon controls={mouse} />
               </div>
            </div>
            <div className="w-full flex-1 ">
               <Description />
            </div>
         </div>
         <div className="flex-1 h-full flex items-center">
            <div className="w-full h-px">
               <HeaderLine controls={line3} duration={TOTAL_DURATION / 4} />
            </div>
         </div>
      </div>
   );
}
