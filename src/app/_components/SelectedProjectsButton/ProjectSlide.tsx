import Image, { StaticImageData } from "next/image";

type Props = { src: StaticImageData; alt: string };

export default function ProjectSlide({ src, alt }: Props) {
   return (
      <div className="relative w-full h-full">
         <Image
            src={src}
            alt={alt}
            fill
            sizes="100%"
            className="object-cover"
            priority
         />
      </div>
   );
}
