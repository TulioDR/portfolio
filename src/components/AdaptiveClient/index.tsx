import { ReactNode } from "react";
import dynamic from "next/dynamic";
import { useMediaQuery } from "react-responsive";
import { XL_MEDIA_QUERY } from "@/constants/MEDIA_QUERIES";

type Props = {
   small: ReactNode;
   large: ReactNode;
   breakpoint?: number;
};

function BreakpointSwitcher({
   small,
   large,
   breakpoint = XL_MEDIA_QUERY,
}: Props) {
   const isSmall = useMediaQuery({ maxWidth: breakpoint });
   return <>{isSmall ? small : large}</>;
}

const AdaptiveClient = dynamic(() => Promise.resolve(BreakpointSwitcher), {
   ssr: false,
   loading: () => null,
});

export default AdaptiveClient;
