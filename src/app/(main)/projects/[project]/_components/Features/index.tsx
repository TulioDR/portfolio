import Subtitle from "@/components/Typography/Subtitle";
import FeatureCard from "./FeatureCard";
import { StaticImageData } from "next/image";

type Props = {
   features: {
      name: string;
      description: string;
      img: StaticImageData;
   }[];
};

export default function Features({ features }: Props) {
   return (
      <div className="flex flex-col gap-4">
         <Subtitle text="Features" blackText />
         <div className="grid grid-cols-3 gap-x-8 gap-y-16">
            {features.map((feature, index) => (
               <FeatureCard feature={feature} key={index} />
            ))}
         </div>
      </div>
   );
}
