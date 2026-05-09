import React from "react";
import { motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
   transition: any;
   handleUpdate: (e: any) => void;
};

export default function ExtensionContainer({
   children,
   transition,
   handleUpdate,
}: Props) {
   return (
      <motion.div
         animate={{
            x: [150, 0, 0, 0, 0, 150],
            rotate: [0, 20, 0, 0, -20, 0],
            transformOrigin: [
               "0% 100%",
               "0% 100%",
               "0% 100%",
               "0% 0%",
               "0% 0%",
               "0% 0%",
            ],
         }}
         transition={transition}
         onUpdate={handleUpdate}
         className="flex"
      >
         {children}
      </motion.div>
   );
}
