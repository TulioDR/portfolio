import AnimatedLine from "@/app/(main)/contact/_components/AnimatedLine";

type Props = {};

export default function BorderLines({}: Props) {
   return (
      <>
         <AnimatedLine className="absolute top-0 left-0" />
         <AnimatedLine vertical className="absolute top-0 right-0" />
         <AnimatedLine reverse className="absolute bottom-0 right-0" />
         <AnimatedLine vertical reverse className="absolute bottom-0 left-0" />
      </>
   );
}
