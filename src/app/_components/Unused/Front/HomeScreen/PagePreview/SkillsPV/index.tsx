import React from "react";
import PreviewTitle from "../../PreviewTitle";
import AboutCard from "@/modules/skills/components/AboutCard";
import useLanguageContext from "@/context/LanguageContext";

type Props = {};

export default function SkillsPV({}: Props) {
   const { language } = useLanguageContext();
   const { skills, strengths } = language.home.preview;

   return (
      <div className="w-full h-full grid grid-cols-3 grid-rows-3 overflow-hidden gap-2.5 p-5">
         {Array.from({ length: 7 }).map((_, index) => (
            <div
               key={index}
               className={`${index === 0 || index === 6 ? "col-span-2" : ""}`}
            >
               <AboutCard
                  screenOnly
                  content={
                     <div className="w-full h-full flex items-center justify-center bg-gradient-to-tl from-accent to-[#FFF16A]">
                        <PreviewTitle
                           black
                           text={
                              (index === 0 && skills) ||
                              (index === 3 && "&") ||
                              (index === 6 && strengths) ||
                              ""
                           }
                        />
                     </div>
                  }
               />
            </div>
         ))}
      </div>
   );
}
