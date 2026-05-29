import AnimatedText from "../AnimatedText";

type Props = {
   top?: true;
   bottom?: true;
   left?: true;
   right?: true;
   text: string;
};

export default function MainTooltip({ top, bottom, left, right, text }: Props) {
   return (
      <div
         className={`absolute bg-accent py-1 px-3 rounded-sm min-w-max
            ${top ? "bottom-full -translate-y-2 left-1/2 -translate-x-1/2" : ""}
            ${bottom ? "top-full translate-y-2 left-1/2 -translate-x-1/2" : ""}
            ${left ? "right-full -translate-x-2 top-1/2 -translate-y-1/2" : ""}
            ${right ? "left-full translate-x-2 top-1/2 -translate-y-1/2" : ""}
         `}
      >
         <AnimatedText
            initial
            text={text}
            className="font-black text-sm uppercase text-white w-max"
         />
      </div>
   );
}
