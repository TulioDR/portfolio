import Desktop from "./Desktop";
import Mobile from "./Mobile";
import Subtitle from "@/components/Subtitle";
import SectionHeader from "../SectionHeader";
import useLanguageContext from "@/context/LanguageContext";

type Props = {};

export default function Skills({}: Props) {
   const isMobile = false;

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

         {/* {isMobile ? <Mobile /> : <Desktop />} */}
         <Desktop />
      </section>
   );
}
