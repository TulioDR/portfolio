import MyName from "@/app/_components/MyName";
import Socials from "@/components/Socials";

type Props = {};

export default function HomeNameAndSocials({}: Props) {
   return (
      <div
         style={{ transform: `translateZ(${1}px)` }}
         className=" w-full flex-1 relative"
      >
         <div className="h-full absolute top-0 right-0 -translate-x-16 gap-5 flex justify-end items-center">
            <MyName />
            <Socials tooltipPosition="top" />
         </div>
      </div>
   );
}
