import useLanguageContext from "@/context/LanguageContext";
import Hexagon from "./Hexagon";

import gmailLogoWhite from "@/assets/images/contact/gmail-white.svg";
import githubLogoWhite from "@/assets/images/contact/github-white.svg";
import linkedinLogoWhite from "@/assets/images/contact/linkedin-white.svg";

import gmailLogoOrange from "@/assets/images/contact/gmail-orange.svg";
import githubLogoOrange from "@/assets/images/contact/github-orange.svg";
import linkedinLogoOrange from "@/assets/images/contact/linkedin-orange.svg";

interface Props {
   nameInputRef: React.RefObject<HTMLInputElement>;
}

export default function ContactInfo({ nameInputRef }: Props) {
   const { currentLanguage } = useLanguageContext();
   const { contactMeAt } = currentLanguage.contact;

   const openLink = (link: string) => window.open(link, "_blank");
   const gmailLink = "mailto:tulioruzo29@gmail.com";
   const linkedinLink = "https://www.linkedin.com/in/tulio-ruzo/";
   const githubLink = "https://github.com/TulioDR";

   const focusContactForm = () => nameInputRef.current!.focus();

   return (
      <div className="flex justify-center items-center">
         <div className="w-full sm:w-auto">
            <div className="flex space-x-4">
               <Hexagon>{contactMeAt}</Hexagon>
               <Hexagon
                  src={gmailLogoWhite}
                  hoverSrc={gmailLogoOrange}
                  onClick={() => openLink(gmailLink)}
               >
                  Gmail
               </Hexagon>
               <Hexagon onClick={focusContactForm}>
                  <div>Send a message</div>
                  <span className="material-icons !rotate-90 lg:!rotate-0">
                     arrow_right_alt
                  </span>
               </Hexagon>
            </div>
            <div className="flex justify-center space-x-4 -translate-y-4">
               <Hexagon
                  src={linkedinLogoWhite}
                  hoverSrc={linkedinLogoOrange}
                  onClick={() => openLink(linkedinLink)}
               >
                  LinkedIn
               </Hexagon>
               <Hexagon
                  src={githubLogoWhite}
                  hoverSrc={githubLogoOrange}
                  onClick={() => openLink(githubLink)}
               >
                  Github
               </Hexagon>
            </div>
         </div>
      </div>
   );
}
