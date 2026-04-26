import { Swiper, SwiperSlide } from "swiper/react";
import ProjectSlide from "./ProjectSlide";
import projects from "@/assets/projects";
import SwipeEnabler from "./SwipeEnabler";

type Props = {
   left?: boolean;
   center?: boolean;
   right?: boolean;
   swipeValue: boolean;
   single?: true;
};

export default function ProjectsSlider({
   left,
   center,
   right,
   swipeValue,
   single,
}: Props) {
   return (
      <div
         className={`h-full w-full flex 
            ${left ? "justify-start" : ""} 
            ${center ? "justify-center" : ""} 
            ${right ? "justify-end" : ""}
         `}
      >
         <div
            className={`flex-shrink-0  h-full 
               ${single ? "w-full" : "w-[300%]"}
            `}
         >
            <Swiper loop={true} className="w-full h-full pointer-events-none">
               <SwipeEnabler swipeValue={swipeValue} />
               {projects.map(({ landingImg, showcaseImg, link }, index) => (
                  <SwiperSlide key={link + index}>
                     <ProjectSlide src={landingImg || showcaseImg} />
                  </SwiperSlide>
               ))}
            </Swiper>
         </div>
      </div>
   );
}
