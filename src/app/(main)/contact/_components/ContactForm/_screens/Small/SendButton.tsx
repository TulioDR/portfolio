import useLanguageContext from "@/context/LanguageContext";
import { motion } from "framer-motion";
import AnimatedText from "@/components/AnimatedText";
import useTextRestart from "@/hooks/useTextRestart";

type Props = {};

export default function SendButton({}: Props) {
   const { language } = useLanguageContext();
   const { send } = language.contact;

   const { restart, handleRestart } = useTextRestart();

   return (
      <motion.button
         onTapStart={handleRestart}
         initial={{ scale: 0 }}
         animate={{ scale: 1 }}
         transition={{ duration: 0.5 }}
         type="submit"
         className="bg-accent rounded-sm h-16 w-32 select-none"
      >
         <AnimatedText
            restart={restart}
            text={send}
            className="uppercase text-white"
         />
      </motion.button>
   );
}
