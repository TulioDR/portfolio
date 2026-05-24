import LayoutSelectorButton from "./LayoutSelectorButton";
import { LayoutType } from "@/app/(main)/projects/_types/LayoutType";
import { ENTER_EASE } from "@/constants/TRANSITIONS";
import { motion } from "framer-motion";

type Props = {
   layout: LayoutType;
   changeLayout: (newLayout: LayoutType) => void;
};

export default function LayoutSelector({ layout, changeLayout }: Props) {
   return (
      <div className="flex fixed top-4 left-0 justify-center w-screen h-16 pointer-events-none z-10">
         <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, transition: ENTER_EASE }}
            className="bg-text flex h-full p-1 rounded border border-primary"
         >
            <LayoutSelectorButton
               icon="view_carousel"
               isSelected={layout === "carousel"}
               onClick={() => changeLayout("carousel")}
            />
            <LayoutSelectorButton
               icon="grid_view"
               isSelected={layout === "grid"}
               onClick={() => changeLayout("grid")}
            />
            <LayoutSelectorButton
               icon="lists"
               isSelected={layout === "list"}
               onClick={() => changeLayout("list")}
            />
         </motion.div>
      </div>
   );
}
