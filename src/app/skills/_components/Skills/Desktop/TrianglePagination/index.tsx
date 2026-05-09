import AboutCard from "../../../AboutCard";
import CardContent from "./CardContent";

type Props = {
   activeIndex: number;
   isForward: boolean;
   PAGINATION_LENGTH: number;
};

export default function TrianglePagination({
   activeIndex,
   isForward,
   PAGINATION_LENGTH,
}: Props) {
   return (
      <div className="row-span-2 aspect-square">
         <AboutCard
            content={
               <CardContent
                  activeIndex={activeIndex}
                  isForward={isForward}
                  PAGINATION_LENGTH={PAGINATION_LENGTH}
               />
            }
            squareScreen
            screenOnly
         />
      </div>
   );
}
