import ReactLenis, { LenisRef } from "lenis/react";

type Props = {
   onWheel?: () => void;
   children: React.ReactNode;
   orientation?: "vertical" | "horizontal";
   scrollRef?: React.RefObject<LenisRef | null>;
};

export default function ProjectsReactLenis({
   onWheel,
   children,
   orientation = "vertical",
   scrollRef,
}: Props) {
   return (
      <ReactLenis
         onWheel={onWheel}
         ref={scrollRef}
         options={{ orientation: orientation }}
         style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
         className={`[&::-webkit-scrollbar]:hidden overflow-auto h-svh w-screen `}
      >
         {children}
      </ReactLenis>
   );
}
