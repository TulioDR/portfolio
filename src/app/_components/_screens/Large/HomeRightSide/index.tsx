import React from "react";
import HomeCard from "../HomeCard";
import HomeNameAndSocials from "./HomeNameAndSocials";
import { IconType } from "@/app/_types/IconType";
import useLanguageContext from "@/context/LanguageContext";

type Props = {
   setSelectedIcon: React.Dispatch<React.SetStateAction<IconType>>;
};

export default function HomeRightSide({ setSelectedIcon }: Props) {
   const { language } = useLanguageContext();
   const { projects, aboutMe, contact } = language.home.panel;

   return (
      <div
         style={{ transformStyle: "preserve-3d" }}
         className="flex-1 h-full flex flex-col gap-4 py-24 shrink-0"
      >
         <HomeCard
            className="-translate-x-16"
            onMouseEnter={() => setSelectedIcon("support_agent")}
            onMouseLeave={() => setSelectedIcon("home")}
            href="/about"
            text={aboutMe}
            number={4}
         />
         <HomeCard
            recommended
            onMouseEnter={() => setSelectedIcon("stacks")}
            onMouseLeave={() => setSelectedIcon("home")}
            href="/projects"
            text={projects}
            number={5}
         />
         <HomeCard
            onMouseEnter={() => setSelectedIcon("mail")}
            onMouseLeave={() => setSelectedIcon("home")}
            href="/contact"
            text={contact}
            number={6}
         />
         <HomeNameAndSocials />
      </div>
   );
}
