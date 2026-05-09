import React from "react";

type Props = {
   hour: number;
};

export default function HourMark({ hour }: Props) {
   return (
      <div
         style={{ rotate: `${(360 / 12) * hour}deg` }}
         className="absolute top-0 left-0 w-full h-full flex justify-center p-2"
      >
         <div className="h-[6%] w-0.5 bg-black" />
      </div>
   );
}
