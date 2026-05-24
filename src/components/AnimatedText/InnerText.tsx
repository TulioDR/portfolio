import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Props = {
   text: string;
   isInView: boolean;
};

export default function InnerText({ text, isInView }: Props) {
   const [currentText, setCurrentText] = useState<string>("");
   const [counter, setCounter] = useState<number>(0);

   useEffect(() => {
      if (!isInView) {
         setCurrentText(text);
         return;
      }
      const MAX_COUNTER = text.length;
      const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

      if (counter >= MAX_COUNTER + 20) return;

      const interval = setInterval(() => {
         setCounter((count) => count + 1);
         setCurrentText(() =>
            text
               .split("")
               .map((letter, index) => {
                  const randomChar = characters.charAt(
                     Math.floor(Math.random() * characters.length),
                  );

                  if (index <= counter) {
                     if (letter === " ") return " ";
                     else {
                        if (index <= counter - 20) return text[index];
                        else return randomChar;
                     }
                  } else {
                     if (letter === " ") return " ";
                     else return "\xa0";
                  }
               })
               .join(""),
         );
      }, 10);
      return () => clearInterval(interval);
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [counter, text]);

   return (
      <motion.div className="relative">
         <div className="absolute top-0 left-0 w-full h-full">
            {currentText}
         </div>
         <div className="opacity-0 pointer-events-none select-none">{text}</div>
      </motion.div>
   );
}
