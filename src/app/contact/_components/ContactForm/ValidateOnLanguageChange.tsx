import useLanguageContext from "@/context/LanguageContext";
import { useFormikContext } from "formik";
import { useEffect } from "react";

type Props = {};

export default function ValidateOnLanguageChange({}: Props) {
   const { validateForm } = useFormikContext();
   const { isEnglish } = useLanguageContext();
   useEffect(() => {
      setTimeout(() => validateForm(), 0);
   }, [validateForm, isEnglish]);
   return <></>;
}
