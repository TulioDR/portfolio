import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AnimatedText from "@/components/AnimatedText";
import { usePathname } from "next/navigation";
import useIsLoadedContext from "@/context/IsLoadedContext";

type Props = {
   subpage?: boolean;
   title: string;
   onMouseEnter: () => void;
   onMouseLeave: () => void;
   href: string;
};

export default function MenuItem({
   subpage,
   title,
   onMouseEnter,
   onMouseLeave,
   href,
}: Props) {
   const [restart, setRestart] = useState(false);
   const handleMouseEnter = () => {
      onMouseEnter();
      setRestart((prev) => !prev);
   };

   const pathname = usePathname();
   const [isSelected, setIsSelected] = useState(false);
   useEffect(() => {
      if (pathname === href) setIsSelected(true);
      else setIsSelected(false);
   }, [pathname]);

   const { startNavigation } = useIsLoadedContext();
   const handleClick = () => {
      startNavigation(href);
   };

   return (
      <motion.div
         onMouseEnter={handleMouseEnter}
         onMouseLeave={onMouseLeave}
         onClick={handleClick}
         className={`w-full pl-4 h-16 flex items-center z-10
            ${subpage ? "text-text/80" : "text-white"}
            ${isSelected ? "bg-accent" : "hover:bg-text hover:text-black"}
         `}
      >
         <AnimatedText
            initial
            restart={restart}
            text={title}
            className={`uppercase pointer-events-none ${
               subpage
                  ? "text-xs xl:text-sm 2xl:text-base"
                  : "text-sm xl:text-base 2xl:text-lg"
            }`}
         />
      </motion.div>
   );
}
