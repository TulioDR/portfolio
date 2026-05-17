import SelectedProjectsButton from "@/app/_components/SelectedProjectsButton";
import PanelButton from "./PanelButton";
import useLanguageContext from "@/context/LanguageContext";

type Props = {};

export default function Small({}: Props) {
   const { language } = useLanguageContext();
   const { skills, projects, aboutMe, contact, work } = language.home.panel;

   return (
      <div className="w-full h-full border border-line bg-white flex flex-col items-center justify-center overflow-hidden px-20">
         <div className="flex flex-col overflow-hidden ">
            <PanelButton href="/skills" text={skills} number={1} />
            <PanelButton href="/work" text={work} number={2} />
            <PanelButton href="/projects" text={projects} number={3} />
            <PanelButton href="/about" text={aboutMe} number={4} />
            <PanelButton href="/contact" text={contact} number={5} />
         </div>
         <div className="w-full md:w-96 h-32 overflow-hidden">
            <SelectedProjectsButton number={6} />
         </div>
      </div>
   );
}
