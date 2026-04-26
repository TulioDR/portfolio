import { useState } from "react";
import InputBorder from "./InputBorder";
import InputError from "./InputError";
import { Field, FormikErrors, FormikTouched } from "formik";
import { InputNameModel, ValuesModel } from "@/models/ContactFormModel";

interface Props {
   name: InputNameModel;
   textarea?: true;
   placeholder: string;
   nameInputRef?: React.RefObject<HTMLInputElement>;
   errors: FormikErrors<ValuesModel>;
   touched: FormikTouched<ValuesModel>;
}

export default function Input({
   name,
   textarea,
   placeholder,
   nameInputRef,
   errors,
   touched,
}: Props) {
   const [isOnFocus, setIsOnFocus] = useState<boolean>(false);

   return (
      <div>
         <div className={`relative ${textarea ? "h-32" : ""}`}>
            <Field
               innerRef={nameInputRef}
               name={name}
               as={textarea ? "textarea" : "input"}
               className={`w-full h-full outline-none text-xs sm:text-sm bg-main-white text-black px-5 py-3`}
               placeholder={placeholder}
               autoComplete="off"
            />
            <InputBorder isOnFocus={isOnFocus} />
         </div>
         <InputError name={name} errors={errors} touched={touched} />
      </div>
   );
}
