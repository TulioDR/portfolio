import { motion } from "framer-motion";

type Props = { projects?: boolean };

const projectsUnderline = {
   initial: { width: 0 },
   animate: {
      width: "100%",
      transition: {
         duration: 0.6,
         ease: [0.645, 0.045, 0.355, 1],
      },
   },
};

const normal1 = {
   initial: { width: "100%" },
   animate: { x: 0 },
};
const normal2 = {
   initial: { width: "100%", x: "-100%" },
   animate: {
      x: 0,
      transition: {
         duration: 0.8,
         ease: [0.645, 0.045, 0.355, 1],
      },
   },
};

export default function Underline({ projects }: Props) {
   return (
      <div className="space-y-3 md:space-y-5 w-28 md:w-36">
         <div className="w-2/3 h-1">
            <motion.div
               variants={projects ? projectsUnderline : normal1}
               className="bg-main-orange h-full rounded-sm"
            ></motion.div>
         </div>
         <div className="w-2/3 h-1 ml-[33.33%]">
            <motion.div
               variants={projects ? projectsUnderline : normal2}
               className="bg-main-orange h-full rounded-sm"
            ></motion.div>
         </div>
      </div>
   );
}
