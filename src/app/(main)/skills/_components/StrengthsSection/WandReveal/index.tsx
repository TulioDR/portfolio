import AboutCard from "../../AboutCard";
import Content from "./Content";
import useLanguageContext from "@/context/LanguageContext";

type Props = {};

export default function WandReveal({}: Props) {
   const { language } = useLanguageContext();
   const { title, text } = language.skills.strengths.strengthScreens.wandReveal;
   return (
      <>
         <div className="order-5 sm:order-6 lg:hidden">
            <AboutCard
               content={<Content />}
               title={title}
               text={text}
               squareScreen
            />
         </div>
         <div className="order-5 hidden lg:block lg:col-span-2 sm:order-6">
            <AboutCard content={<Content />} title={title} text={text} />
         </div>
      </>
   );
}
