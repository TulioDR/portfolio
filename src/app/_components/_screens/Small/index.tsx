import HomeTitleText from "../../HomeTitleText";
import MyName from "../../MyName";
import Socials from "@/components/Socials";
import CircularScreen from "../../CircularScreen";

type Props = {};

export default function Small({}: Props) {
   return (
      <div
         style={{ transformStyle: "preserve-3d" }}
         className="h-full w-full flex flex-col py-24 sm:py-4 px-4 xl:hidden "
      >
         <div className="flex-1 w-full flex items-start sm:items-center justify-center">
            <HomeTitleText />
         </div>
         <div
            style={{ transformStyle: "preserve-3d" }}
            className="flex justify-center"
         >
            <div
               style={{ transformStyle: "preserve-3d" }}
               className="w-[75vw] lg:w-[50vw]"
            >
               <CircularScreen selectedIcon="home" />
            </div>
         </div>
         <div
            style={{ transform: `translateZ(${1}px)` }}
            className="flex-1 w-full flex items-center justify-center gap-4"
         >
            <div className="w-min text-center">
               <MyName />
            </div>
            <Socials tooltipPosition="top" />
         </div>
      </div>
   );
}
