import AnimatedText from "../AnimatedText";

type Props = {
   text: string;
   initial?: true;
   className?: string;
   blackText?: true;
};

export default function Paragraph({
   text,
   initial,
   className = "",
   blackText,
}: Props) {
   return (
      <AnimatedText
         text={text}
         initial={initial}
         className={`text-xs sm:text-sm lg:text-base  ${blackText ? "text-gray-600" : "text-gray-400"} ${className}`}
      />
   );
}
