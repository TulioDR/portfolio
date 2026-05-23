import { AnimatePresence } from "framer-motion";
import InnerTriangleSide from "./InnerTriangleSide";

type Props = {
   index: number;
   isSelected: boolean;
   isForward: boolean;
};

export default function TriangleSide({ index, isSelected, isForward }: Props) {
   return (
      <div
         className={`absolute inset-0 bg-gray-400 rounded-full overflow-hidden
            ${index === 0 ? "-rotate-60 -translate-y-2 -translate-x-2 2xl:-translate-x-3 origin-left" : ""}
            ${index === 1 ? "rotate-60 -translate-y-2 translate-x-2 2xl:translate-x-3 origin-right" : ""}
            ${index === 2 ? "translate-y-2 2xl:translate-y-3" : ""}
         `}
      >
         <AnimatePresence custom={isForward}>
            {isSelected && <InnerTriangleSide index={index} />}
         </AnimatePresence>
      </div>
   );
}
