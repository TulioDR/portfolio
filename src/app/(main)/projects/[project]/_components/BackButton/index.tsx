import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ENTER_EASE } from "@/constants/TRANSITIONS";

type Props = {};

export default function BackButton({}: Props) {
   const router = useRouter();
   const handleClick = () => {
      router.back();
   };
   return (
      <motion.button
         initial={{ scale: 0 }}
         animate={{ scale: 1 }}
         transition={ENTER_EASE}
         onClick={handleClick}
         className={`fixed cursor-pointer bottom-4 xl:bottom-auto -translate-x-1/2 xl:translate-x-0 left-1/2 xl:top-1/2 xl:-translate-y-1/2 xl:left-4 z-50 border border-line w-16 aspect-square flex items-center justify-center
            bg-black text-white hover:bg-white active:bg-white hover:text-black active:text-black
         `}
      >
         <span className="material-symbols-outlined">arrow_back</span>
      </motion.button>
   );
}
