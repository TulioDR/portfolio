import React from "react";
import HomeCard from "../HomeCard";
import { IconType } from "@/app/_types/IconType";
import useLanguageContext from "@/context/LanguageContext";
import { motion } from "framer-motion";
import HomeNameAndSocials from "@/app/_components/HomeNameAndSocials";

type Props = {
  setSelectedIcon: React.Dispatch<React.SetStateAction<IconType>>;
};

export default function HomeRightSide({ setSelectedIcon }: Props) {
  const { language } = useLanguageContext();
  const { projects, aboutMe, contact } = language.home.panel;

  const setHomeIcon = () => {
    setSelectedIcon("home");
  };

  return (
    <div
      style={{ transformStyle: "preserve-3d" }}
      className="flex-1 h-full flex flex-col gap-4"
    >
      <HomeCard
        className="-translate-x-16"
        onMouseEnter={() => setSelectedIcon("support_agent")}
        onMouseLeave={setHomeIcon}
        href="/about"
        text={aboutMe}
        number={4}
      />
      <HomeCard
        recommended
        onMouseEnter={() => setSelectedIcon("stacks")}
        onMouseLeave={setHomeIcon}
        href="/projects"
        text={projects}
        number={5}
      />
      <HomeCard
        onMouseEnter={() => setSelectedIcon("mail")}
        onMouseLeave={setHomeIcon}
        href="/contact"
        text={contact}
        number={6}
      />
      <motion.div style={{ z: 1 }} className=" w-full flex-1 relative ">
        <div className="absolute inset-0 -translate-x-16 flex items-center justify-end">
          <HomeNameAndSocials />
        </div>
      </motion.div>
    </div>
  );
}
