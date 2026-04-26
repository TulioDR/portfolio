import React from "react";
import MarqueeContainer from "./MarqueeContainer";

type Props = {
   text: string;
   icon: string;
};

export default function Marquee({ text, icon }: Props) {
   return (
      <MarqueeContainer>
         {Array.from({ length: 4 }).map((_, index) => (
            <React.Fragment key={index}>
               <span className="text-8xl sm:text-9xl font-light uppercase">
                  {text}
               </span>
               <span className="material-symbols-outlined !text-7xl sm:!text-8xl">
                  {icon}
               </span>
            </React.Fragment>
         ))}
      </MarqueeContainer>
   );
}
