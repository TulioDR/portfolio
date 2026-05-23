import { useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";

type Props = { isPowerOn: boolean };

export default function PowerAnimation({ isPowerOn }: Props) {
   const DURATION = 0.1;

   const barTransition = { duration: DURATION };
   const blackBarVariants = {
      initial: { height: "51%" },
      on: { height: 0, transition: barTransition },
      off: { height: "51%", transition: barTransition },
   };

   const lightTransition = { duration: DURATION / 2 };
   const whiteLightVariants = {
      initial: { opacity: 1, filter: "brightness(1)" },
      on: {
         opacity: 0,
         filter: "brightness(2)",
         transition: { ...lightTransition, delay: DURATION / 2 },
      },
      off: {
         opacity: 1,
         filter: "brightness(1)",
         transition: lightTransition,
      },
   };

   const barControls = useAnimationControls();
   const lightControls = useAnimationControls();
   useEffect(() => {
      if (isPowerOn) {
         barControls.start("on");
         lightControls.start("on");
      } else {
         barControls.start("off");
         lightControls.start("off");
      }
   }, [isPowerOn, barControls, lightControls]);

   return (
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-30">
         <motion.div
            variants={blackBarVariants}
            initial="initial"
            animate={barControls}
            className="w-full absolute top-0 left-0 bg-black z-10"
         />
         <motion.div
            variants={whiteLightVariants}
            initial="initial"
            animate={lightControls}
            className="w-full h-full bg-white"
         />
         <motion.div
            variants={blackBarVariants}
            initial="initial"
            animate={barControls}
            className="w-full absolute bottom-0 left-0 bg-black z-10"
         />
      </div>
   );
}
