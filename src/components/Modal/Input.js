import { Field } from "formik";

export default function Input({ placeholder, email, name }) {
   return (
      <Field
         type={email ? "email" : "text"}
         placeholder={placeholder}
         name={name}
         autoComplete="off"
         className="w-full h-12 shadow-md rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
   );
}
