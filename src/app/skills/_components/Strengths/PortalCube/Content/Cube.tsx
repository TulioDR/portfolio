import React from "react";
import { motion } from "framer-motion";
import useDragContext from "../../DragContext";

type Props = {
   dragConstraints: React.MutableRefObject<null>;
};

export default function Cube({ dragConstraints }: Props) {
   const { x, y, isOn, turnOn, turnOff } = useDragContext();
   const handleUpdate = (e: any) => {
      x.set(e.x);
      y.set(e.y);
   };
   return (
      <motion.div
         drag
         style={{ x, y }}
         onMouseDown={turnOn}
         onMouseUp={turnOff}
         onDragEnd={turnOff}
         dragConstraints={dragConstraints}
         onUpdate={handleUpdate}
         className="aspect-square w-2/5 rounded-md cursor-grab active:cursor-grabbing overflow-hidden relative p-2"
      >
         <div className="w-full h-full bg-gray-600 flex items-center justify-center">
            <div className="bg-gray-600 rounded-full aspect-square w-3/4 z-10 overflow-hidden relative flex items-center justify-center">
               <div
                  className={`absolute top-1/2 -translate-y-1/2 w-full h-[5%] duration-300 ${
                     isOn ? "bg-cyan-400" : "bg-white"
                  }`}
               />
               <div
                  className={`absolute left-1/2 -translate-x-1/2 h-full w-[5%] duration-300 ${
                     isOn ? "bg-cyan-400" : "bg-white"
                  }`}
               />
               <div className="rounded-full bg-black w-[80%] aspect-square relative flex justify-center items-center">
                  <div
                     className={`rounded-full w-[80%] aspect-square flex justify-center items-center duration-300 ${
                        isOn ? "bg-cyan-400" : "bg-white"
                     }`}
                  >
                     <div className="rounded-full bg-gray-400 w-[55%] aspect-square" />
                  </div>
               </div>
            </div>
         </div>

         <div className="absolute top-0 left-0 w-1/3 aspect-square bg-gray-400" />
         <div className="absolute bottom-0 left-0 w-1/3 aspect-square bg-gray-400" />
         <div className="absolute bottom-0 right-0 w-1/3 aspect-square bg-gray-400" />
         <div className="absolute top-0 right-0 w-1/3 aspect-square bg-gray-400" />
         <div className="w-1/5 h-full top-0 left-1/2 absolute -translate-x-1/2 py-1">
            <div className="w-full h-full bg-gray-400" />
         </div>
         <div className="h-1/5 w-full left-0 top-1/2 absolute -translate-y-1/2 px-1">
            <div className="h-full w-full bg-gray-400" />
         </div>
      </motion.div>
   );
}
