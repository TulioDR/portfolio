import AnimatedText from "@/components/AnimatedText";

type Props = { text: string };

export default function ErrorMessage({ text }: Props) {
   return (
      <div className="absolute left-0 top-full h-4 text-xs text-red-300 flex items-center gap-1">
         <span className="material-symbols-outlined text-lg!">warning</span>
         <AnimatedText text={text} initial />
      </div>
   );
}
