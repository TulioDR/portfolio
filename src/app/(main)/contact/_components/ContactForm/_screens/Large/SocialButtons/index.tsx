import { motion } from "framer-motion";
import Socials from "@/components/Socials";

type Props = {};

export default function SocialButtons({}: Props) {
   return (
      <motion.div
         initial={{ scale: 0 }}
         animate={{ scale: 1 }}
         exit={{ scale: 0 }}
         transition={{ duration: 0.4 }}
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
