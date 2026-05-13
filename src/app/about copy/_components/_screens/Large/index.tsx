import { LenisRef } from "lenis/react";
import PageHeader from "./PageHeader";
import Timeline from "./Timeline";

type Props = {
   scrollerRef: React.RefObject<LenisRef | null>;
};

export default function Large({ scrollerRef }: Props) {
   return (
      <div className="flex">
         <PageHeader />
         <Timeline scrollerRef={scrollerRef} />
      </div>
   );
}
