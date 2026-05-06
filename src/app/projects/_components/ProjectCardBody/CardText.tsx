import { PROJECT_ANIMATION_DURATION } from "@/app/projects/_constants/DURATIONS";
import AnimatedText from "@/components/AnimatedText";
import { motion } from "framer-motion";

type Props = {
   text: string;
   initial?: true;
   restart?: boolean;
   title?: true;
   header?: true;
};

export default function CardText({
   text,
   initial,
   restart,
   title,
   header,
}: Props) {
   return (
      <div className="overflow-hidden">
         <motion.div
            exit={{ y: "-100%" }}
            transition={{ duration: PROJECT_ANIMATION_DURATION }}
         >
            <AnimatedText
               restart={restart}
               text={text}
               initial={initial}
               className={`uppercase truncate font-thin 
                  ${title ? " text-base md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl" : ""}
                  ${header ? "text-xs" : ""}
                  ${!title && !header ? "text-xs sm:text-sm md:text-base" : ""}
               `}
            />
         </motion.div>
      </div>
   );
}
