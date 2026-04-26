import React from "react";
import { motion } from "framer-motion";
import Branch from "./Branch";
import PreviewTitle from "../../PreviewTitle";
import useLanguageContext from "@/context/LanguageContext";

type Props = {};

export default function AboutPV({}: Props) {
   const [show1, setShow1] = React.useState(false);
   const [show2, setShow2] = React.useState(false);
   const [show3, setShow3] = React.useState(false);

   const handleUpdate = (e: any) => {
      const number = parseFloat(e.width.replace("%", ""));
      if (number >= 100 / 6) setShow1(true);
      if (number >= 100 / 6 + 100 / 3) setShow2(true);
      if (number >= 100 / 6 + (100 / 3) * 2) setShow3(true);
   };

   const { language } = useLanguageContext();
   const { aboutMe } = language.home.preview;

   return (
      <div className="w-full h-full flex flex-col">
         <div className="w-full flex-1 flex items-end justify-center ">
            <PreviewTitle text={aboutMe} />
         </div>
         <div className="w-full h-px relative flex justify-around">
            <Branch start={show1} />
            <Branch start={show2} middle />
            <Branch start={show3} />
            <motion.div
               onUpdate={handleUpdate}
               initial={{ width: 0 }}
               animate={{ width: "100%" }}
               transition={{ duration: 1 }}
               className="h-full bg-accent absolute top-0 left-0"
            />
         </div>
         <div className="w-full flex-1"></div>
      </div>
   );
}
