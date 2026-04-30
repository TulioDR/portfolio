import React from "react";
import { CARD_ASPECT_RATIO } from "@/app/projects/_constants/ASPECT_RATIO";

type Props = {
   children: React.ReactNode;
};

export default function ProjectCardsContainer({ children }: Props) {
   // const [cardWidth, setCardWidth] = useState<number | null>(null);

   // useEffect(() => {
   //    setCardWidth(CARD_ASPECT_RATIO * (window.innerHeight / 2));
   // }, []);
   const spacerWidth = `calc(50vw - (50vh * ${CARD_ASPECT_RATIO}) / 2)`;
   return (
      <>
         <div className={`gap-5 2xl:gap-10 h-1/2 flex`}>{children}</div>
         <div style={{ minWidth: spacerWidth }} className="h-full shrink-0" />
      </>
   );
}
