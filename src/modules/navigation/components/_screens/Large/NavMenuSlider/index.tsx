import SliderContainer from "./SliderContainer";
import { MotionValue } from "framer-motion";
import XAxisContainer from "./XAxisContainer";
import NAV_ITEMS from "@/constants/NAV_ITEMS";
import projects from "@/data/projects";
import YAxisContainer from "./YAxisContainer";
import ProjectSlide from "./ProjectSlide";

type Props = {
   mouseX: MotionValue<number>;
   mouseY: MotionValue<number>;
   xAxis: number;
   yAxis: number;
};

export default function NavMenuSlider({ mouseX, mouseY, xAxis, yAxis }: Props) {
   return (
      <SliderContainer x={mouseX} y={mouseY}>
         <XAxisContainer xAxis={xAxis} yAxis={yAxis}>
            {NAV_ITEMS.map((item, index) => (
               <div
                  key={index}
                  className="h-full aspect-square flex items-center justify-center bg-primary"
               >
                  <span className="material-symbols-outlined text-text! text-7xl!">
                     {item.icon}
                  </span>
               </div>
            ))}
         </XAxisContainer>
         <YAxisContainer yAxis={yAxis}>
            {projects.map((project, index) => (
               <ProjectSlide key={index} project={project} />
            ))}
         </YAxisContainer>
      </SliderContainer>
   );
}
