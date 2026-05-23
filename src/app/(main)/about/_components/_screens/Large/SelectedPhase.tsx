import PhaseType from "@/app/about/_types/PhaseType";
import AnimatedText from "@/components/AnimatedText";

type Props = {
   phase: PhaseType;
};

export default function SelectedPhase({ phase }: Props) {
   return (
      <div className="w-full xl:w-4/5 2xl:w-3/5 flex flex-col">
         <AnimatedText
            initial
            text={phase.title}
            className="lg:text-xl xl:text-2xl 2xl:text-3xl text-center uppercase pb-8"
         />
         <div className="w-full flex flex-col gap-4 lg:text-xs xl:text-sm 2xl:text-base">
            <AnimatedText initial text={phase.desc1} />
            <AnimatedText initial text={phase.desc2} />
         </div>
      </div>
   );
}
