import { MotionValue, useMotionValue } from "framer-motion";
import { createContext, useContext, useState } from "react";

interface ContextInterface {
   x: MotionValue<number>;
   y: MotionValue<number>;
   isOn: boolean;
   turnOn: () => void;
   turnOff: () => void;
}

const DragContext = createContext({} as ContextInterface);

export default function useDragContext() {
   return useContext(DragContext);
}

interface Props {
   children: React.ReactNode;
}

export function DragContextProvider({ children }: Props) {
   const x = useMotionValue(20);
   const y = useMotionValue(20);

   const [isOn, setIsOn] = useState<boolean>(false);

   const turnOn = () => setIsOn(true);
   const turnOff = () => setIsOn(false);

   const value: ContextInterface = {
      x,
      y,
      isOn,
      turnOn,
      turnOff,
   };

   return <DragContext.Provider value={value}>{children}</DragContext.Provider>;
}
