import AnimatedText from "../AnimatedText";

type Props = {
   text: string;
};

export default function Subtitle({ text }: Props) {
   return (
      <AnimatedText
         className="text-white font-black text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"
         text={text}
      />
   );
}
