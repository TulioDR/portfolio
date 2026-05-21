import Image, { StaticImageData } from "next/image";

type Props = {
   logo: StaticImageData | string;
   name: string;
};

export default function SpeedCard({ logo, name }: Props) {
   return (
      <div className="aspect-square relative overflow-hidden rounded-md bg-white shadow-lg">
         <div className="absolute inset-0 flex items-center justify-center">
            <div className="aspect-square w-2/5 flex items-center">
               <Image src={logo} alt={name} />
            </div>
         </div>
      </div>
   );
}
