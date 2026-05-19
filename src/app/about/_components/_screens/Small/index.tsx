import useTimelinePhases from "@/app/about/_hooks/useTimelinePhases";
import PageHeader from "./PageHeader";
import Phase from "./Phase";
import ScrollIndicator from "./ScrollIndicator";
import FinalMessage from "./FinalMessage";

type Props = {};

export default function Small({}: Props) {
   const { PHASES } = useTimelinePhases();

   return (
      <div className="w-full px-4">
         <PageHeader />
         <div className="w-full relative flex flex-col gap-16">
            <ScrollIndicator />

            {PHASES.map((phase, index) => {
               if (index !== 0)
                  return (
                     <Phase
                        key={index}
                        reverse={index % 2 !== 0}
                        phase={phase}
                     />
                  );
            })}

            <FinalMessage />
         </div>
      </div>
   );
}
