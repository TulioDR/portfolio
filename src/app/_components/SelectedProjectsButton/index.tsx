import { useState } from "react";
import AnimatedText from "@/components/AnimatedText";
import { Swiper, SwiperSlide } from "swiper/react";
import ProjectSlide from "./ProjectSlide";
import { Autoplay } from "swiper/modules";
import useLanguageContext from "@/context/LanguageContext";
import Tooltip from "../_screens/Large/HomeCard/Tooltip";
import { SELECTED_PROJECTS } from "@/data/projects";
import TransitionLink from "@/modules/pageTransition/components/TransitionLink";

type Props = {
   onMouseEnter?: () => void;
   onMouseLeave?: () => void;
   number: number;
};

export default function SelectedProjectsButton({
   onMouseEnter,
   onMouseLeave,
   number,
}: Props) {
   const [restart, setRestart] = useState(false);
   const [isHovered, setIsHovered] = useState(false);
   const { language } = useLanguageContext();
   const { selectedProjects } = language.home.panel;

   const HREF = "/selected-projects";

   const handleEnter = () => {
      onMouseEnter && onMouseEnter();
      setRestart((prev) => !prev);
      setIsHovered(true);
   };

   const handleLeave = () => {
      onMouseLeave && onMouseLeave();
      setIsHovered(false);
   };

   return (
      <div className="w-full h-full rounded-xl shadow-lg bg-linear-to-l from-accent to-light-accent lg:p-1 pointer-events-auto">
         <div className="w-full h-full border lg:border-4 border-white lg:border-black rounded lg:rounded-lg overflow-hidden relative">
            {isHovered && <Tooltip number={number} />}
            <TransitionLink
               href={HREF}
               onPointerEnter={handleEnter}
               onPointerLeave={handleLeave}
               className="absolute inset-0 bg-black/50 flex items-center pl-2 lg:pl-8 z-10 hover:bg-black active:bg-black cursor-pointer"
            >
               <AnimatedText
                  restart={restart}
                  text={selectedProjects}
                  className="text-2xl sm:text-3xl md:text-4xl xl:text-4xl 2xl:text-5xl text-left font-black uppercase w-min tracking-tighter pointer-events-none text-white"
               />
            </TransitionLink>
            <Swiper
               loop={true}
               autoplay={{ delay: 3000 }}
               className="h-full!"
               modules={[Autoplay]}
            >
               {SELECTED_PROJECTS.map(({ showcaseImg, link }) => (
                  <SwiperSlide key={link} className="h-full!">
                     <ProjectSlide src={showcaseImg} alt={link} />
                  </SwiperSlide>
               ))}
            </Swiper>
         </div>
      </div>
   );
}
