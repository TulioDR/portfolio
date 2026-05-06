import { MotionValue } from "framer-motion";
import NAV_ITEMS from "@/constants/NAV_ITEMS";
import projects from "@/data/projects";
import NavProjectSlide from "./NavProjectSlide";
import NavItemSlide from "./NavItemSlide";
import HoverPreview from "@/modules/hoverPreview/components/HoverPreview";
import SliderContainer from "@/modules/hoverPreview/components/SliderContainer";

type Props = {
   mouseX: MotionValue<number>;
   mouseY: MotionValue<number>;
   xAxisIndex: number | null;
   yAxisIndex: number | null;
};

export default function NavMenuSlider({
   mouseX,
   mouseY,
   xAxisIndex,
   yAxisIndex,
}: Props) {
   const x = `-${(1 / NAV_ITEMS.length) * (xAxisIndex || 0) * 100}%`;
   const y = `${(1 / projects.length) * (yAxisIndex || 0) * -100}%`;
   const itemsY = `${(yAxisIndex || 0) * -100}%`;

   return (
      <HoverPreview
         bottom
         isOpen={yAxisIndex !== null && xAxisIndex !== null}
         mouseX={mouseX}
         mouseY={mouseY}
      >
         <SliderContainer x={x} y={itemsY}>
            {NAV_ITEMS.map((item) => (
               <NavItemSlide key={item.name} icon={item.icon} />
            ))}
         </SliderContainer>
         <SliderContainer vertical y={y} isSubItem>
            {projects.map((project) => (
               <NavProjectSlide key={project.title} project={project} />
            ))}
         </SliderContainer>
      </HoverPreview>
   );

   // return (
   //    <SliderContainer smoothX={smoothX} smoothY={smoothY}>
   //       <XAxisContainer x={x}>
   //          {NAV_ITEMS.map((item) => (
   //             <NavItemSlide key={item.name} icon={item.icon} />
   //          ))}
   //       </XAxisContainer>
   //       <YAxisContainer y={y}>
   //          {projects.map((project) => (
   //             <NavProjectSlide key={project.title} project={project} />
   //          ))}
   //       </YAxisContainer>
   //    </SliderContainer>
   // );
}
