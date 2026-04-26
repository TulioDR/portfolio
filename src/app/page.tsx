"use client";

import Large from "./_components/_screens/Large";
import Small from "./_components/_screens/Small";
import useHomeMotion from "./_hooks/useHomeMotion";

export default function Home() {
   const { handleMouseLeave, handleMouseMove, rotateX, rotateY } =
      useHomeMotion();

   return (
      <>
         <Large
            handleMouseMove={handleMouseMove}
            handleMouseLeave={handleMouseLeave}
            rotateX={rotateX}
            rotateY={rotateY}
         />
         <Small rotateX={rotateX} rotateY={rotateY} />
      </>
   );
}
