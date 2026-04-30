import AnimatedText from "@/components/AnimatedText";
import GestureHandler from "@/components/GestureHandler";
import useLanguageContext from "@/context/LanguageContext";
import { useState } from "react";

type Props = {};

export default function LearnMoreButton({}: Props) {
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
      <div className="overflow-hidden">
         <GestureHandler
            onEnter={onEnter}
            onLeave={onLeave}
            initial={{ y: "100%" }}
            animate={{
               y: "0%",
               transition: { duration: 0.2, delay: 0 },
            }}
            exit={{ y: "-100%", transition: { duration: 0.2 } }}
            className={`h-16 flex items-center justify-center px-8 pointer-events-auto
                  ${isHovered ? "bg-accent text-white" : "bg-white text-black"}
               `}
         >
            <AnimatedText
               initial
               restart={restart}
               text={viewMore}
               className="text-xl pointer-events-none uppercase"
            />
         </GestureHandler>
      </div>
   );
}
