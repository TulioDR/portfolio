import { motion } from "framer-motion";

type Props = {
   minute?: true;
   SCOPE_CLASS: string;
};

export default function ClockHand({ minute, SCOPE_CLASS }: Props) {
   return (
      <div className="absolute top-0 left-0 w-full h-1/2 flex items-end justify-center">
         <motion.div
            className={`w-1 bg-black origin-bottom 
               ${minute ? "h-4/5" : "h-1/2"}
               ${SCOPE_CLASS} 
            `}
         />
      </div>
   );
}
