type Props = {
   bottom?: true;
};

export default function Portal({ bottom }: Props) {
   return (
      <div
         className={`w-full h-2 absolute left-0 z-20 ${
            bottom ? "top-0 bg-blue-700" : "bottom-0 bg-orange-600"
         }`}
      >
         <div
            className={`absolute w-full h-[300%] ${
               bottom
                  ? "top-full bg-linear-to-b from-blue-900 to-transparent"
                  : "bottom-full bg-linear-to-t from-orange-800 to-transparent"
            }`}
         />
      </div>
   );
}
