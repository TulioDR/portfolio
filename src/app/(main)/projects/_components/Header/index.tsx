import PageTitle from "@/components/Typography/PageTitle";
import MouseIcon from "@/components/MouseIcon";
import useLanguageContext from "@/context/LanguageContext";
import MobileMouseIcon from "@/components/MouseIcon/MobileMouseIcon";
import { MotionValue, motion, useTransform } from "framer-motion";
import PageDescription from "@/components/Typography/PageDescription";
import { EXIT_EASE } from "@/constants/TRANSITIONS";

type Props = {
   showHeader: boolean;
   smoothScroll: MotionValue<number>;
};

export default function Header({ showHeader, smoothScroll }: Props) {
   const { language } = useLanguageContext();
   const { title, description } = language.projects;

   const opacity = useTransform(smoothScroll, [0, 200], [1, 0.1]);
   const scale = useTransform(smoothScroll, [0, 200], [1, 0.8]);

   return (
      <motion.div
         style={{ opacity, scale }}
         className="w-full lg:w-screen lg:fixed top-0 left-0 h-svh  flex items-center justify-center pointer-events-none"
      >
         {showHeader && (
            <motion.div
               exit={{ scale: 0.8 }}
               transition={EXIT_EASE}
               className="relative flex flex-col items-center"
            >
               <PageTitle title={title} />
               <div className="px-4 sm:px-16 md:px-32 lg:px-0 w-full lg:w-145">
                  <PageDescription text={description} />
               </div>
               <div className="absolute top-full left-0 flex justify-center w-full translate-y-4">
                  <MouseIcon />
               </div>
            </motion.div>
         )}
         <MobileMouseIcon />
      </motion.div>
   );
}
