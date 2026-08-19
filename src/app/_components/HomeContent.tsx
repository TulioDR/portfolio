"use client";

import Large from "./../_components/_screens/Large";
import Small from "./../_components/_screens/Small";
import { HomeContextProvider } from "../_context/HomeContext";
import HomeMainContainer from "./HomeMainContainer";

export default function HomeContent() {
  // return (
  //   <div className="w-screen h-screen flex items-center justify-center bg-slate-200 p-8 gap-8">
  //     <div className="flex-1 flex flex-col gap-8 h-full">
  //       {Array.from({ length: 4 }).map((_, index) => (
  //         <div
  //           key={index}
  //           className={`bg-white flex-1 ${index === 0 || index === 3 ? "translate-x-1/2" : ""}`}
  //         ></div>
  //       ))}
  //     </div>
  //     <div className="bg-black w-[33.3vw] h-[33.3vh]"></div>
  //     <div className="flex-1 flex flex-col gap-8 h-full">
  //       {Array.from({ length: 4 }).map((_, index) => (
  //         <div
  //           key={index}
  //           className={`bg-white flex-1 ${index === 0 || index === 3 ? "-translate-x-1/2" : ""}`}
  //         ></div>
  //       ))}
  //     </div>
  //   </div>
  // );
  return (
    <HomeContextProvider>
      <HomeMainContainer>
        <Large />
        <Small />
      </HomeMainContainer>
    </HomeContextProvider>
  );
}
