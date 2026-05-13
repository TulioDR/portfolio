import { useState } from "react";
import TimelinePhase from "../../../../TimelinePhase";
import Mark from "../../../../Mark";
import StoryText from "./StoryText";

type Props = {
   reverse: boolean;
};

export default function Story({ reverse }: Props) {
   const [isOn, setIsOn] = useState<boolean>(true);
   const text =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ullam unde fugit cum impedit quam omnis, dolorum atque suscipit laboriosam voluptas fuga nulla minus sunt est hic sequi expedita ex maiores quas doloremque culpa temporibus neque! Delectus autem nonexercitationem.";

   return (
      <div
         className={`py-32 h-full flex flex-col gap-8 w-[50vw]
            ${reverse ? "flex-col-reverse" : ""}
         `}
      >
         <div
            className={`w-full flex-1 flex justify-center
               ${reverse ? "items-start" : "items-end"}
            `}
         >
            <TimelinePhase isOpen={isOn} text="Phase" />
         </div>

         <div className="w-full h-16 flex items-center justify-center">
            <Mark isOn={isOn} setIsOn={setIsOn} />
         </div>

         <StoryText isOn={isOn} text={text} />
      </div>
   );
}
