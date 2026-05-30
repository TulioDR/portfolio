import { ProjectTechnologyType } from "@/types/ProjectType";
import Image from "next/image";

type Props = {
   stack: ProjectTechnologyType;
};

export default function StackCard({ stack }: Props) {
   return (
      <div
         className={`w-full aspect-square flex flex-col gap-2 items-center justify-center rounded-lg bg-white shadow-md p-2
         ${stack.special ? "col-span-2 row-span-2" : ""}
      `}
      >
         <div className="aspect-square w-2/3">
            <Image
               src={stack.logo}
               alt={stack.name}
               className="w-full h-full object-contain"
            />
         </div>
         <span className="text-xs sm:text-sm text-black truncate">
            {stack.name}
         </span>
      </div>
   );
}
