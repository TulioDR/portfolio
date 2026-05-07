import { motion } from "framer-motion";

type Props = {
   number: number;
   isOpen: boolean;
};

export default function PanelTop({ number, isOpen }: Props) {
   return (
      <div className="absolute text-white flex justify-between top-0 left-0 p-4 lg:p-8 z-10 w-full">
         <div className="text-xs sm:text-sm">{"0" + number}</div>
         <motion.div
            initial={false}
            animate={{ rotate: isOpen ? 0 : -45 }}
            transition={{ duration: 0.2 }}
            className="aspect-square h-14 rounded-full border border-white flex justify-center items-center"
         >
            <span className="material-symbols-outlined">arrow_forward</span>
         </motion.div>
      </div>
   );
}
