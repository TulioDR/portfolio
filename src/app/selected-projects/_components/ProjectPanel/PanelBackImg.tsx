import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

type Props = {
   src: StaticImageData;
   alt: string;
   isOpen: boolean;
};

export default function PanelBackImg({ src, alt, isOpen }: Props) {
   return (
      <motion.div
         initial={false}
         animate={{ scale: isOpen ? 1 : 1.5 }}
         transition={{
            duration: isOpen ? 1.5 : 0.2,
            ease: [0.22, 1, 0.36, 1],
         }}
         className="w-full h-full relative"
      >
         <Image
            src={src}
            alt={alt}
            fill
            sizes="100%"
            loading="eager"
            className="w-full h-full object-cover"
         />
      </motion.div>
   );
}
