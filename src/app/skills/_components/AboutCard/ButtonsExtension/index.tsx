import TopLight from "./TopLight";
import TopButton from "./TopButton";

type Props = {
   isPowerOn: boolean;
   showInfo: boolean;
   handlePowerButton: () => void;
   handleInfoButton: () => void;
};

export default function ButtonsExtension({
   isPowerOn,
   showInfo,
   handlePowerButton,
   handleInfoButton,
}: Props) {
   return (
      <div className="px-2 self-stretch py-4 flex flex-col items-center justify-between rounded bg-gray-200 border-l border-black relative">
         <div className="absolute top-1/2 -translate-y-1/2 right-full w-1/2 h-1/4 bg-yellow-500 -translate-x-px"></div>
         <div className="flex flex-col gap-2">
            <TopButton onClick={handlePowerButton} icon="power_settings_new" />
            <TopButton onClick={handleInfoButton} icon="question_mark" />
         </div>
         <div className="flex flex-col gap-4 w-1/3">
            <TopLight isOn={isPowerOn} green />
            <TopLight isOn={isPowerOn && showInfo} yellow />
            <TopLight isOn={!isPowerOn} red />
         </div>
      </div>
   );
}
