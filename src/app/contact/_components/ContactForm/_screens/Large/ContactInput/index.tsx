import React from "react";
import Placeholder from "./Placeholder";
import AnimatedText from "@/components/AnimatedText";
import ErrorMessage from "./ErrorMessage";
import { Field, FormikErrors, FormikTouched, useFormikContext } from "formik";
import {
   InputNameModel,
   ValuesModel,
} from "@/modules/contact/models/ContactFormModel";

type Props = {
   name: InputNameModel;
   title: string;
   placeholder: string;
   textarea?: true;
};

export default function ContactInput({
   name,
   title,
   placeholder,
   textarea,
}: Props) {
   const {
      errors,
      touched,
      values,
   }: {
      values: ValuesModel;
      touched: FormikTouched<ValuesModel>;
      errors: FormikErrors<ValuesModel>;
   } = useFormikContext();

   return (
      <div className="flex flex-col w-full h-full px-3 py-2 text-xs xl:text-sm 2xl:text-base">
         <AnimatedText text={title} initial />

         <div className="flex-1 w-full relative ">
            <Field
               name={name}
               as={textarea ? "textarea" : "input"}
               className={`outline-none text-text w-full bg-transparent h-full flex items-center justify-center ${
                  textarea ? "pt-5" : "text-center"
               }`}
               autoComplete="off"
            />
            {values[name].length === 0 && (
               <Placeholder placeholder={placeholder} textarea={textarea} />
            )}
         </div>

         <ErrorMessage errors={errors} touched={touched} name={name} />
      </div>
   );
}
