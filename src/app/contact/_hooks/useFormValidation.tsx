import useLanguageContext from "@/context/LanguageContext";
import { ContactErrorsModel, ValuesModel } from "../models/ContactFormModel";

export default function useFormValidation() {
   const { language: currentLanguage } = useLanguageContext();
   const { noName, invalidName, noEmail, invalidEmail, noMessage } =
      currentLanguage.contact.errors;

   const checkName = (name: string): boolean => {
      return /^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(name);
   };
   const checkEmail = (email: string): boolean => {
      return /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email);
   };

   const formValidation = (values: ValuesModel) => {
      let errors: ContactErrorsModel = {};
      const { name, email, message } = values;

      if (!name) errors.name = noName;
      else if (!checkName(name)) errors.name = invalidName;

      if (!email) errors.email = noEmail;
      else if (!checkEmail(email)) errors.email = invalidEmail;

      if (!message) errors.message = noMessage;

      return errors;
   };
   return { formValidation };
}
