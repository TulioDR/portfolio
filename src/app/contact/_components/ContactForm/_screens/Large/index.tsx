import Container from "./Container";
import ContactGrid from "./ContactGrid";
import ContactMessage from "./ContactMessage";
import ContactSendButton from "./ContactSendButton";
import { Form, Formik } from "formik";
import SocialButtons from "./SocialButtons";
import { ValuesType } from "@/app/contact/_types/ContactFormType";
import useFormSubmit from "@/app/contact/_hooks/useFormSubmit";
import useFormValidation from "@/app/contact/_hooks/useFormValidation";
import AnimatedLine from "../../../AnimatedLine";
import ValidateOnLanguageChange from "../../ValidateOnLanguageChange";

export default function Large() {
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
         <Container>
            <ValidateOnLanguageChange />
            <Form
               ref={formRef}
               className="h-full w-full flex flex-col relative"
            >
               <SocialButtons />
               <div className="w-full flex-1 flex relative">
                  <AnimatedLine
                     vertical
                     className="absolute top-0 right-1/2 -translate-x-1/2 h-full"
                  />
                  <ContactGrid />
                  <ContactMessage />
               </div>
               <ContactSendButton
                  sentStatus={sentStatus}
                  isLoading={isLoading}
               />
            </Form>
         </Container>
      </Formik>
   );
}
