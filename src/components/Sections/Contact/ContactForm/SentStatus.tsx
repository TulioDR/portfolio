import useLanguageContext from "@/context/LanguageContext";
import { SentStatusModel } from "@/models/ContactFormModel";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
   sentStatus: SentStatusModel;
   setSentStatus: React.Dispatch<React.SetStateAction<SentStatusModel>>;
}

export default function SentStatus({ sentStatus, setSentStatus }: Props) {
   const isSuccessful = sentStatus === "success";
   const close = () => setSentStatus(null);

   const { currentLanguage } = useLanguageContext();
   const { successMessage, errorMessage } = currentLanguage.contact;
   return (
      <AnimatePresence>
         {sentStatus && (
            <motion.div
               initial={{ y: "100%" }}
               animate={{ y: 0 }}
               exit={{ y: "100%" }}
               transition={{ duration: 0.4 }}
               className="fixed bottom-0 left-0 w-full pb-7"
            >
               <div
                  className={` px-5 py-3 w-max rounded-xl flex items-center space-x-3 ${
                     isSuccessful ? "bg-green-700" : "bg-red-700"
                  }`}
               >
                  <span>{isSuccessful ? successMessage : errorMessage}</span>
                  <button onClick={close} className="grid place-content-center">
                     <span className="material-icons">close</span>
                  </button>
               </div>
            </motion.div>
         )}
      </AnimatePresence>
   );
}
