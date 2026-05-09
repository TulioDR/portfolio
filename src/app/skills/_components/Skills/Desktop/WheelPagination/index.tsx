import AboutCard from "../../../AboutCard";
import CardContent from "./CardContent";

type Props = {
   activeIndex: number;
};

export default function WheelPagination({ activeIndex }: Props) {
   return (
      <div className="row-span-2 aspect-square">
         <AboutCard
            content={<CardContent activeIndex={activeIndex} />}
            squareScreen
            screenOnly
         />
      </div>
   );
}
