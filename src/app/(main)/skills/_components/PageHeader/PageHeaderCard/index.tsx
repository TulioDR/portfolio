import { motion } from "framer-motion";
import CardContent from "./CardContent";
import AboutCard from "../../AboutCard";
import { ENTER_EASE } from "@/constants/TRANSITIONS";

type Props = {};

export default function PageHeaderCard({}: Props) {
   return (
      <motion.div
         style={{
            rotateX: 40,
            rotateZ: 30,
            boxShadow: "3px 3px 0 2px #a1a1aa",
            top: "50%",
            y: "-50%",
            left: "50%",
            x: "-50%",
         }}
         initial={{ opacity: 0, scale: 0.8 }}
         animate={{ opacity: 1, scale: 1, transition: ENTER_EASE }}
         className="w-96 xl:w-1/4 rounded-bl-lg rounded-br-sm rounded-tr-xl absolute"
      >
         <AboutCard
            squareScreen
            content={<CardContent />}
            text=""
            title=""
            isBright
         />
      </motion.div>
   );
}
