import useLanguageContext from "@/context/LanguageContext";
import AboutCard from "../../AboutCard";
import Content from "./Content";

type Props = {};

export default function Clock({}: Props) {
   const { language } = useLanguageContext();
   const { title, text } = language.skills.strengths.strengthScreens.clock;

   return (
      <div className="order-2 lg:order-5">
         <AboutCard
            squareScreen
            content={<Content />}
            title={title}
            text={text}
         />
      </div>
   );
}
