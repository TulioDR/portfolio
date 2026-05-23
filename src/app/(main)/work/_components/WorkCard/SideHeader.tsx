type Props = {};

export default function SideHeader({}: Props) {
   return (
      <div className="flex rotate-180 h-full overflow-hidden">
         <div className="flex flex-col justify-between h-full">
            <div
               style={{ writingMode: "vertical-rl" }}
               className="text-sm sm:text-lg md:text-xl lg:text-2xl"
            >
               Location
            </div>
            <div
               style={{ writingMode: "vertical-rl" }}
               className="text-xs sm:text-base md:text-lg lg:text-xl"
            >
               Year
            </div>
         </div>
         <div
            style={{ writingMode: "vertical-rl" }}
            className="text-lg sm:text-2xl md:text-3xl lg:text-4xl uppercase"
         >
            Company title
         </div>
      </div>
   );
}
