import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import HandleSwipe from "./HandleSwipe";

import SkillSlide from "./SkillSlide";
import { SkillSlideType } from "@/app/skills/_types/SkillType";

type Props = {
   activeIndex: number;
   setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
   SKILL_SLIDES: SkillSlideType[];
};

export default function CardContent({
   activeIndex,
   setActiveIndex,
   SKILL_SLIDES,
}: Props) {
   return (
      <Swiper
         onSlideChange={({ activeIndex }) => setActiveIndex(activeIndex)}
         className={`w-full lg:h-full `}
      >
         <HandleSwipe activeIndex={activeIndex} />
         {SKILL_SLIDES.map((skills, index) => (
            <SwiperSlide key={index}>
               <SkillSlide skills={skills.skills} />
            </SwiperSlide>
         ))}
      </Swiper>
   );
}
