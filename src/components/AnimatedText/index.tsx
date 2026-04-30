import { useInView } from "framer-motion";
import { useRef } from "react";

// import useLanguageContext from "@/context/LanguageContext";
import InnerText from "./InnerText";

type Props = {
   text: string;
   className?: string;
   initial?: boolean;
   restart?: boolean;
};

export default function AnimatedText({
   text,
   className = "",
   initial = false,
   restart = false,
}: Props) {
   const containerRef = useRef<HTMLDivElement>(null);
   const isInView = useInView(containerRef, { initial: initial });

   const key = `${text}-${restart ? "1" : "0"}`;

   return (
      <div className={className} ref={containerRef}>
         <InnerText key={key} text={text} isInView={isInView} />
      </div>
   );
}
