import { motion } from "framer-motion";

type Props = {
   text: string;
   isOpen: boolean;
};

export default function TimelinePhase({ text, isOpen }: Props) {
   return (
      <div
         className={`flex relative duration-300
         ${isOpen ? "" : "opacity-30"}
      `}
      >
         <motion.div
            initial={false}
            animate={{ width: isOpen ? "auto" : 0 }}
            transition={{ duration: 0.2 }}
            className="flex justify-center items-center overflow-hidden"
         >
            <h2 className="text-white uppercase font-thin sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl shrink-0">
               {text}
            </h2>
         </motion.div>
      </div>
   );
}
