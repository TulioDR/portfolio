import useLanguageContext from "@/context/LanguageContext";
import { motion } from "framer-motion";

export default function SendButton() {
   const { currentLanguage } = useLanguageContext();
   const { send } = currentLanguage.contact;
   return (
      <motion.button
         whileTap={{ scale: 0.9 }}
         className="h-11 px-7 bg-main-orange flex items-center space-x-2"
         type="submit"
      >
         <span className="material-icons">send</span>
         <span>{send}</span>
      </motion.button>
   );
}
