import Subtitle from "@/components/Typography/Subtitle";
import SectionHeader from "../SectionHeader";
import useLanguageContext from "@/context/LanguageContext";
import SkillsSlider from "./SkillsSlider";

type Props = {};

export default function SkillsSection({}: Props) {
   const { language } = useLanguageContext();
   const {
      sectionTitle,
      subtitle1,
      paragraph1,
      keywords1,
      subtitle2,
      paragraph2,
      keywords2,
   } = language.skills.skills;

   return (
      <section className="">
         <Subtitle text={sectionTitle} />

         <div className="grid lg:grid-cols-2 gap-10 w-full mt-10 mb-5">
            <div className="w-full xl:w-2/3">
               <SectionHeader
                  subtitle={subtitle1}
                  paragraph={paragraph1}
                  keywords={keywords1}
               />
            </div>
            <div className="w-full xl:w-2/3">
               <SectionHeader
                  subtitle={subtitle2}
                  paragraph={paragraph2}
                  keywords={keywords2}
               />
            </div>
         </div>

         <SkillsSlider />
      </section>
   );
}
