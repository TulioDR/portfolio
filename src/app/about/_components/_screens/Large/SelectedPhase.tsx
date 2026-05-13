import AnimatedText from "@/components/AnimatedText";

type Props = {
   phase: any;
};

export default function SelectedPhase({ phase }: Props) {
   const text =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ullam unde fugit cum impedit quam omnis, dolorum atque suscipit laboriosam voluptas fuga nulla minus sunt est hic sequi expedita ex maiores quas doloremque culpa temporibus neque! Delectus autem nonexercitationem.";

   return (
      <div className="w-full xl:w-4/5 2xl:w-3/5 flex flex-col">
         <AnimatedText
            initial
            text={phase.title}
            className="lg:text-xl xl:text-2xl 2xl:text-3xl text-center uppercase pb-8"
         />
         <div className="w-full flex flex-col gap-4 lg:text-xs xl:text-sm 2xl:text-base">
            <AnimatedText initial text={text} />
            <AnimatedText initial text={text} />
         </div>
      </div>
   );
}
