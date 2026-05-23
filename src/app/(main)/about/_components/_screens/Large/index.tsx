import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import RadialNode from "./RadialNode";
import { useState } from "react";
import PageHeader from "./PageHeader";
import ScrollIndicator from "./ScrollIndicator";
import CircleContainer from "./CircleContainer";
import TextContainer from "./TextContainer";
import useTimelinePhases from "@/app/(main)/about/_hooks/useTimelinePhases";
import SelectedPhase from "./SelectedPhase";
import { useLenis } from "lenis/react";

type Props = {};

export default function Large({}: Props) {
   const lenis = useLenis();
   const { scrollYProgress } = useScroll();
   const { PHASES } = useTimelinePhases();

   const ARCH_DEGREE = 180;
   const rotate = useTransform(scrollYProgress, [0, 1], [0, -ARCH_DEGREE]);

   const TOTAL_NODES = PHASES.length;

   const STEP = ARCH_DEGREE / (TOTAL_NODES - 1);
   const ACTIVATION_TOLERANCE = STEP / 2;

   const [selectedPhase, setSelectedPhase] = useState<number>(0);

   useMotionValueEvent(rotate, "change", (latest) => {
      const absRotation = Math.abs(latest);

      const nearestIndex = Math.round(absRotation / STEP);
      const distanceToNode = Math.abs(absRotation - nearestIndex * STEP);

      if (distanceToNode < ACTIVATION_TOLERANCE) {
         const targetIdx = Math.max(0, Math.min(nearestIndex, TOTAL_NODES - 1));

         setSelectedPhase((prev) => (prev !== targetIdx ? targetIdx : prev));
      }
   });

   const handleNodeClick = (targetIndex: number) => {
      if (!lenis) return;
      const targetScrollPosition = window.innerHeight * targetIndex;
      lenis.scrollTo(targetScrollPosition, {
         duration: 1.2,
         easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
         immediate: false,
      });
   };

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
                     rotateAngle={index * STEP}
                     onClick={() => handleNodeClick(index)}
                  />
               ))}
               <div className="w-2/4 aspect-square border border-line/20 rounded-full"></div>
            </CircleContainer>
            <TextContainer>
               {selectedPhase === 0 ? (
                  <PageHeader key="page-header" />
               ) : (
                  <SelectedPhase
                     key={PHASES[selectedPhase].title}
                     phase={PHASES[selectedPhase]}
                  />
               )}
            </TextContainer>
         </div>
         <ScrollIndicator
            scrollYProgress={scrollYProgress}
            phasesLength={PHASES.length}
            selectedPhase={selectedPhase}
            handleNodeClick={handleNodeClick}
         />
         <div style={{ height: `${100 * PHASES.length}svh` }} />
      </>
   );
}
