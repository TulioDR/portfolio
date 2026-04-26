import projects from "@/data/projects";
import { useEffect, useState } from "react";
import GestureHandler from "@/components/GestureHandler";
import AnimatedText from "@/components/AnimatedText";
import { Swiper, SwiperSlide } from "swiper/react";
import ProjectSlide from "./ProjectSlide";
import { Autoplay } from "swiper/modules";
import useLanguageContext from "@/context/LanguageContext";
import Tooltip from "../_screens/Large/HomeCard/Tooltip";
import { useRouter } from "next/navigation";

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
   const selectedProjectsArray = [projects[0], projects[1], projects[2]];
   const { language } = useLanguageContext();
   const { selectedProjects } = language.home.panel;
   const router = useRouter();
   const handleClick = () => {
      router.push("/selected-projects");
   };

   const handleMouseEnter = () => {
      onMouseEnter && onMouseEnter();
      setRestart((prev) => !prev);
      setIsHovered(true);
   };

   const handleMouseLeave = () => {
      onMouseLeave && onMouseLeave();
      setIsHovered(false);
   };

   useEffect(() => {
      console.log(selectedProjectsArray);
   }, [selectedProjectsArray]);

   return (
      <div className="w-full h-full rounded-xl shadow-lg bg-linear-to-l from-accent to-light-accent p-1 pointer-events-auto">
         <div className="w-full h-full border-4 border-black rounded-lg overflow-hidden relative">
            {isHovered && <Tooltip number={number} />}
            <GestureHandler
               onEnter={handleMouseEnter}
               onLeave={handleMouseLeave}
               onClick={handleClick}
               className="absolute inset-0 bg-black/50 flex items-center pl-8 z-10 hover:bg-black active:bg-black"
            >
               <AnimatedText
                  restart={restart}
                  text={selectedProjects}
                  className="text-4xl text-left xl:text-4xl 2xl:text-5xl font-black uppercase w-min tracking-tighter pointer-events-none text-white"
               />
            </GestureHandler>
            <Swiper
               loop={true}
               autoplay={{ delay: 3000 }}
               className="h-full!"
               modules={[Autoplay]}
            >
               {selectedProjectsArray.map(({ showcaseImg, link }) => (
                  <SwiperSlide key={link} className="h-full!">
                     <ProjectSlide src={showcaseImg} alt={link} />
                  </SwiperSlide>
               ))}
            </Swiper>
         </div>
      </div>
   );
}
