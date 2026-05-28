import dynamic from "next/dynamic";

const AdaptiveClient = dynamic(() => import("./BreakpointSwitcher"), {
   ssr: false,
   loading: () => null,
});

export default AdaptiveClient;
