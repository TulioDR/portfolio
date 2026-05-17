import AnimatedText from "./AnimatedText";

type Props = {
   title: string;
   className?: string;
};

export default function PageTitle({ title, className = "" }: Props) {
   return (
      <AnimatedText
         initial
         text={title}
         className={`text-center text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.9] tracking-wide font-black uppercase stroke-black ${className}`}
      />
   );
}
