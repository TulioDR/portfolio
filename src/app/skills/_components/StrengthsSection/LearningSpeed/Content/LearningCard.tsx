import SkillModel from "@/models/SkillModel";
import Image from "next/image";
import React from "react";

type Props = {
   skill: SkillModel;
};

export default function LearningCard({ skill }: Props) {
   return (
      <div className="h-full aspect-square rounded-2xl bg-gray-400">
         <div className="w-full h-full flex flex-col items-center justify-center">
            <div className="relative w-1/2 aspect-square">
               <Image
                  src={skill.logo}
                  alt={skill.name}
                  fill
                  sizes="100%"
                  className="object-contain"
               />
            </div>
            <span className="text-black text-center font-semibold text-sm md:text-lg xl:text-2xl">
               {skill.name}
            </span>
         </div>
      </div>
   );
}
