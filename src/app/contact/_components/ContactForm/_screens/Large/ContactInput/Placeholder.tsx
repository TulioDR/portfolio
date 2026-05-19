import AnimatedText from "@/components/AnimatedText";

type Props = {
   placeholder: string;
   textarea?: true;
};

export default function Placeholder({ placeholder, textarea }: Props) {
   return (
      <AnimatedText
         initial
         text={placeholder}
         className={`text-line pointer-events-none absolute w-full ${
            textarea
               ? "pt-5 top-0 left-0"
               : "top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-center"
         }`}
      />
   );
}
