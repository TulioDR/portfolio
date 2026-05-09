import { useEffect, useState } from "react";
import AboutCard from "../../AboutCard";
import ButtonsExtension from "../../AboutCard/ButtonsExtension";
import Sound from "./Sound";
import MuscleImage from "./MuscleImage";
import ExtensionContainer from "./ExtensionContainer";

type Props = {};

export default function Example({}: Props) {
   const transition = {
      duration: 4,
      times: [0, 0.28, 0.3, 0.7, 0.72, 1],
      ease: [
         [0.7, 0, 0.84, 0],
         "linear",
         "linear",
         "linear",
         [0.16, 1, 0.3, 1],
      ],
      repeat: Infinity,
   };

   const [isOn, setIsOn] = useState(false);

   const [showSound, setShowSound] = useState<boolean>(false);

   useEffect(() => {
      if (!isOn) return;
      setShowSound(true);
      const timeout = setTimeout(() => {
         setShowSound(false);
      }, 500);
      return () => clearTimeout(timeout);
   }, [isOn]);

   const handleUpdate = (e: any) => {
      if (e.x === 0 && e.rotate === 0) {
         setIsOn(true);
      } else {
         setIsOn(false);
      }
   };
   return (
      <div className="flex w-full">
         <div className="w-full z-10">
            <AboutCard
               screenOnly
               squareScreen
               isOn={isOn}
               content={<MuscleImage />}
            />
         </div>
         <div className="relative flex">
            <Sound showSound={showSound} />
            <ExtensionContainer
               transition={transition}
               handleUpdate={handleUpdate}
            >
               <ButtonsExtension
                  isPowerOn={isOn}
                  showInfo={false}
                  handlePowerButton={() => {}}
                  handleInfoButton={() => {}}
               />
            </ExtensionContainer>
         </div>
      </div>
   );
}
