import { SentStatusType } from "@/app/(main)/contact/_types/ContactFormType";
import AnimatedText from "@/components/AnimatedText";
import useLanguageContext from "@/context/LanguageContext";
import { motion } from "framer-motion";

type Props = {
   sentStatus: SentStatusType;
};

export default function StatusModal({ sentStatus }: Props) {
   const { language } = useLanguageContext();
   const { errorMessage, successMessage } = language.contact;
   return (
      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
         transition={{ duration: 0.1 }}
         className="bg-black/60 fixed top-0 left-0 w-screen h-svh z-10 flex items-center justify-center text-3xl uppercase text-center p-4"
      >
         {sentStatus ? (
            <AnimatedText
               initial
               text={sentStatus === "success" ? successMessage : errorMessage}
               className={`${
                  sentStatus === "success" ? "text-green-500" : "text-red-500"
               }`}
            />
         ) : (
            <AnimatedText initial text="Sending..." />
         )}
      </motion.div>
   );
}
