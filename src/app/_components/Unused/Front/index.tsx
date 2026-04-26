// import React, { useState } from "react";
// import HomeScreen from "./HomeScreen";
import { MotionValue, motion } from "framer-motion";
// import Title from "./Title";
// import useDeviceSizeContext from "@/context/useDeviceSizeContext";
// import PanelNavigation from "@/modules/navigation/components/PanelNavigation";
// import AnimatedText from "@/components/AnimatedText";
// import useLanguageContext from "@/context/LanguageContext";
// import Socials from "@/components/Socials";
// import MyName from "../../MyName";

type Props = {
   showContent: boolean;
   x: MotionValue<string>;
   y: MotionValue<string>;
};

export default function Front({ showContent, x, y }: Props) {
   // const [selectedNav, setSelectedNav] = useState<string | null>(null);
   // const { isMobile } = useDeviceSizeContext();
   // const { language } = useLanguageContext();
   // const { developer } = language.home.flipCards;
   // return (
   //    <motion.div
   //       style={{ x: isMobile ? 0 : x, y: isMobile ? 0 : y }}
   //       className={`w-full h-full absolute top-0 left-0 flex gap-16
   //          ${isMobile ? "" : "pr-16"}
   //       `}
   //    >
   //       <div
   //          // style={{ textShadow: "0px 5px 10px rgba(0, 0, 0, 0.3)" }}
   //          className={`flex flex-col text-black ${
   //             isMobile ? "py-16 items-center w-full" : ""
   //          }`}
   //       >
   //          <Title />
   //          <HomeScreen selectedNav={selectedNav} showContent={showContent} />
   //          <div className="w-full flex-1 flex">
   //             <MyName />
   //             <div className="flex-1 h-full flex items-center justify-center">
   //                {isMobile ? (
   //                   <AnimatedText
   //                      text={developer}
   //                      className="text-lg font-black"
   //                   />
   //                ) : (
   //                   <Socials tooltipPosition="top" />
   //                )}
   //             </div>
   //          </div>
   //       </div>
   //       {!isMobile && (
   //          <div className="flex-1 h-full">
   //             <PanelNavigation setSelectedNav={setSelectedNav} />
   //          </div>
   //       )}
   //    </motion.div>
   // );
}
