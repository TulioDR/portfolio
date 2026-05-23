import React from "react";

type Props = {
   isOn: boolean;
   green?: true;
   red?: true;
   yellow?: true;
};

export default function TopLight({ isOn, green, red, yellow }: Props) {
   return (
      <div
         className={`h-full aspect-square duration-100 border border-black
            ${!isOn ? "bg-gray-700" : ""}
            ${isOn && green ? "bg-green-500" : ""}
            ${isOn && red ? "bg-red-600" : ""}
            ${isOn && yellow ? "bg-yellow-400" : ""}
         `}
      ></div>
   );
}
