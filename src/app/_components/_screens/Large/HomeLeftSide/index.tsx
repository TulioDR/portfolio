import React from "react";
import HomeCard from "../HomeCard";
import HomeTitle from "./HomeTitle";
import { IconType } from "@/app/_types/IconType";
import useLanguageContext from "@/context/LanguageContext";
import SelectedProjectsButton from "@/app/_components/SelectedProjectsButton";
import { motion } from "framer-motion";

type Props = {
  setSelectedIcon: React.Dispatch<React.SetStateAction<IconType>>;
};

export default function HomeLeftSide({ setSelectedIcon }: Props) {
  const { language } = useLanguageContext();
  const { skills, work } = language.home.panel;

  const setHomeIcon = () => {
    setSelectedIcon("home");
  };

  return (
    <div
      style={{ transformStyle: "preserve-3d" }}
      className="flex-1 h-full flex flex-col gap-4"
    >
      <HomeTitle />
      <HomeCard
        onMouseEnter={() => setSelectedIcon("social_leaderboard")}
        onMouseLeave={setHomeIcon}
        href="/skills"
        text={skills}
        number={1}
      />
      <HomeCard
        onMouseEnter={() => setSelectedIcon("work")}
        onMouseLeave={setHomeIcon}
        href="/work"
        text={work}
        number={2}
      />
      <motion.div style={{ z: 1 }} className=" flex-1 translate-x-16 relative">
        <div className="w-[35vw] h-full absolute top-0 left-0">
          <SelectedProjectsButton
            number={3}
            onMouseEnter={() => setSelectedIcon("trophy")}
            onMouseLeave={setHomeIcon}
          />
        </div>
      </motion.div>
    </div>
  );
}
