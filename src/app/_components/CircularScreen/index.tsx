import { IconType } from "@/app/_types/IconType";
import { motion } from "framer-motion";
import {
  CIRCULAR_SELECTOR,
  ICON_SELECTOR,
} from "@/app/_constants/ANIMATION_CLASSNAMES";
import HomeIcon from "./HomeIcont";
import ContactIcon from "./ContactIcon";
import ProjectsIcon from "./ProjectsIcon";
import AboutIcon from "./AboutIcon";
import SkillsIcon from "./SkillsIcon";
import WorkIcon from "./WorkIcon";
import SelectedProjcetsIcon from "./SelectedProjetsIcon";
type Props = {
  selectedIcon: IconType;
};

export default function CircularScreen({ selectedIcon }: Props) {
  let currentIcon: IconType = selectedIcon;

  return (
    <div
      style={{ transformStyle: "preserve-3d" }}
      className="h-full aspect-square relative"
    >
      <motion.div
        initial={{ scale: 0 }}
        style={{ z: -45 }}
        className={`absolute -inset-15 xl:inset-[-30%] rounded-full border-2 border-accent ${CIRCULAR_SELECTOR}`}
      />
      <motion.div
        initial={{ scale: 0 }}
        style={{ z: -75 }}
        className={`absolute inset-[-60%] rounded-full border-2 border-black ${CIRCULAR_SELECTOR}`}
      />
      <motion.div
        style={{ z: -50 }}
        className="absolute inset-0 rounded-full bg-gray-100 shadow-xl"
      />

      <div
        style={{ transformStyle: "preserve-3d" }}
        className="h-full aspect-square p-4 bg-white rounded-full border border-gray-300"
      >
        <div
          style={{ transformStyle: "preserve-3d" }}
          className="h-full w-full border-16 border-black bg-primary rounded-full"
        >
          <div
            style={{ transformStyle: "preserve-3d" }}
            className="w-full h-full rounded-full border border-slate-700 relative flex items-center justify-center"
          >
            <motion.div
              key={currentIcon}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ duration: 0.1 }}
              style={{ transformStyle: "preserve-3d" }}
              className={`absolute inset-0 flex items-center justify-center scale-30 xl:scale-50 2xl:scale-100 ${ICON_SELECTOR}`}
            >
              {currentIcon === "home" && <HomeIcon />}
              {currentIcon === "mail" && <ContactIcon />}
              {currentIcon === "stacks" && <ProjectsIcon />}
              {currentIcon === "support_agent" && <AboutIcon />}
              {currentIcon === "social_leaderboard" && <SkillsIcon />}
              {currentIcon === "work" && <WorkIcon />}
              {currentIcon === "trophy" && <SelectedProjcetsIcon />}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
