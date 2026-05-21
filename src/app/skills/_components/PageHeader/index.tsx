import PageTitle from "@/components/PageTitle";
import useLanguageContext from "@/context/LanguageContext";
import MobileMouseIcon from "@/components/MouseIcon/MobileMouseIcon";
import MouseIcon from "@/components/MouseIcon";
import PageHeaderCard from "./PageHeaderCard";
import { useState } from "react";
import { motion } from "framer-motion";

type Props = {};

export default function PageHeader({}: Props) {
   const { language } = useLanguageContext();
   const { title } = language.skills;

   const [isCardHovered, setIsCardHovered] = useState(false);

   const startHover = () => {
      setIsCardHovered(true);
   };

   const stopHover = () => {
      setIsCardHovered(false);
   };

   return (
      <div className="w-full h-svh flex items-center justify-center relative pointer-events-none lg:pointer-events-auto">
         <motion.div
            className={`absolute top-0 left-0 w-full h-full flex items-center justify-center duration-1000 ${isCardHovered ? "brightness-100" : "brightness-50"} `}
         >
            <PageHeaderCard
               startHover={startHover}
               stopHover={stopHover}
               isCardHovered={isCardHovered}
            />
         </motion.div>
         <motion.div
            animate={{ opacity: isCardHovered ? 0.1 : 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="w-full px-4 lg:px-24 flex justify-center z-10 relative pointer-events-none"
         >
            <PageTitle title={title} />
            <div className="absolute top-full left-0 w-full flex justify-center translate-y-3">
               <MouseIcon />
            </div>
         </motion.div>
         <MobileMouseIcon />
      </div>
   );
}
