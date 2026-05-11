import AnimatedLine from "../../../AnimatedLine";
import ContactInput from "./ContactInput";
import useLanguageContext from "@/context/LanguageContext";

type Props = {};

export default function ContactMessage({}: Props) {
   const { language } = useLanguageContext();
   const { subjectTitle, subject, messageTitle, message } =
      language.contact.placeholders;
   return (
      <div className="w-1/2 flex flex-col">
         <div className="w-full h-main-spacing relative">
            <AnimatedLine className="absolute bottom-0" />
            <ContactInput
               name="subject"
               title={subjectTitle}
               placeholder={subject}
            />
         </div>
         <div className="w-full flex-1">
            <ContactInput
               name="message"
               title={messageTitle}
               placeholder={message}
               textarea
            />
         </div>
      </div>
   );
}
