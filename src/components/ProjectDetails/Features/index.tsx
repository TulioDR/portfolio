import Image, { StaticImageData } from "next/image";
import DescriptionTitle from "../Description/DescriptionTitle";
import FeatureContainer from "./FeatureContainer";
import FeatureInner from "./FeatureInner";

interface Props {
   features: {
      name: string;
      description: string;
      img: StaticImageData;
   }[];
}

export default function Features({ features }: Props) {
   return (
      <div className="w-full lg:2/3 xl:w-2/3 2xl:w-1/2 mx-auto space-y-20">
         {features.map((feature, index) => (
            <FeatureContainer key={feature.name} reverse={index % 2 != 0}>
               <FeatureInner>
                  <Image
                     src={feature.img}
                     alt={feature.name}
                     fill
                     sizes="100%"
                     priority
                  />
               </FeatureInner>
               <FeatureInner info>
                  <DescriptionTitle>{feature.name}</DescriptionTitle>
                  <div className="text-lg">{feature.description}</div>
               </FeatureInner>
            </FeatureContainer>
         ))}
      </div>
   );
}
