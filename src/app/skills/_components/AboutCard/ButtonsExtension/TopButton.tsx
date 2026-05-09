import React, { useState } from "react";

type Props = {
   icon: string;
   onClick: () => void;
};

export default function TopButton({ icon, onClick }: Props) {
   const [isDown, setIsDown] = useState<boolean>(false);

   const handleMouseDown = () => setIsDown(true);
   const handleMouseUp = () => setIsDown(false);

   return (
      <button
         onClick={onClick}
         onMouseDown={handleMouseDown}
         onMouseLeave={handleMouseUp}
         onMouseUp={handleMouseUp}
         className={`rounded aspect-square h-12 flex items-center justify-center border-black text-black bg-zinc-200 ${
            isDown ? "border-2" : "border"
         }`}
      >
         <span
            className={`material-symbols-outlined ${isDown ? "scale-95" : ""}`}
         >
            {icon}
         </span>
      </button>
   );
}
