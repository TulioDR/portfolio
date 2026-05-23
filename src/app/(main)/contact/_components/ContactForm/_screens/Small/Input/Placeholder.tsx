import AnimatedText from "@/components/AnimatedText";
import React from "react";

type Props = {
   text: string;
   textarea?: true;
};

export default function Placeholder({ text, textarea }: Props) {
   return (
      <div
         className={`w-full  absolute top-0 left-0 flex items-center pointer-events-none ${
            textarea ? "h-14" : "h-16"
         }`}
      >
         <AnimatedText text={text} initial className="text-line" />
      </div>
   );
}
