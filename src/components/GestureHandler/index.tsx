"use client";
import React, { useMemo } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

// This extracts only the keys that Framer Motion considers "HTML"
type HTMLKeys = keyof React.JSX.IntrinsicElements & keyof HTMLElementTagNameMap;

type Props<T extends HTMLKeys> = {
   onEnter?: () => void;
   onLeave?: () => void;
   children?: React.ReactNode;
   className?: string;
   el?: T;
} & Omit<HTMLMotionProps<T>, "onEnter" | "onLeave" | "children">;

export default function GestureHandler<T extends HTMLKeys = "button">({
   onEnter,
   onLeave,
   children,
   className = "",
   el,
   ...rest
}: Props<T>) {
   const Wrapper = (el || "button") as T;

   const MotionWrapper = useMemo(
      () => motion.create(Wrapper as any),
      [Wrapper],
   );

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
