import PageTitle from "@/components/PageTitle";
import MouseIcon from "@/components/MouseIcon";
import useLanguageContext from "@/context/LanguageContext";
import MobileMouseIcon from "@/components/MouseIcon/MobileMouseIcon";
import { MotionValue, motion, useTransform } from "framer-motion";

type Props = {
   showHeader?: boolean;
   smoothScroll: MotionValue<number>;
};

export default function Header({ showHeader = true, smoothScroll }: Props) {
   const { language } = useLanguageContext();
   const { title } = language.projects;

   const opacity = useTransform(smoothScroll, [0, 200], [1, 0.1]);
   const scale = useTransform(smoothScroll, [0, 200], [1, 0.8]);

   return (
      <motion.div
         style={{ opacity, scale }}
         className="w-full lg:w-screen lg:fixed top-0 left-0 h-svh  flex items-center justify-center pointer-events-none"
      >
         {showHeader && (
            <div className="relative">
               <PageTitle title={title} />
               <div className="absolute top-full left-0 flex justify-center w-full translate-y-4">
                  <MouseIcon />
               </div>
            </div>
         )}
         <MobileMouseIcon />
      </motion.div>
   );
}
