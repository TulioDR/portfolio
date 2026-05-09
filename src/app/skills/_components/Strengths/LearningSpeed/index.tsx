import AboutCard from "../../AboutCard";
import Content from "./Content";
import useLanguageContext from "@/context/LanguageContext";

type Props = {};

export default function LearningSpeed({}: Props) {
   const { language } = useLanguageContext();
   const { title, text } =
      language.skills.strengths.strengthScreens.learningSpeed;

   return (
      <>
         <div className="sm:hidden order-3">
            <AboutCard
               content={<Content />}
               title={title}
               text={text}
               squareScreen
            />
         </div>
         <div className="hidden sm:block sm:col-span-2 order-3 lg:order-2">
            <AboutCard content={<Content />} title={title} text={text} />
         </div>
      </>
   );
}
