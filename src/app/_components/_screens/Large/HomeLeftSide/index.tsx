import React from "react";
import HomeCard from "../HomeCard/HomeCard";
import HomeTitle from "./HomeTitle";
import { IconType } from "@/app/_types/IconType";
import useLanguageContext from "@/context/LanguageContext";
import SelectedProjectsButton from "@/app/_components/SelectedProjectsButton";

type Props = {
   setSelectedIcon: React.Dispatch<React.SetStateAction<IconType>>;
};

export default function HomeLeftSide({ setSelectedIcon }: Props) {
   const { language } = useLanguageContext();
   const { skills, work } = language.home.panel;

   return (
      <div
         style={{ transformStyle: "preserve-3d" }}
         className="flex-1 h-full flex flex-col gap-4 z-10 shrink-0"
      >
         <HomeTitle />
         <HomeCard
            onMouseEnter={() => setSelectedIcon("social_leaderboard")}
            onMouseLeave={() => setSelectedIcon("home")}
            href="/skills"
            text={skills}
            number={1}
         />
         <HomeCard
            onMouseEnter={() => setSelectedIcon("work")}
            onMouseLeave={() => setSelectedIcon("home")}
            href="/work"
            text={work}
            number={2}
         />
         <div
            style={{ transform: `translateZ(${1}px)` }}
            className="w-full flex-1 translate-x-8 relative z-50"
         >
            <div className="w-[35vw] h-full absolute top-0 left-0 min-h-0">
               <SelectedProjectsButton
                  number={3}
                  onMouseEnter={() => setSelectedIcon("trophy")}
                  onMouseLeave={() => setSelectedIcon("home")}
               />
            </div>
         </div>
      </div>
   );
}
