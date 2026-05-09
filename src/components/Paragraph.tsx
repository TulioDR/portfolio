import AnimatedText from "./AnimatedText";

type Props = {
   text: string;
   initial?: true;
   className?: string;
};

export default function Paragraph({ text, initial, className = "" }: Props) {
   return (
      <AnimatedText
         text={text}
         initial={initial}
         className={`text-xs md:text-sm lg:text-base text-gray-400 ${className}`}
      />
   );
}
