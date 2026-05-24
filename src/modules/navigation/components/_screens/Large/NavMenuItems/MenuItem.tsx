import { useEffect, useState } from "react";
import AnimatedText from "@/components/AnimatedText";
import { usePathname } from "next/navigation";
import Link from "next/link";

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

   return (
      <Link
         href={href}
         onPointerEnter={handleMouseEnter}
         onPointerLeave={onMouseLeave}
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
      </Link>
   );
}
