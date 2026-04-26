export default interface ContactTR {
   textScroll: string;
   title: string;
   byEmail: string;
   byLinkedin: string;
   byGithub: string;
   placeholders: {
      nameTitle: string;
      name: string;
      emailTitle: string;
      email: string;
      phoneTitle: string;
      phone: string;
      countryTitle: string;
      country: string;
      subjectTitle: string;
      subject: string;
      messageTitle: string;
      message: string;
   };
   errors: {
      noName: string;
      invalidName: string;
      noEmail: string;
      invalidEmail: string;
      noMessage: string;
   };
   send: string;
   successMessage: string;
   errorMessage: string;
}
