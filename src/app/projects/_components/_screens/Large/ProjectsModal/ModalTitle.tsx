import { motion } from "framer-motion";
import AnimatedText from "@/components/AnimatedText";

type Props = {
   title: string;
};

export default function ModalTitle({ title }: Props) {
   return (
      <motion.div exit={{ opacity: 0, transition: { duration: 0 } }}>
         <AnimatedText
            text={title}
            initial
            className="text-4xl text-center uppercase font-black"
         />
      </motion.div>
   );
}
