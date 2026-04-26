import AnimatedText from "@/components/AnimatedText";
import useLanguageContext from "@/context/LanguageContext";

type Props = {};

export default function HomeTitleText({}: Props) {
   const { language } = useLanguageContext();
   const { title } = language.home;
   return (
      <AnimatedText
         text={title}
         className="font-black uppercase tracking-tighter text-black text-6xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl"
      />
   );
}
