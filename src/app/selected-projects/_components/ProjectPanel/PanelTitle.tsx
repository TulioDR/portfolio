import { motion } from "framer-motion";
type Props = {
   isHovered: boolean;
   title: string;
};

export default function PanelTitle({ isHovered, title }: Props) {
   return (
      <motion.div
         animate={{ opacity: isHovered ? 0 : 1 }}
         transition={{ duration: 0.2 }}
         className="flex items-center justify-center absolute inset-0 z-10 pointer-events-none"
      >
         <h1 className="text-white text-xl font-black uppercase tracking-widest w-min text-center">
            {title}
         </h1>
      </motion.div>
   );
}
