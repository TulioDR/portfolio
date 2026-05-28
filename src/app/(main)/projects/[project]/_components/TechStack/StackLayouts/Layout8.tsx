import { TechnologyType } from "@/types/TechnologyType";
import StackCard from "../StackCard";

type Props = {
   techStack: TechnologyType[];
};

export default function Layout8({ techStack }: Props) {
   return (
      <div className="flex flex-col w-full items-center ">
         <div className="w-3/5 flex gap-4">
            <StackCard stack={techStack[0]} />
            <StackCard stack={techStack[1]} />
            <StackCard stack={techStack[2]} />
         </div>
         <div className="w-2/5 flex gap-4">
            <StackCard stack={techStack[1]} />
            <StackCard stack={techStack[2]} />
         </div>
         <div className="w-3/5 flex gap-4">
            <StackCard stack={techStack[5]} />
            <StackCard stack={techStack[6]} />
            <StackCard stack={techStack[7]} />
         </div>
      </div>
   );
}
