import AnimatedText from "../AnimatedText";

type Props = {
   text: string;
   blackText?: true;
};

export default function Subtitle({ text, blackText }: Props) {
   return (
      <AnimatedText
         className={`font-black text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl ${blackText ? "text-black" : "text-white"}`}
         text={text}
      />
   );
}
