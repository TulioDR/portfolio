import { TechnologyType } from "@/types/TechnologyType";
import Subtitle from "@/components/Typography/Subtitle";
import StackCard from "./StackCard";
import useLanguageContext from "@/context/LanguageContext";

type Props = {
   techStack: TechnologyType[];
};

export default function TechStack({ techStack }: Props) {
   const { language } = useLanguageContext();

   const { technologiesUsed } = language.projectDetails;

   return (
      <div className="flex flex-col gap-4">
         <Subtitle text={technologiesUsed} blackText />
         <div className="w-full grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-2 grid-flow-dense">
            {techStack.map((stack) => (
               <StackCard key={stack.name} stack={stack} />
            ))}
         </div>
      </div>
   );
}
