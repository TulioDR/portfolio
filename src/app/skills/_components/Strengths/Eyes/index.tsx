import useLanguageContext from "@/context/LanguageContext";
import AboutCard from "../../AboutCard";
import Content from "./Content";

export default function Eyes() {
   const { language } = useLanguageContext();
   const { title, text } = language.skills.strengths.strengthScreens.eyes;

   return (
      <div className="order-5 lg:order-4">
         <AboutCard
            squareScreen
            content={<Content />}
            title={title}
            text={text}
         />
      </div>
   );
}
