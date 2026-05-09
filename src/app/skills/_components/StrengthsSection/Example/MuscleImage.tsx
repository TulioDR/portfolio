import Image from "next/image";
import muscleGif from "@/assets/gifs/muscle.gif";

type Props = {};

export default function MuscleImage({}: Props) {
   return (
      <div className="w-full h-full flex items-center justify-center bg-white">
         <div className="w-2/3 relative aspect-square">
            <Image sizes="100%" src={muscleGif} alt="muscle" fill />
         </div>
      </div>
   );
}
