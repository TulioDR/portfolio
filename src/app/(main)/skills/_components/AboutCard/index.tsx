import { useState } from "react";

import ButtonsExtension from "./ButtonsExtension";
import PowerAnimation from "./PowerAnimation";
import Screen from "./Screen";
import InfoScreen from "./InfoScreen";

type Props = {
   content: React.ReactNode;
   title?: string;
   text?: string;
   isBright?: boolean;
   screenOnly?: true;
   squareScreen?: true;
   isOn?: boolean;
};

export default function AboutCard({
   content,
   title = "",
   text = "",
   isBright = false,
   screenOnly,
   squareScreen,
   isOn,
}: Props) {
   const [isOnManual, setIsOnManual] = useState<boolean>(isOn || true);
   const [showInfo, setShowInfo] = useState<boolean>(false);

   const isPowerOn = typeof isOn === "boolean" ? isOn : isOnManual;

   const handlePowerButton = () => {
      setShowInfo(false);
      setIsOnManual((prev) => !prev);
   };

   const handleInfoButton = () => {
      if (!isOnManual) return;
      setShowInfo((prev) => !prev);
   };

   return (
      <div
         className={`flex h-full items-stretch
         ${squareScreen ? "" : "w-full"}
      `}
      >
         <div
            className={`flex-1 p-2 rounded bg-gray-200 z-10 ${
               isBright ? "" : "overflow-hidden"
            }`}
         >
            <Screen
               isPowerOn={isPowerOn}
               isBright={isBright}
               squareScreen={squareScreen}
            >
               <InfoScreen
                  isPowerOn={isPowerOn}
                  showInfo={showInfo}
                  text={text}
                  title={title}
               />
               <PowerAnimation isPowerOn={isPowerOn} />
               {content}
            </Screen>
         </div>
         {!screenOnly && (
            <ButtonsExtension
               isPowerOn={isPowerOn}
               showInfo={showInfo}
               handlePowerButton={handlePowerButton}
               handleInfoButton={handleInfoButton}
            />
         )}
      </div>
   );
}
