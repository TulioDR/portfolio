import { motion } from "framer-motion";

type SvgProps = {
   black?: boolean;
};

const SvgComponent = ({ black }: SvgProps) => (
   <svg xmlns="http://www.w3.org/2000/svg" height={34} viewBox="0 0 67 34">
      <g
         fill="none"
         fillRule="evenodd"
         stroke={black ? "#000" : "#FFF"}
         strokeLinecap="round"
         strokeWidth={2}
      >
         <path d="M2 16.553h64M17.556 1 2 16.556l15.556 15.555" />
      </g>
   </svg>
);

interface Props {
   onClick: () => void;
   black?: true;
}

export default function BackArrowButton({ onClick, black }: Props) {
   const animation = {
      initial: { x: "100%" },
      animate: { x: 0, transition: { duration: 0.6 } },
      exit: { x: "-110%", transition: { duration: 0.6 } },
   };
   return (
      <div className="overflow-hidden w-16 h-9 duration-300 hover:-translate-x-2">
         <motion.button
            variants={animation}
            initial="initial"
            animate="animate"
            exit="exit"
            onClick={onClick}
            className="w-full h-full relative pointer-events-auto"
         >
            <SvgComponent black={black} />
         </motion.button>
      </div>
   );
}
