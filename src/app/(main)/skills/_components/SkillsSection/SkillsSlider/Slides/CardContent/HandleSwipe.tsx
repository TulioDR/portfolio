import { useEffect } from "react";
import { useSwiper } from "swiper/react";

type Props = {
   activeIndex: number;
};

export default function HandleSwipe({ activeIndex }: Props) {
   const swiper = useSwiper();

   useEffect(() => {
      swiper.slideTo(activeIndex);
   }, [activeIndex, swiper]);

   return <></>;
}
