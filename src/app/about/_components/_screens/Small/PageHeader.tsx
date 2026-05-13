import MouseIcon from "@/components/MouseIcon";
import PageTitle from "@/components/PageTitle";
import useLanguageContext from "@/context/LanguageContext";
import { useAnimate, motion } from "framer-motion";
import { useEffect } from "react";

type Props = {};

export default function PageHeader({}: Props) {
   const { language } = useLanguageContext();
   const { title } = language.about;

   const LINE_SELECTOR_1 = "line-selector-1";
   const LINE_SELECTOR_2 = "line-selector-2";

   const [scope, animate] = useAnimate();
   useEffect(() => {
      const startAnimation = async () => {
         await animate("." + LINE_SELECTOR_1, { scaleX: 1 }, { duration: 0.5 });
         animate("." + LINE_SELECTOR_2, { scaleY: 1 }, { duration: 0.5 });
      };
      startAnimation();
   }, []);

   return (
      <div ref={scope} className="w-full h-svh flex items-center relative">
         <div className="h-1 flex-1">
            <motion.div
               initial={{ scaleX: 0 }}
               className={`w-full h-full bg-accent origin-right ${LINE_SELECTOR_1}`}
            />
         </div>
         <div className="relative">
            <PageTitle title={title} />
            <div className="absolute top-full left-0 w-full flex justify-center translate-y-3">
               <MouseIcon />
            </div>
         </div>
         <div className="h-1 flex-1" />

         <div className="absolute bottom-0 left-0 h-1/2 w-1">
            <motion.div
               initial={{ scaleY: 0 }}
               className={`w-full h-full bg-accent origin-top ${LINE_SELECTOR_2}`}
            />
         </div>
      </div>
   );
}
