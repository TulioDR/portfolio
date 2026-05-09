import Mobile from "./Mobile";
import Desktop from "./Desktop";

type Props = {};

export default function Content({}: Props) {
   // const { isMobile } = useDeviceSizeContext();
   const isMobile = false;

   return (
      <div className="w-full h-full bg-primary">
         {isMobile ? <Mobile /> : <Desktop />}
      </div>
   );
}
