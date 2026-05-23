import React from "react";
import { motion } from "framer-motion";
import AnimatedText from "@/components/AnimatedText";
import { SentStatusModel } from "../../models/ContactFormModel";
import useLanguageContext from "@/context/LanguageContext";

type Props = {
   isLoading: boolean;
   sentStatus: SentStatusModel;
   isRestarted: boolean;
};

export default function ButtonBackground({
   isLoading,
   sentStatus,
   isRestarted,
}: Props) {
   const { language } = useLanguageContext();
   const { errorMessage, successMessage, send } = language.contact;

   return (
      <motion.div
         initial={{ x: "-100%" }}
         animate={{ x: "0%" }}
         exit={{ x: "100%" }}
         transition={{ duration: 0.5 }}
         className="absolute top-0 left-0 w-full h-full z-10 overflow-hidden"
      >
         <motion.div
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.5 }}
            className={`w-full h-full`}
         >
            <div
               className={`w-full h-full flex items-center justify-center text-black duration-100 bg-gradient-to-r 
                  ${
                     sentStatus === "success"
                        ? "from-green-700 to-green-600"
                        : ""
                  }
                  ${sentStatus === "fail" ? "bg-red-700 to-red-600" : ""}
                  ${sentStatus === null ? " from-accent to-yellow-600" : ""}
               `}
            >
               {isLoading ? (
                  <AnimatedText text="Sending..." />
               ) : (
                  <>
                     {sentStatus === null ? (
                        <AnimatedText restart={isRestarted} text={send} />
                     ) : (
                        <AnimatedText
                           text={
                              sentStatus === "success"
                                 ? successMessage
                                 : errorMessage
                           }
                        />
                     )}
                  </>
               )}
            </div>
         </motion.div>
      </motion.div>
   );
}
