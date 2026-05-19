import useLanguageContext from "@/context/LanguageContext";
import PhaseType from "../_types/PhaseType";
import { ABOUT_ICON } from "@/constants/ICONS";

export default function useTimelinePhases() {
   const { language } = useLanguageContext();

   const {} = language.about;

   const PHASES: PhaseType[] = [
      {
         id: 1,
         icon: ABOUT_ICON,
         title: "",
         desc: "",
      },
      {
         id: 2,
         icon: "rocket",
         title: "Discovery",
         desc: "Understanding the core problems and user needs.",
      },
      {
         id: 3,
         icon: "rocket_launch",
         title: "Strategy",
         desc: "Defining the technical architecture and roadmap.",
      },
      {
         id: 4,
         icon: "code",
         title: "Execution",
         desc: "Building the high-fidelity system with precision.",
      },
      {
         id: 5,
         icon: "function",
         title: "Optimization",
         desc: "Refining performance and scaling the solution.",
      },
   ];

   return { PHASES };
}
