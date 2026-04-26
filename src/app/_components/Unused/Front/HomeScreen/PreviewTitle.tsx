import AnimatedText from "@/components/AnimatedText";
import React from "react";

type Props = {
   text: string;
   black?: true;
   contact?: true;
};

export default function PreviewTitle({ text, black, contact }: Props) {
   return (
      <AnimatedText
         initial
         text={text}
         className={`font-black text-4xl 2xl:text-6xl uppercase tracking-tighter 
            ${black ? "text-black" : contact ? "text-line" : "text-text"}
         `}
      />
   );
}
