import AnimatedText from "@/components/AnimatedText";
import useLanguageContext from "@/context/LanguageContext";

type Props = {};

export default function HomeTitleText({}: Props) {
   const { language } = useLanguageContext();
   const { title } = language.home;
   return (
      <AnimatedText
         text={title}
         className="font-black uppercase text-black text-[15vw]! md:text-[10vw]! xl:text-[5vw]!"
      />
   );
}
