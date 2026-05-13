import { motion, MotionValue } from "framer-motion";

type Props = {
   scrollYProgress: MotionValue<number>;
};

export default function ScrollIndicator({ scrollYProgress }: Props) {
   return (
      <div className="w-16 h-svh fixed top-0 right-8 flex items-center justify-center py-32">
         <div className="w-0.5 bg-line/20 h-full">
            <motion.div
               style={{ scaleY: scrollYProgress }}
               className="h-full w-full bg-accent origin-top"
            />
         </div>
      </div>
   );
}
