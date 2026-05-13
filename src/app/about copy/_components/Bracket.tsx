type Props = {
   end?: true;
};

export default function Bracket({ end }: Props) {
   // const HEIGHT = false ? 36 : 48;
   // const WIDTH = HEIGHT / 4;

   return (
      <div
         className={`absolute h-full bg-white w-px z-10
            ${end ? "right-0 rotate-180" : "left-0"}
         `}
      >
         <div className="absolute top-0 left-0 h-px bg-white w-3 lg:w-4" />
         <div className="absolute bottom-0 left-0 h-px bg-white w-3 lg:w-4" />
      </div>
   );
}
