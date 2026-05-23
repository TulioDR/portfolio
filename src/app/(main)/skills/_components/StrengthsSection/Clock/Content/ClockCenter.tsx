import React from "react";

type Props = {};

export default function ClockCenter({}: Props) {
   return (
      <div className="absolute h-3 z-10 aspect-square top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent" />
   );
}
