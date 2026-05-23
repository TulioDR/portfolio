import HomeTitleText from "@/app/_components/HomeTitleText";
import { motion } from "framer-motion";

type Props = {};

export default function HomeTitle({}: Props) {
   return (
      <motion.div style={{ z: 10 }} className=" flex-1 relative  ">
         <div className="absolute inset-0 flex items-center translate-x-16">
            <HomeTitleText />
         </div>
      </motion.div>
   );
}
