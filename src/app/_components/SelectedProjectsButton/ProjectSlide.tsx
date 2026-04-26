import Image, { StaticImageData } from "next/image";

type Props = { src: StaticImageData };

export default function ProjectSlide({ src }: Props) {
   return (
      <div className="relative w-full h-full">
         <Image
            src={src}
            alt="image"
            fill
            sizes="100%"
            className="object-cover"
            priority
         />
      </div>
   );
}
