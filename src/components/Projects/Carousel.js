import "swiper/css";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper";

import Card from "./Card/Card";
import { breakpoints } from "constants/breakpoints";
import { useIdiom } from "context/IdiomContext";
SwiperCore.use([Pagination, Navigation]);

export default function Carousel() {
   const { currentIdiom } = useIdiom();
   const { projects } = currentIdiom.projects;

   return (
      <div className="w-full">
         <Swiper
            slidesPerView={1}
            spaceBetween={20}
            centeredSlides={true}
            loop={true}
            breakpoints={breakpoints}
            pagination={{
               clickable: true,
               bulletClass:
                  "bg-gray-500 h-3 w-3 rounded-full inline-block cursor-pointer mx-1 transform translate-y-1",
            }}
            className="mySwiper"
         >
            {projects.map((project, index) => (
               <SwiperSlide key={index}>
                  <Card project={project} />
               </SwiperSlide>
            ))}
         </Swiper>
      </div>
   );
}
