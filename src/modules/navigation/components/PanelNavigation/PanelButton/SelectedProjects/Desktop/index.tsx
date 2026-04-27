import React, { useState } from "react";
import AnimatedText from "@/components/AnimatedText";
import { Swiper, SwiperSlide } from "swiper/react";
import projects from "@/assets/projects";
import { Autoplay } from "swiper";
import Tooltip from "../../Tooltip";
import useDeviceSizeContext from "@/context/useDeviceSizeContext";
import { useRouter } from "next/router";
import GestureHandler from "@/components/GestureHandler";
import ProjectSlide from "@/modules/home/components/Unused/HomeSection/ProjectsBackground/ProjectsSlider/ProjectSlide";

type Props = {
   onMouseEnter: () => void;
   text: string;
   href: string;
   number: number;
   onMouseLeave: () => void;
};
export default function Desktop({
   onMouseEnter,
   text,
   href,
   number,
   onMouseLeave,
}: Props) {
   const [restart, setRestart] = useState(false);
   const [isHovered, setIsHovered] = useState(false);

   const handleEnter = () => {
      onMouseEnter();
      setRestart((prev) => !prev);
      setIsHovered(true);
   };

   const handleLeave = () => {
      onMouseLeave();
      setIsHovered(false);
   };

   const selectedProjects = [projects[0], projects[1], projects[2]];

   const { isMobile } = useDeviceSizeContext();

   const router = useRouter();
   const handleClick = () => router.push(href);

   return (
      <GestureHandler
         onEnter={handleEnter}
         onLeave={handleLeave}
         onClick={handleClick}
         className={`text-black border-line w-full h-16 2xl:h-main-spacing flex items-center ${
            isMobile ? "border-y pl-16" : "border-t"
         }`}
      >
         <div className="h-full aspect-video overflow-hidden pointer-events-none border-r border-line">
            <Swiper
               loop={true}
               autoplay={{ delay: 3000 }}
               className="w-full h-full"
               modules={[Autoplay]}
            >
               {selectedProjects.map(({ showcaseImg, link }, index) => (
                  <SwiperSlide key={link + index}>
                     <ProjectSlide src={showcaseImg} />
                  </SwiperSlide>
               ))}
            </Swiper>
         </div>
         <div
            className={`flex-1 flex items-center h-full pl-4 text-left ${
               isHovered ? "bg-black text-white" : ""
            }`}
         >
            <div className="relative">
               {isHovered && <Tooltip number={number} />}
               <AnimatedText
                  restart={restart}
                  text={text}
                  className="text-sm md:text-xl lg:text-xl 2xl:text-2xl w-min font-black uppercase tracking-tighter pointer-events-none "
               />
            </div>
         </div>
      </GestureHandler>
   );
}
