import { PROJECT_ANIMATION_DURATION } from "@/app/projects/_constants/DURATIONS";
import AnimatedText from "@/components/AnimatedText";
import { motion } from "framer-motion";

type Props = {
   text: string;
   className?: string;
   initial?: true;
   restart?: boolean;
};

export default function CardText({
   text,
   className = "",
   initial,
   restart,
}: Props) {
   return (
      <div className="overflow-hidden">
         <motion.div
            exit={{ y: "-100%" }}
            transition={{ duration: PROJECT_ANIMATION_DURATION }}
            className={`uppercase truncate font-thin ${className}`}
         >
            <AnimatedText restart={restart} text={text} initial={initial} />
         </motion.div>
      </div>
   );
}
