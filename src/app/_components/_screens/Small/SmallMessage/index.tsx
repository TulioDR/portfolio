import AnimatedText from "@/components/AnimatedText";
import useLanguageContext from "@/context/LanguageContext";

type Props = {};

export default function SmallMessage({}: Props) {
   const { language } = useLanguageContext();
   const { smallMessage1, smallMessage2 } = language.home;

   return (
      <div className="absolute top-full translate-y-4 w-screen flex items-center justify-center text-center left-1/2 -translate-x-1/2 px-4 text-black text-xs md:text-sm">
         <AnimatedText initial text={`${smallMessage1} (`} />
         <span className="material-symbols-outlined text-lg!">menu</span>
         <AnimatedText initial text={`) ${smallMessage2}`} />
      </div>
   );
}
