import TriangleSide from "./TriangleSide";

type Props = {
   activeIndex: number;
   isForward: boolean;
   PAGINATION_LENGTH: number;
};

export default function CardContent({
   activeIndex,
   isForward,
   PAGINATION_LENGTH,
}: Props) {
   return (
      <div className="w-full h-full p-4">
         <div className="w-full h-full relative flex items-end -translate-y-tri-thickness">
            <div className="w-full h-10 z-10 px-10 -translate-y-3">
               <div className="w-full h-full relative">
                  {Array.from({ length: PAGINATION_LENGTH }).map((_, index) => (
                     <TriangleSide
                        key={index}
                        index={index}
                        isForward={isForward}
                        isSelected={index === activeIndex}
                     />
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
}
