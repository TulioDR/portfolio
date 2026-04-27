import AnimatedText from "@/components/AnimatedText";
import useLanguageContext from "@/context/LanguageContext";

type Props = {
   number: number;
   small?: true;
};

export default function Tooltip({ number, small }: Props) {
   const { language } = useLanguageContext();
   const { page } = language.home;

   return (
      <div
         className={`absolute text-accent rounded-sm pointer-events-none ${
            small ? "right-2 top-0.5" : "top-0 left-full translate-x-3"
         }`}
      >
         <AnimatedText
            initial
            text={`${page} 00${number}`}
            className="w-min uppercase text-left text-[10px] sm:text-xs 2xl:text-sm font-bold leading-tight"
         />
      </div>
   );
}
