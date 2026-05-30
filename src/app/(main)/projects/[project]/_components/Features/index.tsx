import Subtitle from "@/components/Typography/Subtitle";
import FeatureCard from "./FeatureCard";
import { StaticImageData } from "next/image";
import useLanguageContext from "@/context/LanguageContext";

type Props = {
   features: {
      name: string;
      description: string;
      img: StaticImageData;
   }[];
};

export default function Features({ features }: Props) {
   const { language } = useLanguageContext();

   const { features: featuresText } = language.projectDetails;

   return (
      <div className="flex flex-col gap-4">
         <Subtitle text={featuresText} blackText />
         <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-y-8 gap-x-8 md:gap-y-16">
            {features.map((feature, index) => (
               <FeatureCard feature={feature} key={index} />
            ))}
         </div>
      </div>
   );
}
