import { InputNameModel, ValuesModel } from "@/models/ContactFormModel";
import { FormikErrors, FormikTouched } from "formik";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

interface Props {
   name: InputNameModel;
   errors: FormikErrors<ValuesModel>;
   touched: FormikTouched<ValuesModel>;
}

export default function InputError({ name, errors, touched }: Props) {
   return (
      <AnimatePresence>
         {touched[name] && errors[name] && (
            <motion.div
               initial={{ height: 0, marginTop: 0 }}
               animate={{ height: "auto", marginTop: 8 }}
               exit={{ height: 0, marginTop: 0 }}
               transition={{ duration: 0.4 }}
               className="overflow-hidden"
            >
               <div className="flex h-max flex-shrink-0 items-center space-x-2 text-red-800 text-xs">
                  <span className="material-icons !text-lg">warning</span>
                  <span>{errors[name]}</span>
               </div>
            </motion.div>
         )}
      </AnimatePresence>
   );
}
