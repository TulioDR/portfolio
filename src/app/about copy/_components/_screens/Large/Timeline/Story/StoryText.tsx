import Bracket from "@/app/about/_components/Bracket";
import Paragraph from "@/components/Paragraph";
import { useScroll, useTransform, motion } from "framer-motion";
import { useLenis } from "lenis/react";
import { useEffect, useRef, useState } from "react";

type Props = {
   isOn: boolean;
   text: string;
};

export default function StoryText({ isOn, text }: Props) {
   const [scrollElement, setScrollElement] = useState<HTMLElement | null>(null);

   const lenis = useLenis((lenisInstance) => {
      const wrapper = lenisInstance.options.wrapper;
      if (!scrollElement && wrapper instanceof HTMLElement) {
         setScrollElement(wrapper);
      }
   });

   useEffect(() => {
      const wrapper = lenis?.options.wrapper;
      if (wrapper instanceof HTMLElement) {
         setScrollElement(wrapper);
      }
   }, [lenis]);

   const ref = useRef(null);
   const { scrollXProgress } = useScroll({
      target: ref,
      offset: ["start end", "end start"],
      axis: "x",
      container: scrollElement ? { current: scrollElement } : undefined,
   });
   const x = useTransform(scrollXProgress, [0, 1], ["-50%", "50%"]);
   return (
      <div
         ref={ref}
         className={`w-full flex-1 relative duration-300 
            ${isOn ? "" : "opacity-0"}   
         `}
      >
         <Bracket />
         <Bracket end />
         <div className="w-full h-full overflow-hidden relative">
            <motion.div
               className="w-full h-full flex flex-col gap-4 items-center justify-center px-8"
               style={{ x: x }}
            >
               <Paragraph text={text} />
               <Paragraph text={text} />
            </motion.div>
         </div>
      </div>
   );
}
