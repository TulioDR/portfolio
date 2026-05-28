import { TechnologyType } from "@/types/TechnologyType";
import Layout8 from "./StackLayouts/Layout8";
import Layout16 from "./StackLayouts/Layout16";
import Subtitle from "@/components/Typography/Subtitle";

type Props = {
   techStack: TechnologyType[];
};

export default function TechStack({ techStack }: Props) {
   const { length } = techStack;
   return (
      <div className="flex flex-col gap-4">
         <Subtitle text="Technologies used" blackText />
         <div className="w-full ">
            {length === 8 && <Layout8 techStack={techStack} />}
            {length === 16 && <Layout16 techStack={techStack} />}
         </div>
      </div>
   );
}
