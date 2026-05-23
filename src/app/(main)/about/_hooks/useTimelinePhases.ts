import useLanguageContext from "@/context/LanguageContext";
import PhaseType from "../_types/PhaseType";
import { ABOUT_ICON } from "@/constants/ICONS";

export default function useTimelinePhases() {
   const { language } = useLanguageContext();

   const { phase1, phase2, phase3, phase4 } = language.about;

   const PHASES: PhaseType[] = [
      { icon: ABOUT_ICON, title: "first", desc1: "", desc2: "" },
      {
         icon: "workspace_premium",
         title: phase1.title,
         desc1: phase1.desc1,
         desc2: phase1.desc2,
      },
      {
         icon: "engineering",
         title: phase2.title,
         desc1: phase2.desc1,
         desc2: phase2.desc2,
      },
      {
         icon: "terminal",
         title: phase3.title,
         desc1: phase3.desc1,
         desc2: phase3.desc2,
      },
      {
         icon: "rocket_launch",
         title: phase4.title,
         desc1: phase4.desc1,
         desc2: phase4.desc2,
      },
   ];

   return { PHASES };
}
