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
         className={`fixed cursor-pointer top-1/2 -translate-y-1/2 left-4 z-50 border border-line w-16 aspect-square flex items-center justify-center
            bg-black text-white hover:bg-white active:bg-white hover:text-black active:text-black
         `}
      >
         <span className="material-symbols-outlined">arrow_back</span>
      </motion.button>
   );
}
