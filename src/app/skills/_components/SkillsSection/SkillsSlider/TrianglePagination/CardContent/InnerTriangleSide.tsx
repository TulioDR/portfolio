import { motion, usePresenceData } from "framer-motion";

type Props = {
   index: number;
};

export default function InnerTriangleSide({ index }: Props) {
   const isForward = usePresenceData();
   const newForward = index === 2 ? !isForward : isForward;
   return (
      <motion.div
         initial={{ scaleX: 0, originX: newForward ? "left" : "right" }}
         animate={{ scaleX: 1 }}
         exit={{ scaleX: 0, originX: newForward ? "right" : "left" }}
         transition={{ duration: 0.2 }}
         className="h-full bg-accent rounded-full w-full"
      ></motion.div>
   );
}
