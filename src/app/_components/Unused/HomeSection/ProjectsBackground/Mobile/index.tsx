import React from "react";
import FlipCard from "../FlipCard";
import ProjectsSlider from "../ProjectsSlider";
import BackComponent from "./BackComponent";

type Props = {
   swipeValue: boolean;
};

export default function Mobile({ swipeValue }: Props) {
   return (
      <div className="w-full h-full flex relative">
         <FlipCard
            backComponent={<BackComponent />}
            frontComponent={<ProjectsSlider center swipeValue={swipeValue} />}
         />
         <div className="absolute bottom-0 right-1 pointer-events-none text-white">
            <span className="material-symbols-outlined">touch_long</span>
         </div>
      </div>
   );
}
