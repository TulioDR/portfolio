import SOCIALS from "@/constants/SOCIALS";
import SocialButton from "./SocialButton";

type Props = {
   vertical?: true;
   tooltipPosition: "top" | "bottom" | "left" | "right";
   className?: string;
   white?: true;
};

export default function Socials({
   vertical,
   tooltipPosition,
   className = "",
   white,
}: Props) {
   const top = tooltipPosition === "top";
   const bottom = tooltipPosition === "bottom";
   const left = tooltipPosition === "left";
   const right = tooltipPosition === "right";

   return (
      <div
         style={{ transformStyle: "preserve-3d" }}
         className={`flex 
            ${vertical ? "flex-col w-16" : "flex-row h-16"} 
            ${className}
         `}
      >
         {SOCIALS.map((social, index) => (
            <SocialButton
               key={index}
               social={social}
               top={top || undefined}
               bottom={bottom || undefined}
               left={left || undefined}
               right={right || undefined}
               white={white}
            />
         ))}
      </div>
   );
}
