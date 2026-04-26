import React, { useEffect } from "react";
import { useSwiper } from "swiper/react";

type Props = {
   swipeValue: boolean;
};

export default function SwipeEnabler({ swipeValue }: Props) {
   const swiper = useSwiper();

   useEffect(() => {
      swiper.slideNext();
   }, [swipeValue, swiper]);
   return <></>;
}
