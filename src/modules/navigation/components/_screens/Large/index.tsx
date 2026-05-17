import { motion } from "framer-motion";
import NavMenuSlider from "./NavMenuSlider";
import NavMenuItems from "./NavMenuItems";
import useHoverPreview from "@/modules/hoverPreview/hooks/useHoverPreview";

type Props = {};

export default function Large({}: Props) {
   const {
      mouseX,
      mouseY,
      getMousePosition,
      xAxisIndex,
      yAxisIndex,
      changeXAxisIndex,
      changeYAxisIndex,
   } = useHoverPreview();

   return (
      <div className="w-full h-full bg-black/90 backdrop-blur p-8">
         <div className="w-full h-full flex border-y border-line">
            <div className="h-full w-16 border-x border-line"></div>
            <motion.div
               onMouseMove={getMousePosition}
               className="flex flex-1 relative px-8 pt-8"
            >
               <NavMenuItems
                  changeXAxisIndex={changeXAxisIndex}
                  changeYAxisIndex={changeYAxisIndex}
               />
            </motion.div>

            <NavMenuSlider
               mouseX={mouseX}
               mouseY={mouseY}
               xAxisIndex={xAxisIndex}
               yAxisIndex={yAxisIndex}
            />

            <div className="h-full w-16 border-x border-line"></div>
         </div>
      </div>
   );
}
