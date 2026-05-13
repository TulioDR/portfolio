import AnimatedText from "@/components/AnimatedText";

type Props = {};

const qualities = ["Coder", "Developer", "Engineer"];

export default function Description({}: Props) {
   return (
      <div className="flex justify-between w-full text-lg pt-4 px-24">
         {qualities.map((quality, index) => (
            <AnimatedText key={index} text={quality} initial />
         ))}
      </div>
   );
}
