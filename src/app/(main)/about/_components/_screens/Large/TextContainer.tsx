import usePreloaderContext from "@/modules/preloader/context/PreloaderContext";

type Props = {
   children: React.ReactNode;
};

export default function TextContainer({ children }: Props) {
   const { isLoaded } = usePreloaderContext();

   return (
      <div className="h-full flex-2 overflow-hidden">
         <div className="w-full h-full overflow-hidden flex items-center justify-center pl-32 pr-48 ">
            {isLoaded && children}
         </div>
      </div>
   );
}
