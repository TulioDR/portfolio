import { motion, MotionValue } from "framer-motion";

type Props = {
   displayValue: MotionValue<number>;
};

export default function LoadValue({ displayValue }: Props) {
   return (
      <div className="flex items-baseline gap-3">
         <motion.span className=" text-7xl xl:text-9xl font-bold tabular-nums tracking-tighter">
            {displayValue}
         </motion.span>
         <div className="flex flex-col">
            <span className="text-lg xl:text-2xl font-light opacity-40">%</span>
            <span className="text-xs tracking-[0.2em] opacity-20">LOAD</span>
         </div>
      </div>
   );
}
