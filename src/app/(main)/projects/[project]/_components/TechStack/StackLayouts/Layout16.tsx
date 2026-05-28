import { TechnologyType } from "@/types/TechnologyType";
import StackCard from "../StackCard";

type Props = {
   techStack: TechnologyType[];
};

export default function Layout16({ techStack }: Props) {
   return (
      <div className="flex flex-col w-full items-center">
         <div className="w-full flex">
            <StackCard stack={techStack[0]} />
            <StackCard stack={techStack[1]} />
            <StackCard stack={techStack[2]} />
            <StackCard stack={techStack[3]} />
            <StackCard stack={techStack[4]} />
            <StackCard stack={techStack[5]} />
         </div>
         <div className="w-4/6 flex">
            <StackCard stack={techStack[6]} />
            <StackCard stack={techStack[7]} />
            <StackCard stack={techStack[8]} />
            <StackCard stack={techStack[9]} />
         </div>
         <div className="w-full flex">
            <StackCard stack={techStack[10]} />
            <StackCard stack={techStack[11]} />
            <StackCard stack={techStack[12]} />
            <StackCard stack={techStack[13]} />
            <StackCard stack={techStack[14]} />
            <StackCard stack={techStack[15]} />
         </div>
      </div>
   );
}
