import { NAV_TRANSITION } from "@/modules/navigation/constants/NAV_TRANSITION";
import { motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
   vertical?: true;
   isSubItem?: true;
   y?: string;
   x?: string;
};

export default function SliderContainer({
   children,
   vertical,
   isSubItem,
   y,
   x,
}: Props) {
   return (
      <motion.div
         initial={false}
         animate={{ y: y, x: x }}
         transition={NAV_TRANSITION}
         className={`absolute left-0 flex 
            ${vertical ? "flex-col w-full" : "h-full"}
            ${isSubItem ? "top-full" : "top-0"}
         `}
      >
         {children}
      </motion.div>
   );
}
