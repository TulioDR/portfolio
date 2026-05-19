import { motion, MotionValue } from "framer-motion";

type Props = {
   scrollYProgress: MotionValue<number>;
   phasesLength: number;
   selectedPhase: number;
   handleNodeClick: (targetIndex: number) => void;
};

export default function ScrollIndicator({
   scrollYProgress,
   phasesLength,
   selectedPhase,
   handleNodeClick,
}: Props) {
   return (
      <div className="w-16 h-svh fixed top-0 right-8 py-32">
         <div className="h-full relative w-full flex justify-center">
            <div className="absolute inset-0 flex justify-center py-4">
               <div className="w-0.5 bg-line/20 h-full">
                  <motion.div
                     style={{ scaleY: scrollYProgress }}
                     className="h-full w-full bg-accent origin-top"
                  />
               </div>
            </div>
            <div className="w-8 h-full flex flex-col justify-between">
               {Array.from({ length: phasesLength }, (_, index) => (
                  <motion.button
                     key={index}
                     onClick={() => handleNodeClick(index)}
                     whileHover={{
                        scale: 1,
                        transition: { duration: 0.6, type: "spring" },
                     }}
                     animate={{
                        scale: selectedPhase === index ? 1 : 0.5,
                        transition: { duration: 0.6, type: "spring" },
                     }}
                     className={`w-full aspect-square rounded-full cursor-pointer
                     ${selectedPhase === index ? "bg-accent" : "bg-black border border-line"}
                     `}
                  />
               ))}
            </div>
         </div>
      </div>
   );
}
