import { AnimatePresence, MotionValue } from "framer-motion";
import HoverPreviewContainer from "./HoverPreviewContainer";

type Props = {
   isOpen: boolean;
   mouseX: MotionValue<number>;
   mouseY: MotionValue<number>;
   bottom?: true;
   children: React.ReactNode;
};

export default function HoverPreview({
   isOpen,
   mouseX,
   mouseY,
   bottom,
   children,
}: Props) {
   return (
      <AnimatePresence>
         {isOpen && (
            <HoverPreviewContainer
               bottom={bottom}
               mouseX={mouseX}
               mouseY={mouseY}
            >
               {children}
            </HoverPreviewContainer>
         )}
      </AnimatePresence>
   );
}
