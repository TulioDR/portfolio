import AnimatedText from "@/components/AnimatedText";
import useLanguageContext from "@/context/LanguageContext";

type Props = {
   bottom?: true;
};

export default function PortalSymbol({ bottom }: Props) {
   const { language } = useLanguageContext();
   const { message1, message2 } =
      language.skills.strengths.strengthScreens.portalCube;
   return (
      <>
         <AnimatedText
            text={bottom ? message2 : message1}
            className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-3xl text-gray-600 font-black text-center"
         />
         <div className={`z-10 ${bottom ? "-mt-7" : "rotate-180 -mb-7"}`}>
            <span className="material-symbols-outlined text-gray-400! text-7xl!">
               shift
            </span>
         </div>
         <div className="w-1/2 aspect-3/1 border-x-20 border-y-10 border-gray-600 rounded-[50%]"></div>
      </>
   );
}
