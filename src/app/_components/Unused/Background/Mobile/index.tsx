import React from "react";

type Props = {};

export default function Mobile({}: Props) {
   return (
      <div className="w-full h-full border-x border-line flex flex-col">
         <div className="w-full h-16 border-y border-line"></div>
         <div className="flex-1 w-full flex flex-col relative">
            <div className="h-full w-px bg-line top-0 left-1/2 -translate-x-1/2 absolute"></div>
            <div className="w-full flex-1 border-b border-line"></div>
            <div className="px-px flex">
               <div className="h-full flex-1 border-r border-line" />
               <div className="w-[50vw] h-[50svh] p-4 box-content relative">
                  <div className="h-px w-full absolute top-1/2 left-0 -translate-y-1/2 bg-line" />
               </div>
               <div className="h-full flex-1 border-l border-line" />
            </div>
            <div className="w-full flex-1 border-t border-line"></div>
         </div>
         <div className="h-16 w-full border-y border-line"></div>
      </div>
   );
}
