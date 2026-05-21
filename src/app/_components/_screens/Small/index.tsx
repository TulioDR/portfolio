import HomeTitleText from "../../HomeTitleText";
import CircularScreen from "../../CircularScreen";
import NamesAndSocials from "./NamesAndSocials";

type Props = {};

export default function Small({}: Props) {
   return (
      <>
         <div
            style={{ transformStyle: "preserve-3d" }}
            className="h-full w-full flex flex-col justify-center items-center gap-4 px-4 pb-16 xl:hidden"
         >
            <div className="w-full text-center">
               <HomeTitleText />
            </div>
            <div
               style={{ transformStyle: "preserve-3d" }}
               className="w-full sm:w-[70vw] md:w-[60vw] lg:w-[50vw] shrink-0"
            >
               <CircularScreen selectedIcon="home" />
            </div>
         </div>
         <NamesAndSocials />
      </>
   );
}
