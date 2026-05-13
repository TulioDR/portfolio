import { motion } from "framer-motion";

type Props = {
   vertical?: true;
   duration: number;
   controls: any;
};

export default function HeaderLine({ vertical, duration, controls }: Props) {
   const transition = { duration: duration, ease: "linear" };

   const horizontalVariant = {
      initial: { width: 0 },
      animate: { width: "100%", transition: transition },
   };
   const verticalVariant = {
      initial: { height: 0 },
      animate: { height: "100%", transition: transition },
   };
   return (
      <div className={`${vertical ? "h-full w-px" : "w-full h-px"}`}>
         <motion.div
            className={`bg-accent ${vertical ? "w-full" : "h-full"}`}
            variants={vertical ? verticalVariant : horizontalVariant}
            initial="initial"
            animate={controls}
         />
      </div>
   );
}
