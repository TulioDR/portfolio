import AnimatedLine from "../../../AnimatedLine";
import ContactInput from "./ContactInput";
import useLanguageContext from "@/context/LanguageContext";

type Props = {};

export default function ContactGrid({}: Props) {
   const { language } = useLanguageContext();
   const {
      nameTitle,
      name,
      emailTitle,
      email,
      phoneTitle,
      phone,
      countryTitle,
      country,
   } = language.contact.placeholders;
   return (
      <div className="w-1/2 h-full grid grid-cols-2 grid-rows-2 relative">
         <AnimatedLine
            vertical
            className="absolute left-1/2 -translate-x-1/2"
         />
         <AnimatedLine className="absolute top-1/2 -translate-y-1/2" />
         <ContactInput name="name" title={nameTitle} placeholder={name} />
         <ContactInput name="email" title={emailTitle} placeholder={email} />
         <ContactInput name="phone" title={phoneTitle} placeholder={phone} />
         <ContactInput
            name="location"
            title={countryTitle}
            placeholder={country}
         />
      </div>
   );
}
