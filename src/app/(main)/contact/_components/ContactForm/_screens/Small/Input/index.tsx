import Placeholder from "./Placeholder";
import { Field, FormikErrors, FormikTouched, useFormikContext } from "formik";

import BorderLines from "./BorderLines";
import ErrorMessage from "./ErrorMessage";
import {
   InputNameType,
   ValuesType,
} from "@/app/(main)/contact/_types/ContactFormType";
import { useEffect } from "react";
import { stagger, useAnimate } from "framer-motion";
import { LINE_SELECTOR } from "@/app/(main)/contact/_constants/LINE_SELECTOR";

type Props = {
   name: InputNameType;
   placeholder: string;
   textarea?: true;
};

export default function Input({ placeholder, textarea, name }: Props) {
   const {
      errors,
      touched,
      values,
   }: {
      values: ValuesType;
      touched: FormikTouched<ValuesType>;
      errors: FormikErrors<ValuesType>;
   } = useFormikContext();

   const [scope, animate] = useAnimate();
   useEffect(() => {
      const DURATION = 1 / 4;
      const startAnimation = async () => {
         animate(
            "." + LINE_SELECTOR,
            { width: "100%", height: "100%" },
            { duration: DURATION, delay: stagger(DURATION) },
         );
      };
      startAnimation();
   }, [animate, LINE_SELECTOR]);

   return (
      <div
         ref={scope}
         className={`w-full text-xs relative px-4 ${
            textarea ? "h-64" : "h-16"
         }`}
      >
         <BorderLines />
         <div className="w-full h-full relative">
            <Field
               name={name}
               as={textarea ? "textarea" : "input"}
               autoComplete="off"
               className={`outline-none bg-transparent w-full h-full ${
                  textarea ? "pt-5" : ""
               }`}
            />
            {values[name].length === 0 && (
               <Placeholder text={placeholder} textarea={textarea} />
            )}
         </div>
         {touched[name] && errors[name] && <ErrorMessage text={errors[name]} />}
      </div>
   );
}
