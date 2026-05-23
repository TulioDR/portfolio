import AboutCard from "../../AboutCard";
import Content from "./Content";
import useLanguageContext from "@/context/LanguageContext";

type Props = {};

export default function CPU({}: Props) {
   const { language } = useLanguageContext();
   const { title, text } = language.skills.strengths.strengthScreens.cpu;
   return (
      <div className="order-1">
         <AboutCard
            squareScreen
            content={<Content />}
            title={title}
            text={text}
         />
      </div>
   );
}
