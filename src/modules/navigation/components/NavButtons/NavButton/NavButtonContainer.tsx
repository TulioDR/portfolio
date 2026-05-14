import { motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
   topLeft?: true;
   topRight?: true;
   bottomRight?: true;
   bottomLeft?: true;
   isHovered: boolean;
   setIsHovered: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function NavButtonContainer({
   children,
   setIsHovered,
   topLeft,
   topRight,
   bottomRight,
   bottomLeft,
   isHovered,
}: Props) {
   const onHoverStart = () => setIsHovered(true);
   const onHoverEnd = () => setIsHovered(false);

   return (
      <motion.div
         initial={{ scale: 0 }}
         animate={{ scale: 1 }}
         exit={{ scale: 0 }}
         transition={{ duration: 0.2 }}
         onPointerEnter={onHoverStart}
         onPointerLeave={onHoverEnd}
         className={`h-16 absolute flex items-center pointer-events-auto cursor-pointer justify-center aspect-square border border-line z-50 select-none
            ${isHovered ? "bg-white text-black" : "bg-black text-text"}
            ${topLeft ? "top-0 left-0" : ""}
            ${topRight ? "top-0 right-0" : ""}
            ${bottomRight ? "bottom-0 right-0" : ""}
            ${bottomLeft ? " bottom-0 left-0" : ""}
         `}
      >
         {children}
      </motion.div>
   );
}
