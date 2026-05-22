import AnimatedText from "../AnimatedText";

type Props = {
   text: string;
};

export default function PageDescription({ text }: Props) {
   return (
      <AnimatedText
         initial
         text={text}
         className={`text-center text-xs sm:txt-sm mt-2 lg:mt-4`}
      />
   );
}
