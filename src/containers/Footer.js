import { usePosition } from "context/PositionContext";
import FooterLeft from "../components/Footer/FooterLeft";
import FooterRight from "../components/Footer/FooterRight";

export default function Footer() {
   const { contact, contactRef } = usePosition();
   return (
      <div ref={contactRef}>
         <div ref={contact} className="lg:flex w-full">
            <FooterLeft />
            <FooterRight />
         </div>
      </div>
   );
}
