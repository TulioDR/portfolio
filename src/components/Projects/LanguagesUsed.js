import { useIdiom } from "context/IdiomContext";
import Language from "./Language";

export default function LanguagesUsed({ showLanguages, languages }) {
   const { currentIdiom } = useIdiom();
   const { languagesUsed } = currentIdiom.projects;
   return (
      <div className={`absolute left-0 bottom-0 w-full overflow-hidden`}>
         <div
            className={`w-full transform duration-300 ${
               showLanguages
                  ? "opacity-100 delay-300"
                  : "translate-y-full opacity-0"
            }`}
         >
            <h2 className="font-semibold text-2xl mb-2">{languagesUsed}</h2>
            <ul className="space-y-1">
               {languages.map((language, index) => (
                  <Language
                     key={index}
                     icon={language.icon}
                     link={language.link}
                  >
                     {language.name}
                  </Language>
               ))}
            </ul>
         </div>
      </div>
   );
}
