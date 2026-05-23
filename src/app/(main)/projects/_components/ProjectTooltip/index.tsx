import AnimatedText from "@/components/AnimatedText";
import { AnimatePresence, MotionValue } from "framer-motion";
import ProjectTooltipContainer from "./ProjectTooltipContainer";

type Props = {
   mouseX: MotionValue<number>;
   mouseY: MotionValue<number>;
   showTooltip: boolean;
};

export default function ProjectTooltip({ mouseX, mouseY, showTooltip }: Props) {
   return (
      <AnimatePresence>
         {showTooltip && (
            <ProjectTooltipContainer mouseX={mouseX} mouseY={mouseY}>
               <AnimatedText
                  initial
                  text="View project"
                  className="text-lg text-white uppercase font-black tracking-wider"
               />
            </ProjectTooltipContainer>
         )}
      </AnimatePresence>
   );
}
