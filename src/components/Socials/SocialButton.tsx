import MainTooltip from "@/components/MainTooltip";
import { socialModel } from "@/constants/SOCIALS";
import { useState } from "react";

type Props = {
   social: socialModel;
   top?: true;
   bottom?: true;
   left?: true;
   right?: true;
   white?: true;
};

export default function SocialButton({
   social,
   top,
   bottom,
   left,
   right,
   white,
}: Props) {
   const [isHovered, setIsHovered] = useState(false);

   const onHoverStart = () => setIsHovered(true);
   const onHoverEnd = () => setIsHovered(false);

   const handleClick = () => {
      if (social.newLocation) {
         window.location.href = social.link;
      } else {
         window.open(social.link, "_blank");
      }
   };

   return (
      <button
         onClick={handleClick}
         onPointerEnter={onHoverStart}
         onPointerLeave={onHoverEnd}
         className={`aspect-square h-16 flex items-center justify-center text-3xl relative pointer-events-auto 
            ${
               white
                  ? isHovered
                     ? "bg-black text-white"
                     : "bg-white text-black"
                  : isHovered
                    ? "bg-white text-black"
                    : "bg-black text-white"
            }
         `}
      >
         {isHovered && (
            <MainTooltip
               text={social.name}
               top={top}
               bottom={bottom}
               left={left}
               right={right}
            />
         )}
         <i aria-hidden className={`${social.icon}`}></i>
      </button>
   );
}
