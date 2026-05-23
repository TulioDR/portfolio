import { FormikErrors, FormikTouched } from "formik";
import AnimatedText from "@/components/AnimatedText";
import {
   InputNameType,
   ValuesType,
} from "@/app/contact/_types/ContactFormType";

type Props = {
   name: InputNameType;
   errors: FormikErrors<ValuesType>;
   touched: FormikTouched<ValuesType>;
};

export default function ErrorMessage({ name, errors, touched }: Props) {
   return (
      <div className="w-full text-center h-5 flex items-center gap-2 text-xs sm:text-sm text-red-300">
         {touched[name] && errors[name] && (
            <>
               <span className="material-symbols-outlined">warning</span>
               <AnimatedText text={errors[name]} initial />
            </>
         )}
      </div>
   );
}
