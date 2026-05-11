import PageTitle from "@/components/PageTitle";
import Input from "./Input";
import useLanguageContext from "@/context/LanguageContext";
import { Form, Formik } from "formik";
import SendButton from "./SendButton";
import StatusModal from "./StatusModal";
import { AnimatePresence } from "framer-motion";
import Socials from "@/components/Socials";
import { ValuesType } from "@/app/contact/_types/ContactFormType";
import useFormValidation from "@/app/contact/_hooks/useFormValidation";
import useFormSubmit from "@/app/contact/_hooks/useFormSubmit";
import ValidateOnLanguageChange from "../../ValidateOnLanguageChange";

type Props = {};

export default function Small({}: Props) {
   const { language } = useLanguageContext();
   const {
      nameTitle,
      emailTitle,
      phoneTitle,
      countryTitle,
      subjectTitle,
      messageTitle,
   } = language.contact.placeholders;

   const initialValues: ValuesType = {
      name: "",
      email: "",
      phone: "",
      location: "",
      subject: "",
      message: "",
   };

   const { formValidation } = useFormValidation();
   const { formSubmit, formRef, sentStatus, isLoading } = useFormSubmit();

   return (
      <Formik
         initialValues={initialValues}
         validate={formValidation}
         onSubmit={formSubmit}
      >
         <Form
            ref={formRef}
            className="px-4 py-24 flex flex-col items-start gap-5"
         >
            <ValidateOnLanguageChange />
            <PageTitle title="Contact me" className="text-left" />
            <div className="w-full flex justify-center">
               <Socials tooltipPosition="top" className="gap-4" white />
            </div>

            <div className="w-full grid gap-5 md:grid-cols-2">
               <Input name="name" placeholder={nameTitle} />
               <Input name="email" placeholder={emailTitle} />
               <Input name="phone" placeholder={phoneTitle} />
               <Input name="location" placeholder={countryTitle} />
               <div className="md:col-span-2">
                  <Input name="subject" placeholder={subjectTitle} />
               </div>
               <div className="md:col-span-2">
                  <Input name="message" placeholder={messageTitle} textarea />
               </div>
            </div>
            <div className="flex justify-end w-full">
               <SendButton />
            </div>
            <AnimatePresence>
               {(isLoading || sentStatus) && (
                  <StatusModal sentStatus={sentStatus} />
               )}
            </AnimatePresence>
         </Form>
      </Formik>
   );
}
