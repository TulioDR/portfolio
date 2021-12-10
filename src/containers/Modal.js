import { Formik, Form, Field, ErrorMessage } from "formik";
import ModalButton from "components/Modal/ModalButton";
import Message from "components/Modal/Message";
import Input from "components/Modal/Input";
import ModalContainer from "components/Modal/ModalContainer";
import { useState, useRef } from "react";
import PopUpMessage from "components/Modal/PopUpMessage";
import emailjs from "emailjs-com";

import { useIdiom } from "context/IdiomContext";
import { useModalState } from "context/ModalStateContext";

const initialState = {
   name: "",
   email: "",
   subject: "",
   message: "",
};

export default function Modal() {
   const { open, closeModal } = useModalState();

   const formRef = useRef();

   const { currentIdiom } = useIdiom();
   const {
      contactMe,
      text,
      yourName,
      yourEmail,
      yourSubject,
      yourMessage,
      send,
      close,
      errors,
      successMessage,
      errorMessage,
   } = currentIdiom.contact;

   const { noName, invalidName, noEmail, invalidEmail, noMessage } = errors;

   const checkName = (name) => {
      return /^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(name);
   };
   const checkEmail = (email) => {
      return /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email);
   };

   const validation = (value) => {
      let errors = {};

      if (!value.name) errors.name = noName;
      else if (!checkName(value.name)) errors.name = invalidName;

      if (!value.email) errors.email = noEmail;
      else if (!checkEmail(value.email)) errors.email = invalidEmail;

      if (!value.message) errors.message = noMessage;

      return errors;
   };

   const [sendedSuccess, setSendedSuccess] = useState(false);
   const [sendedFailure, setSendedFailure] = useState(false);
   const sendEmail = (values, { resetForm }) => {
      // console.log(values)
      emailjs
         .sendForm(
            "service_fymznpj",
            "template_ofqwlln",
            formRef.current,
            "user_mvQRJT66Jo5iV2wLooffv"
         )
         .then(
            (result) => {
               console.log(result);
               resetForm();
               setSendedSuccess(true);
               setTimeout(() => setSendedSuccess(false), 5000);
            },
            (error) => {
               console.log(error);
               setSendedFailure(true);
               setTimeout(() => setSendedFailure(false), 5000);
            }
         );
   };

   return (
      <ModalContainer open={open}>
         <div className="text-3xl font-bold mb-2 text-black dark:text-white">
            {contactMe}
         </div>
         <div className="text-gray-700 dark:text-gray-300 mb-6">
            <span>{text}</span>
            <a
               href="mailto:tulioruzo29@gmail.com"
               className="font-medium text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-500 ml-1"
            >
               tulioruzo29@gmail.com
            </a>
            <span>.</span>
         </div>
         <Formik
            initialValues={initialState}
            validate={validation}
            onSubmit={sendEmail}
         >
            {() => (
               <Form ref={formRef} className="flex flex-col space-y-6">
                  <div className="space-y-6 md:space-y-0 md:flex md:space-x-6">
                     <div className="flex flex-col w-full">
                        <Input placeholder={yourName} name="name" />
                        <ErrorMessage name="name">
                           {(msg) => <Message>{msg}</Message>}
                        </ErrorMessage>
                     </div>

                     <div className="flex flex-col w-full">
                        <Input placeholder={yourEmail} name="email" email />
                        <ErrorMessage name="email">
                           {(msg) => <Message>{msg}</Message>}
                        </ErrorMessage>
                     </div>
                  </div>
                  <Input placeholder={yourSubject} name="subject" />
                  <div className="flex flex-col w-full">
                     <Field
                        as="textarea"
                        placeholder={yourMessage}
                        name="message"
                        cols="30"
                        rows="6"
                        className="shadow-md rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
                     />
                     <ErrorMessage name="message">
                        {(msg) => <Message>{msg}</Message>}
                     </ErrorMessage>
                  </div>
                  <div className="flex justify-end space-x-5">
                     <ModalButton submit>{send}</ModalButton>
                     <ModalButton onClick={closeModal}>{close}</ModalButton>
                  </div>
               </Form>
            )}
         </Formik>
         <PopUpMessage status={sendedSuccess} success>
            {successMessage}
         </PopUpMessage>
         <PopUpMessage status={sendedFailure} error>
            {errorMessage}
         </PopUpMessage>
      </ModalContainer>
   );
}
