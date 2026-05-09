import Clock from "./Clock";
import Subtitle from "@/components/Subtitle";
import Example from "./Example";
import LearningSpeed from "./LearningSpeed";
import Eyes from "./Eyes";
import WandReveal from "./WandReveal";
import PortalCube from "./PortalCube";
import SectionHeader from "../SectionHeader";
import useLanguageContext from "@/context/LanguageContext";
import CPU from "./CPU";

type Props = {};

export default function StrengthsSection({}: Props) {
   const { language } = useLanguageContext();
   const {
      sectionTitle,
      subtitle1,
      paragraph1,
      keywords1,
      subtitle2,
      paragraph2,
      keywords2,
   } = language.skills.strengths;

   return (
      <section>
         <Subtitle text={sectionTitle} />

         <div className="grid lg:grid-cols-2 gap-10 w-full mt-10 mb-5">
            <div className="w-full sm:w-1/2 lg:w-2/3 flex items-end">
               <Example />
            </div>
            <div className="w-full 2xl:w-2/3 space-y-10">
               <SectionHeader
                  subtitle={subtitle1}
                  paragraph={paragraph1}
                  keywords={keywords1}
               />
               <SectionHeader
                  subtitle={subtitle2}
                  paragraph={paragraph2}
                  keywords={keywords2}
               />
            </div>
         </div>

         <div className="w-full gap-5 grid grid-cols-1 grid-rows-7 sm:grid-cols-2 sm:grid-rows-4 lg:grid-cols-3 lg:grid-rows-3">
            <CPU />
            <LearningSpeed />
            <Eyes />
            <Clock />
            <WandReveal />
            <PortalCube />
         </div>
      </section>
   );
}
