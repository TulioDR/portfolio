import AnimatedText from "@/components/AnimatedText";
import { EXIT_EASE } from "@/constants/TRANSITIONS";
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
         <motion.div exit={{ y: "-100%" }} transition={EXIT_EASE}>
            <AnimatedText
               restart={restart}
               text={text}
               initial={initial}
               className={`uppercase truncate
                  ${title ? " text-2xl xl:text-4xl 2xl:text-5xl font-black" : ""}
                  ${header ? "text-xs" : ""}
                  ${!title && !header ? "text-xs sm:text-sm md:text-base" : ""}
               `}
            />
         </motion.div>
      </div>
   );
}
