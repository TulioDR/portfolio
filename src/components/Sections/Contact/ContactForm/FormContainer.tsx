import useLanguageContext from "@/context/LanguageContext";
import { Form } from "formik";
import { useEffect } from "react";
type Props = {
   formRef: React.RefObject<HTMLFormElement>;
   validateForm: any;
   children: React.ReactNode;
};

export default function FormContainer({
   formRef,
   validateForm,
   children,
}: Props) {
   const { isEnglish } = useLanguageContext();
   useEffect(() => {
      setTimeout(() => validateForm(), 0);
   }, [validateForm, isEnglish]);
   return (
      <Form ref={formRef} className="w-full space-y-4">
         {children}
      </Form>
   );
}
