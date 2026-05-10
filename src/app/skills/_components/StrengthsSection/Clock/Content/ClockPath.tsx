import { MotionValue, motion } from "framer-motion";

type Props = {
   pathLength: MotionValue<number>;
   CIRCLE_SCOPE: string;
};

export default function ClockPath({ pathLength, CIRCLE_SCOPE }: Props) {
   const strokeWidth = 8;
   return (
      <svg
         style={{ padding: strokeWidth / 2 }}
         className="w-full h-full -rotate-90 overflow-visible"
      >
         <motion.circle
            r="50%"
            cx="50%"
            cy="50%"
            className={`stroke-accent fill-transparent ${CIRCLE_SCOPE}`}
            style={{ pathLength, strokeWidth }}
         />
      </svg>
   );
}
