import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import RadialNode from "./RadialNode";
import { useState } from "react";
import PageHeader from "./PageHeader";
import ScrollIndicator from "./ScrollIndicator";
import CircleContainer from "./CircleContainer";
import TextContainer from "./TextContainer";
import useTimelinePhases from "@/app/about/_hooks/useTimelinePhases";
import SelectedPhase from "./SelectedPhase";

type Props = {};

export default function Large({}: Props) {
   const { scrollYProgress } = useScroll();

   const { PHASES } = useTimelinePhases();

   const ARCH_DEGREE = 180;
   const rotate = useTransform(scrollYProgress, [0, 1], [0, -ARCH_DEGREE]);

   const TOTAL_NODES = PHASES.length + 1;
   const STEP = ARCH_DEGREE / (TOTAL_NODES - 1);
   const ACTIVATION_TOLERANCE = 10;

   const [selectedPhase, setSelectedPhase] = useState<number | null>(null);
   useMotionValueEvent(rotate, "change", (latest) => {
      const absRotation = Math.abs(latest);
      // Find the nearest node index
      const nearestIndex = Math.round(absRotation / STEP);
      // Calculate how far we are from that specific node's anchor point
      const distanceToNode = Math.abs(absRotation - nearestIndex * STEP);
      // Only update if we are within the "Hot Zone" (Tolerance)
      // This makes the transition feel intentional rather than jumpy
      if (distanceToNode < ACTIVATION_TOLERANCE) {
         if (nearestIndex === 0) {
            if (selectedPhase !== null) setSelectedPhase(null);
         } else {
            const phaseIdx = nearestIndex - 1;
            if (selectedPhase !== phaseIdx) setSelectedPhase(phaseIdx);
         }
      }
   });

   return (
      <>
         <div className="w-screen h-svh overflow-hidden hidden fixed top-0 left-0 lg:flex">
            <CircleContainer rotate={rotate}>
               {PHASES.map((phase, index) => (
                  <RadialNode
                     key={index}
                     phase={phase}
                     parentRotate={rotate}
                     isSelected={index === selectedPhase}
                     rotateAngle={ARCH_DEGREE / (PHASES.length / (index + 1))}
                  />
               ))}
               <div className="w-2/4 aspect-square border border-line/20 rounded-full"></div>
            </CircleContainer>
            <TextContainer>
               {selectedPhase === null ? (
                  <PageHeader />
               ) : (
                  <SelectedPhase
                     key={PHASES[selectedPhase].id}
                     phase={PHASES[selectedPhase]}
                  />
               )}
            </TextContainer>
         </div>
         <ScrollIndicator scrollYProgress={scrollYProgress} />
         <div style={{ height: `${100 * (PHASES.length + 1)}svh` }} />
      </>
   );
}
