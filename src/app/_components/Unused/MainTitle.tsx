import React from "react";

import AnimatedText from "@/components/AnimatedText";

type Props = {
   text: string;
};

export default function MainTitle({ text }: Props) {
   return (
      <AnimatedText
         text={text}
         className="text-8xl font-black uppercase text-center"
      />
   );
}
