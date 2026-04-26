import ContactTR from "@/translations/types/ContactTR";

const contactTR: ContactTR = {
   textScroll: "Contáctame",
   title: "Trabajemos juntos",
   byEmail: "Por Email",
   byLinkedin: "En LinkedIn",
   byGithub: "En Github",
   placeholders: {
      nameTitle: "Nombre",
      name: "Escribe tu nombre aquí",
      emailTitle: "Correo",
      email: "Escribe tu correo aquí",
      phoneTitle: "Teléfono (opcional)",
      phone: "Escribe tu teléfono aquí",
      countryTitle: "País / Estado (opcional)",
      country: "Escribe tu país / estado aquí",
      subjectTitle: "Asunto (opcional)",
      subject: "Escribe tu asunto aquí",
      messageTitle: "Mensage",
      message: "Escribe tu mensage aquí",
   },
   errors: {
      noName: "Por favor escribe tu nombre",
      invalidName: "Solo debería contener letras y espacios",
      noEmail: "Por favor añade tu correo",
      invalidEmail: "Correo inválido",
      noMessage: "Por favor escribe un mensaje",
   },
   send: "Enviar",
   successMessage: "Correo enviado con éxito",
   errorMessage:
      "Algo salió mal, inténtalo de nuevo más tarde o contáctame directamente por correo",
};
export default contactTR;
