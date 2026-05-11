import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { SentStatusType, ValuesType } from "../_types/ContactFormType";

export default function useFormSubmit() {
   const [sentStatus, setSentStatus] = useState<SentStatusType>(null);
   const [isLoading, setIsLoading] = useState<boolean>(false);

   const formRef = useRef<HTMLFormElement>(null);

   const formSubmit = (_values: ValuesType, { resetForm }: any) => {
      setIsLoading(true);
      emailjs
         .sendForm(
            process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID!,
            process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID!,
            formRef.current!,
            process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY!,
         )
         .then(
            (_result) => {
               resetForm();
               setSentStatus("success");
               setIsLoading(false);
               setTimeout(() => setSentStatus(null), 3000);
            },
            (error) => {
               console.log(error);
               setSentStatus("fail");
               setIsLoading(false);
               setTimeout(() => setSentStatus(null), 5000);
            },
         );
   };

   return { formSubmit, formRef, sentStatus, isLoading };
}
