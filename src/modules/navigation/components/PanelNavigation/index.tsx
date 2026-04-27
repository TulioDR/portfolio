import SelectedProjectsButton from "@/app/_components/SelectedProjectsButton";
import PanelButtons from "./PanelButtons";

type Props = {};

export default function PanelNavigation({}: Props) {
   return (
      <div className="w-full h-full relative border-x border-t border-line">
         <div
            style={{
               boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
            }}
            className="flex flex-col flex-1 bg-white h-full pb-4 lg:pb-8"
         >
            <div className="flex flex-col flex-1 items-center justify-center">
               <PanelButtons />
            </div>
            <div className="h-32 px-24 lg:px-32">
               <SelectedProjectsButton number={6} />
            </div>
         </div>
      </div>
   );
}
