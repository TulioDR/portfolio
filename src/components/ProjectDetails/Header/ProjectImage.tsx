import Image, { StaticImageData } from "next/image";

type Props = {
   src: StaticImageData;
   alt: string;
};

export default function ProjectImage({ src, alt }: Props) {
   return (
      <div className="relative h-full w-screen">
         <Image
            src={src}
            alt={alt}
            fill
            sizes="100%"
            className="object-cover object-top"
            priority
         />
      </div>
   );
}
