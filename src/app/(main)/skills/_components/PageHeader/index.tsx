import PageTitle from "@/components/Typography/PageTitle";
import useLanguageContext from "@/context/LanguageContext";
import MobileMouseIcon from "@/components/MouseIcon/MobileMouseIcon";
import MouseIcon from "@/components/MouseIcon";
import PageHeaderCard from "./PageHeaderCard";
import usePreloaderContext from "@/modules/preloader/context/PreloaderContext";

type Props = {};

export default function PageHeader({}: Props) {
   const { language } = useLanguageContext();
   const { title } = language.skills;

   const { isLoaded } = usePreloaderContext();

   return (
      <div className="w-full h-svh flex items-center justify-center relative pointer-events-none lg:pointer-events-auto">
         {isLoaded && (
            <>
               <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center brightness-50">
                  <PageHeaderCard />
               </div>
               <div className="w-full px-4 lg:px-24 flex justify-center z-10 relative pointer-events-none">
                  <PageTitle title={title} />
                  <div className="absolute top-full left-0 w-full flex justify-center translate-y-3">
                     <MouseIcon />
                  </div>
               </div>
            </>
         )}
         <MobileMouseIcon />
      </div>
   );
}
