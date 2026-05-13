import useLanguageContext from "@/context/LanguageContext";

export default function useTimelinePhases() {
   const { language } = useLanguageContext();

   const {} = language.about;

   const PHASES = [
      {
         id: 1,
         title: "Discovery",
         desc: "Understanding the core problems and user needs.",
      },
      {
         id: 2,
         title: "Strategy",
         desc: "Defining the technical architecture and roadmap.",
      },
      {
         id: 3,
         title: "Execution",
         desc: "Building the high-fidelity system with precision.",
      },
      {
         id: 4,
         title: "Optimization",
         desc: "Refining performance and scaling the solution.",
      },
   ];

   return { PHASES };
}
