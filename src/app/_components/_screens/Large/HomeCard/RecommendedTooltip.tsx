import AnimatedText from "@/components/AnimatedText";
import useLanguageContext from "@/context/LanguageContext";

type Props = {};

export default function RecommendedTooltip({}: Props) {
   const { language } = useLanguageContext();
   const { recommended } = language.home;
   return (
      <div className="absolute top-1 right-2 flex gap-1 items-center animate-pulse">
         <div className="h-2 aspect-square rounded-full bg-accent " />
         <AnimatedText
            text={recommended}
            className="text-accent text-sm uppercase font-black"
         />
      </div>
   );
}
