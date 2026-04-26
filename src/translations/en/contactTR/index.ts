import ContactTR from "@/translations/types/ContactTR";

const contactTR: ContactTR = {
   textScroll: "Contact me",
   title: "Let's work together",
   byEmail: "By Email",
   byLinkedin: "On LinkedIn",
   byGithub: "On Github",
   placeholders: {
      nameTitle: "Name",
      name: "Type your name here",
      emailTitle: "Email",
      email: "Type your email here",
      phoneTitle: "Phone Number (optional)",
      phone: "Type your phone number here",
      countryTitle: "Country / Estate (optional)",
      country: "Type your country / estate here",
      subjectTitle: "Subject (optional)",
      subject: "Type your subject here",
      messageTitle: "Message",
      message: "Type your message here",
   },
   errors: {
      noName: "Please type your name",
      invalidName: "It should only contain letters and space",
      noEmail: "Please add your email",
      invalidEmail: "Invalid Email",
      noMessage: "Please write a message",
   },
   send: "Send",
   successMessage: "Email sent successfully",
   errorMessage:
      "Something went wrong, try again later or message me directly by email.",
};
export default contactTR;
