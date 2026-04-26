import React from "react";
import { motion } from "framer-motion";
import useDeviceSizeContext from "@/context/useDeviceSizeContext";

type Props = {
   children: React.ReactNode;
};

export default function AppContainer({ children }: Props) {
   const { isMobile } = useDeviceSizeContext();
   if (isMobile === null) return <></>;
   return <motion.div>{children}</motion.div>;
}
