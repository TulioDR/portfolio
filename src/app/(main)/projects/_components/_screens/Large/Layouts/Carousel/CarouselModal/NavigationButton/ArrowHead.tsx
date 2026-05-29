import { motion } from "framer-motion";

type Props = {
   left?: true;
   startRotation: boolean;
};

export default function ArrowHead({ left, startRotation }: Props) {
   const DURATION = 0.2;

   const variants = {
      initial: { rotate: 0 },
      animate: {
         rotate: startRotation ? (left ? -30 : 30) : 0,
         transition: { duration: DURATION },
      },
      exit: { rotate: 0, transition: { duration: DURATION } },
   };

   return (
      <motion.div
         variants={variants}
         initial="initial"
         animate="animate"
         exit="exit"
         className={`h-full w-1/2 rounded-full bg-white
            ${left ? "origin-left" : "origin-right"}
         `}
      />
   );
}
