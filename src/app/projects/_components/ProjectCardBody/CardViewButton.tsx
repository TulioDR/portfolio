import { PROJECT_ANIMATION_DURATION } from "@/app/projects/_constants/DURATIONS";
import AnimatedText from "@/components/AnimatedText";
import useLanguageContext from "@/context/LanguageContext";
import { useState } from "react";
import { motion } from "framer-motion";
import TransitionLink from "@/modules/pageTransition/components/TransitionLink";

type Props = {
   href: string;
};

export default function CardViewButton({ href }: Props) {
   const [isHovered, setIsHovered] = useState<boolean>(false);
   const [restart, setRestart] = useState(false);

   const handleRestart = () => {
      setRestart((prev) => !prev);
   };

   const onEnter = () => {
      setIsHovered(true);
      handleRestart();
   };

   const onLeave = () => {
      setIsHovered(false);
   };

   const { language } = useLanguageContext();
   const { viewMore } = language.projects;

   return (
      <motion.div
         initial={{ scale: 0 }}
         animate={{ scale: 1 }}
         exit={{ scale: 0 }}
         transition={{ duration: PROJECT_ANIMATION_DURATION }}
      >
         <TransitionLink
            href={href}
            onPointerEnter={onEnter}
            onPointerLeave={onLeave}
            className={`flex items-center justify-center px-8 pointer-events-auto cursor-pointer
            ${isHovered ? "bg-accent text-white" : "bg-white text-black"}
         `}
         >
            <AnimatedText
               initial
               restart={restart}
               text={viewMore}
               className="text-xl pointer-events-none uppercase truncate"
            />
         </TransitionLink>
      </motion.div>
   );
}
