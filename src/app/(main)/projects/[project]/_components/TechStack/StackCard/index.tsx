import { TechnologyType } from "@/types/TechnologyType";
import Image from "next/image";

type Props = {
   stack: TechnologyType;
};

export default function StackCard({ stack }: Props) {
   return (
      <div className="w-full p-2">
         <div className="flex-1 rounded-lg flex flex-col gap-2 items-center justify-center bg-white shadow-md p-4">
            <div className="aspect-square h-20">
               <Image
                  src={stack.logo}
                  alt={stack.name}
                  className="w-full h-full object-contain"
               />
            </div>
            <span className="text-xs sm:text-sm text-black">{stack.name}</span>
         </div>
      </div>
   );
}
