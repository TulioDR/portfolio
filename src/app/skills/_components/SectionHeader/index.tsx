import AnimatedText from "@/components/AnimatedText";
import Paragraph from "@/components/Typography/Paragraph";
import useLanguageContext from "@/context/LanguageContext";

type Props = {
   subtitle: string;
   paragraph: string;
   keywords: string;
};

export default function SectionHeader({
   subtitle,
   paragraph,
   keywords,
}: Props) {
   const { language } = useLanguageContext();
   const { keywords: keywordsTR } = language.skills;

   return (
      <div className="">
         <AnimatedText text={`# ${subtitle}`} className="font-semibold mb-5" />
         <Paragraph text={paragraph} />
         <div className="text-gray-500 text-xs font-medium mt-2">
            <AnimatedText text={keywordsTR} />
            <AnimatedText text={keywords} />
         </div>
      </div>
   );
}
