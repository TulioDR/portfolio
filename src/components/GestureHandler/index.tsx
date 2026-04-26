import React, { useMemo } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
type Props = {
   onEnter?: () => void;
   onLeave?: () => void;
   children?: React.ReactNode;
   className?: string;
   el?: keyof JSX.IntrinsicElements;
};

export default function GestureHandler({
   onEnter,
   onLeave,
   children,
   className = "",
   el: Wrapper = "button",
   ...rest
}: Props & HTMLMotionProps<keyof HTMLElementTagNameMap>) {
   const MotionWrapper = useMemo(() => motion.create(Wrapper), [Wrapper]);

   return (
      <MotionWrapper
         onHoverStart={onEnter}
         onHoverEnd={onLeave}
         onTapStart={onEnter}
         onTap={onLeave}
         onTapCancel={onLeave}
         className={`select-none ${className}`}
         {...rest}
      >
         {children}
      </MotionWrapper>
   );
}
