import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";

interface Props {
   children: React.ReactNode;
   src?: StaticImageData;
   hoverSrc?: StaticImageData;
   onClick?: () => void;
}

export default function Hexagon({ children, src, hoverSrc, onClick }: Props) {
   const [currentSrc, setCurrentSrc] = useState<StaticImageData | undefined>(
      src
   );
   const onHoverStart = () => setCurrentSrc(hoverSrc);
   const onHoverEnd = () => setCurrentSrc(src);

   return (
      <motion.div
         whileTap={{ scale: 0.9 }}
         onTap={onClick}
         onHoverStart={onHoverStart}
         onHoverEnd={onHoverEnd}
         className="bg-main-orange hover:bg-main-white hover:text-main-orange aspect-[8/10] w-1/3 sm:w-[100px] cursor-pointer"
         style={{
            clipPath:
               "polygon(0 25%, 50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%)",
         }}
      >
         <div className="flex flex-col items-center justify-center text-center w-full h-full">
            {currentSrc && (
               <Image src={currentSrc} alt="logo" className="w-1/3 mb-1" />
            )}
            <div className="text-sm w-min font-light">{children}</div>
         </div>
      </motion.div>
   );
}
