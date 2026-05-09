import { motion } from "framer-motion";
import CardContent from "./CardContent";
import AboutCard from "../../AboutCard";

type Props = {
   startHover: () => void;
   stopHover: () => void;
   isCardHovered: boolean;
};

export default function PageHeaderCard({
   startHover,
   stopHover,
   isCardHovered,
}: Props) {
   return (
      <motion.div
         style={{
            rotateX: 40,
            rotateZ: 30,
            boxShadow: "3px 3px 0 2px #a1a1aa",
            // scale: 1.1,
            top: "50%",
            y: "-50%",
            left: "50%",
            x: "-50%",
            transformStyle: "preserve-3d",
         }}
         initial={{ y: "100%" }}
         animate={{ y: "-50%", scale: isCardHovered ? 1.2 : 1.1 }}
         transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
         className="w-4/5 xl:w-1/4 rounded-bl-lg rounded-br-sm rounded-tr-xl absolute"
         onMouseEnter={startHover}
         onMouseLeave={stopHover}
      >
         <AboutCard
            squareScreen
            content={<CardContent />}
            text="Hovering over a card will trigger an animation that represents something about me, by pressing the information button you'll get the description. Try it on the cards below."
            title="Information"
            isBright
         />
      </motion.div>
   );
}
