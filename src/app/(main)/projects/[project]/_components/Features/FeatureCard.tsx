import { StaticImageData } from "next/image";

type Props = {
   feature: {
      name: string;
      description: string;
      img: StaticImageData;
   };
};

export default function FeatureCard({ feature }: Props) {
   return (
      <div className="w-full flex flex-col gap-2">
         <div className="aspect-video w-full bg-red-500 rounded-md border border-line overflow-hidden"></div>
         <div className="font-black text-black text-2xl">{feature.name}</div>
         <div className="text-sm text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            alias maxime suscipit non, minima aliquid molestias numquam quas vel
            atque!
         </div>
      </div>
   );
}
