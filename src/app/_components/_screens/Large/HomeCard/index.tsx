import { useState } from "react";
import Tooltip from "./Tooltip";
import AnimatedText from "@/components/AnimatedText";
import RecommendedTooltip from "./RecommendedTooltip";
import { motion, useAnimate } from "framer-motion";
import { HOME_CARD_SELECTOR } from "@/app/_constants/ANIMATION_CLASSNAMES";
import useHomeContext from "@/app/_context/HomeContext";
import Link from "next/link";

type Props = {
  className?: string;
  text: string;
  href: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  number: number;
  recommended?: true;
};

export default function HomeCard({
  recommended,
  className = "",
  text,
  href,
  onMouseEnter,
  onMouseLeave,
  number,
}: Props) {
  const [scope, animate] = useAnimate();
  const [restart, setRestart] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const { exitAnimation } = useHomeContext();

  const handleEnter = () => {
    onMouseEnter();
    setRestart((prev) => !prev);
    setIsHovered(true);
    animate("." + HOME_CARD_SELECTOR, { z: -40 });
  };

  const handleLeave = () => {
    onMouseLeave();
    setIsHovered(false);
    animate("." + HOME_CARD_SELECTOR, { z: 0 });
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    exitAnimation(href);
  };

  return (
    <div
      ref={scope}
      style={{ transformStyle: "preserve-3d" }}
      className={`relative flex-1 ${className}`}
    >
      <motion.div
        initial={{ z: -40 }}
        className={`w-full h-full ${HOME_CARD_SELECTOR}`}
      >
        <div
          className={`w-full h-full rounded-sm flex items-center justify-center shadow-lg
               ${isHovered ? "bg-black text-white" : "text-black bg-white"}
            `}
        >
          {recommended && <RecommendedTooltip />}
          <AnimatedText
            restart={restart}
            text={text}
            className="text-4xl xl:text-2xl 2xl:text-4xl font-black uppercase"
          />
          {isHovered && <Tooltip number={number} />}
        </div>
      </motion.div>
      <Link
        href={href}
        onPointerEnter={handleEnter}
        onPointerLeave={handleLeave}
        onClick={handleClick}
        className="absolute inset-0 pointer-events-auto"
      />
      <motion.div
        style={{ z: -50 }}
        className="absolute inset-0 bg-white/50 rounded-sm shadow-lg"
      />
    </div>
  );
}
