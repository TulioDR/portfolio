import { AnimatePresence, MotionValue } from "framer-motion";
import HoverPreviewContainer from "./HoverPreviewContainer";

type Props = {
   isOpen: boolean;
   mouseX: MotionValue<number>;
   mouseY: MotionValue<number>;
   bottom?: true;
   children: React.ReactNode;
   isExpanded?: boolean;
};

export default function HoverPreview({
   isOpen,
   mouseX,
   mouseY,
   bottom,
   children,
   isExpanded,
}: Props) {
   return (
      <AnimatePresence>
         {isOpen && !!mouseX.get() && !!mouseY.get() && (
            <HoverPreviewContainer
               bottom={bottom}
               mouseX={mouseX}
               mouseY={mouseY}
               isExpanded={isExpanded}
            >
               {children}
            </HoverPreviewContainer>
         )}
      </AnimatePresence>
   );
}
