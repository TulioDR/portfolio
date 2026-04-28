import { motion, MotionValue } from "framer-motion";

type Props = {
   scaleX: MotionValue<number>;
};

export default function ProgressBar({ scaleX }: Props) {
   return (
      <div className="relative h-0.5 w-full bg-white/10 overflow-hidden">
         <motion.div
            style={{ scaleX: scaleX, originX: 0 }}
            className="absolute inset-0 bg-white"
         />
      </div>
   );
}
