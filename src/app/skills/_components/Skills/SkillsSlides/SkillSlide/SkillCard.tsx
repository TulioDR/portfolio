import Image from "next/image";
import { motion } from "framer-motion";
import { SkillType } from "@/app/skills/_types/SkillType";

type Props = {
   skill: SkillType;
   disableHover?: true;
   bigText?: true;
};

export default function SkillCard({ skill, disableHover, bigText }: Props) {
   const { logo, name, link } = skill;
   const onTap = () => {
      console.log(link);
   };
   return (
      <div
         className={`aspect-square w-full relative 
            ${disableHover ? "pointer-events-none" : ""}
         `}
      >
         <div className="h-full w-full border-gray-400 border" />
         <motion.div
            onTap={onTap}
            whileHover={{ x: 10, y: -10 }}
            whileTap={{ x: 0, y: 0 }}
            className="absolute top-0 left-0 w-full h-full bg-linear-to-tr from-gray-400 to-gray-400/70 flex items-center justify-center cursor-pointer"
         >
            <div
               className={`aspect-square w-[95%] flex flex-col items-center justify-center border border-black text-black
                  ${bigText ? "gap-5" : "gap-2"}   
               `}
            >
               <div className="aspect-square relative w-1/2 flex items-center">
                  <Image src={logo} alt={name} />
               </div>
               <div
                  className={`text-center text-black ${
                     bigText
                        ? "text-sm sm:text-base md:text-lg lg:text-base xl:text-lg 2xl:text-3xl"
                        : "text-xs sm:text-sm"
                  }`}
               >
                  {name}
               </div>
            </div>
         </motion.div>
      </div>
   );
}
