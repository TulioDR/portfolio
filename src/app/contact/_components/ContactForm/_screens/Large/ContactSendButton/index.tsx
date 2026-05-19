import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AnimatedText from "@/components/AnimatedText";
import useLanguageContext from "@/context/LanguageContext";
import { SentStatusType } from "@/app/contact/_types/ContactFormType";
import AnimatedLine from "@/app/contact/_components/AnimatedLine";

type Props = {
   sentStatus: SentStatusType;
   isLoading: boolean;
};

export default function ContactSendButton({ sentStatus, isLoading }: Props) {
   const [isRestarted, setIsRestarted] = useState(false);

   const onHoverStart = () => {
      setIsRestarted((prev) => !prev);
   };

   const { language } = useLanguageContext();
   const { errorMessage, successMessage, send } = language.contact;

   const [disableButton, setDisableButton] = useState(false);

   useEffect(() => {
      if (isLoading || sentStatus) {
         setDisableButton(true);
         console.log("disabled");
      } else {
         setDisableButton(false);
         console.log("enabled");
      }
   }, [isLoading, sentStatus]);

   return (
      <motion.button
         type="submit"
         exit={{ pointerEvents: "none", opacity: 0 }}
         onHoverStart={onHoverStart}
         transition={{ duration: 0.4 }}
         className={`w-full h-16 xl:h-main-spacing relative flex items-center justify-center overflow-hidden uppercase text-4xl font-black  
            ${
               disableButton
                  ? "pointer-events-none text-black bg-linear-to-r from-accent to-light-accent"
                  : "text-text hover:text-black hover:bg-linear-to-r from-accent to-light-accent"
            }
         `}
      >
         <AnimatedLine className="absolute top-0" />
         {isLoading ? (
            <AnimatedText initial text="Sending..." />
         ) : sentStatus === null ? (
            <AnimatedText initial restart={isRestarted} text={send} />
         ) : (
            <AnimatedText
               initial
               text={sentStatus === "success" ? successMessage : errorMessage}
               className="text-xl"
            />
         )}
      </motion.button>
   );
}
