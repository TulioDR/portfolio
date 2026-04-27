import PanelButton from "./PanelButton";
import useLanguageContext from "@/context/LanguageContext";

type Props = {};

export default function PanelButtons({}: Props) {
   const { language } = useLanguageContext();
   const { skills, projects, aboutMe, contact, work } = language.home.panel;

   return (
      <div className="flex flex-col">
         <PanelButton href="/skills" text={skills} number={1} />
         <PanelButton href="/work" text={work} number={2} />
         <PanelButton href="/projects" text={projects} number={3} />
         <PanelButton href="/about" text={aboutMe} number={4} />
         <PanelButton href="/contact" text={contact} number={5} />
      </div>
   );
}
