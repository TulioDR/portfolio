import AnimatedText from "@/components/AnimatedText";
import useLanguageContext from "@/context/LanguageContext";

type Props = {};

export default function HomeTitleText({}: Props) {
  const { language } = useLanguageContext();
  const { title1, title2 } = language.home;
  return (
    <div
      style={{
        textShadow:
          "-1px -1px 0 #e5e7eb, 1px -1px 0 #e5e7eb, -1px 1px 0 #e5e7eb, 1px 1px 0 #e5e7eb",
      }}
      className="flex flex-col xl:flex-row 2xl:flex-col gap-3 2xl:gap-0 items-center xl:items-start font-black uppercase text-black text-[12vw] md:text-[4vw] xl:text-[4vw] 2xl:xl:text-[5vw] leading-[0.9]"
    >
      <AnimatedText initial text={title1} className="w-max" />
      <AnimatedText initial text={title2} className="w-max" />
    </div>
  );
}
