import { useRef } from "react";
import ProjectsBackground from "./ProjectsBackground";
import { motion, useMotionValue, useTransform } from "framer-motion";
import useSmoothMotion from "@/hooks/useSmoothMotion";
export default function HomeSection() {
   const xPosition = useMotionValue(0);
   const yPosition = useMotionValue(0);

   const delta = 50;

   const x = useTransform(xPosition, [0, 1], [-delta, delta]);
   const y = useTransform(yPosition, [0, 1], [-delta, delta]);

   const containerRef = useRef<HTMLDivElement>(null);
   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const xPercent = x / rect.width;
      const yPercent = y / rect.height;

      xPosition.set(xPercent);
      yPosition.set(yPercent);
   };

   const { smoothMotion: smoothMotionX } = useSmoothMotion(x);
   const { smoothMotion: smoothMotionY } = useSmoothMotion(y);

   return (
      <motion.div
         ref={containerRef}
         onMouseMove={handleMouseMove}
         className="h-screen w-screen relative overflow-hidden"
      >
         <motion.div
            style={{
               gridTemplateColumns: "repeat(30, minmax(0, 1fr))",
               x: smoothMotionX,
               y: smoothMotionY,
            }}
            className="w-full h-full grid bg-line gap-px overflow-hidden"
         >
            {Array.from({ length: 550 }).map((_, index) => (
               <div key={index} className="aspect-square w-full bg-primary" />
            ))}
         </motion.div>
         <div
            style={{
               background:
                  "radial-gradient(circle, rgba(255,255,255,0) 0%, #171417 40%)",
            }}
            className="absolute top-0 left-0 w-full h-full flex p-main-spacing items-center z-10"
         >
            <div className="flex-1 h-full flex flex-col justify-center uppercase">
               <div className="font-medium">Tulio Ruzo Portfolio Site</div>
               <div className="text-9xl font-black">Software</div>
               <div className="text-9xl font-black">Engineer</div>
            </div>
            <div className="flex-1 aspect-video">
               <ProjectsBackground />
            </div>
         </div>
      </motion.div>
   );
}
