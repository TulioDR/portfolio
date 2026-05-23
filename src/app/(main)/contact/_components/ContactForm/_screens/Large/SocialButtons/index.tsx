import { motion } from "framer-motion";
import Socials from "@/components/Socials";
import { ENTER_EASE, EXIT_EASE } from "@/constants/TRANSITIONS";

type Props = {};

export default function SocialButtons({}: Props) {
   return (
      <motion.div
         initial={{ scale: 0.8 }}
         animate={{ scale: 1, transition: ENTER_EASE }}
         exit={{ scale: 0.8, transition: EXIT_EASE }}
         style={{ top: "50%", right: 0, y: "-50%", x: "100%" }}
         className="absolute z-10"
      >
         <Socials
            tooltipPosition="left"
            white
            vertical
            className="border border-line"
         />
      </motion.div>
   );
}
