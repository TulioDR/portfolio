import HomeTitleText from "../../HomeTitleText";
import CircularScreen from "../../CircularScreen";
import { IconType } from "@/app/_types/IconType";
import { useEffect, useState } from "react";
import SmallHomeNameAndSocial from "./SmallHomeNameAndSocial";
import SmallMessage from "./SmallMessage";

const ICONS_ROTATION: IconType[] = [
  "home",
  "social_leaderboard",
  "work",
  "stacks",
  "support_agent",
  "mail",
  "trophy",
];

export default function Small() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        return (prevIndex + 1) % ICONS_ROTATION.length;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const currentIcon = ICONS_ROTATION[currentIndex];

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <>
      <div
        style={{ transformStyle: "preserve-3d" }}
        className="h-full w-full flex flex-col justify-center items-center gap-4 px-4 pb-16 md:pb-32 xl:hidden"
      >
        <div className="w-full text-center flex justify-center">
          <HomeTitleText />
        </div>
        <div
          onPointerEnter={handleMouseEnter}
          onPointerLeave={handleMouseLeave}
          style={{ transformStyle: "preserve-3d" }}
          className="w-full sm:w-60 shrink-0 rounded-full relative pointer-events-auto select-none"
        >
          <CircularScreen selectedIcon={currentIcon} />
          {isHovered && <SmallMessage />}
        </div>
      </div>
      <SmallHomeNameAndSocial />
    </>
  );
}
