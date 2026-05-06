import projects from "@/data/projects";
import { MotionValue } from "framer-motion";
import ProjectListSlide from "./ProjectListSlide";
import HoverPreview from "@/modules/hoverPreview/components/HoverPreview";
import SliderContainer from "@/modules/hoverPreview/components/SliderContainer";

type Props = {
   mouseX: MotionValue<number>;
   mouseY: MotionValue<number>;
   yAxisIndex: number | null;
};

export default function ProjectsListSlider({
   mouseX,
   mouseY,
   yAxisIndex,
}: Props) {
   const y = `${(1 / projects.length) * -100 * (yAxisIndex || 0)}%`;
   return (
      <HoverPreview
         isOpen={yAxisIndex !== null && !!mouseX.get() && !!mouseY.get()}
         mouseX={mouseX}
         mouseY={mouseY}
      >
         <SliderContainer vertical y={y}>
            {projects.map((project) => (
               <ProjectListSlide key={project.title} project={project} />
            ))}
         </SliderContainer>
      </HoverPreview>
   );

   // return (
   //    <SliderContainer smoothX={smoothX} smoothY={smoothY} y={y}>
   //       {projects.map((project) => (
   //          <ProjectListSlide key={project.title} project={project} />
   //       ))}
   //    </SliderContainer>
   // );
}
