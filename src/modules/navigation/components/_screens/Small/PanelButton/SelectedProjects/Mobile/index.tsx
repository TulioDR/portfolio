import projects from "@/assets/projects";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import AnimatedText from "@/components/AnimatedText";
import useTextRestart from "@/hooks/useTextRestart";
import useLanguageContext from "@/context/LanguageContext";
import useIsHovered from "@/hooks/useIsHovered";
import Tooltip from "../../Tooltip";
import { useRouter } from "next/router";
import ProjectSlide from "@/modules/home/components/Unused/HomeSection/ProjectsBackground/ProjectsSlider/ProjectSlide";
import GestureHandler from "@/components/GestureHandler";

type Props = {
   number: number;
   href: string;
};

export default function Mobile({ number, href }: Props) {
   const selectedProjects = [projects[0], projects[1], projects[2]];

   const { restart, handleRestart } = useTextRestart();
   const { language } = useLanguageContext();
   const { selectedProjects: selectedProjectsText } = language.home.panel;

   const { isHovered, onHoverStart, onHoverEnd } = useIsHovered();

   const handleEnter = () => {
      handleRestart();
      onHoverStart();
   };
   const handleLeave = () => {
      onHoverEnd();
   };

   const router = useRouter();
   const handleClick = () => {
      router.push(href, undefined, { scroll: false });
   };

   return (
      <div className="w-full px-[63px] h-16 border-y border-line">
         <div className="w-full h-full relative">
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
            <GestureHandler
               onEnter={handleEnter}
               onLeave={handleLeave}
               onClick={handleClick}
               className={`absolute top-0 left-0 w-full h-full z-10 flex items-center  ${
                  isHovered ? "bg-black text-white" : "bg-white/80 text-black"
               }`}
            >
               <div className="w-full flex justify-center relative">
                  {isHovered && <Tooltip number={number} small />}
                  <AnimatedText
                     restart={restart}
                     text={selectedProjectsText}
                     className="font-black uppercase tracking-tighter w-min"
                  />
               </div>
            </GestureHandler>
         </div>
      </div>
   );
}
