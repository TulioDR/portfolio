import SendButton from "./SendButton";
import Input from "./Input";
import { Formik } from "formik";
import { ValuesModel } from "@/models/ContactFormModel";
import SentStatus from "./SentStatus";
import useLanguageContext from "@/context/LanguageContext";
import useFormValidation from "@/hooks/useFormValidation";
import useFormSubmit from "@/hooks/useFormSubmit";
import FormContainer from "./FormContainer";

interface Props {
   nameInputRef: React.RefObject<HTMLInputElement>;
}

export default function ContactForm({ nameInputRef }: Props) {
   const initialValues: ValuesModel = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
   };

   const { formValidation } = useFormValidation();
   const { formSubmit, formRef, sentStatus, setSentStatus } = useFormSubmit();

   const { language } = useLanguageContext();
   const { firstName, lastName, email, phone, message } =
      language.contact.placeholders;
   return (
      <>
         <SentStatus sentStatus={sentStatus} setSentStatus={setSentStatus} />
         <Formik
            initialValues={initialValues}
            validate={formValidation}
            onSubmit={formSubmit}
         >
            {({ errors, touched, validateForm }) => (
               <FormContainer formRef={formRef} validateForm={validateForm}>
                  <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
                     <Input
                        name="firstName"
                        nameInputRef={nameInputRef}
                        placeholder={firstName}
                        errors={errors}
                        touched={touched}
                     />
                     <Input
                        name="lastName"
                        placeholder={lastName}
                        errors={errors}
                        touched={touched}
                     />
                     <Input
                        name="email"
                        placeholder={email}
                        errors={errors}
                        touched={touched}
                     />
                     <Input
                        name="phone"
                        placeholder={phone}
                        errors={errors}
                        touched={touched}
                     />
                  </div>
                  <Input
                     name="message"
                     textarea
                     placeholder={message}
                     errors={errors}
                     touched={touched}
                  />
                  <SendButton />
               </FormContainer>
            )}
         </Formik>
      </>
   );
}
