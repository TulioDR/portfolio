import PageTitle from "@/components/PageTitle";
import MouseIcon from "@/components/MouseIcon";
import useLanguageContext from "@/context/LanguageContext";
import MobileMouseIcon from "@/components/MouseIcon/MobileMouseIcon";

type Props = {
   showHeader?: boolean;
};

export default function Header({ showHeader = true }: Props) {
   const isMobile = false;

   const { language } = useLanguageContext();
   const { title } = language.projects;

   return (
      <div className="w-main-width flex items-center justify-center h-full ml-main-spacing relative">
         {showHeader && (
            <div className="relative">
               <PageTitle title={title} />
               {!isMobile && (
                  <div className="absolute top-full left-0 flex justify-center w-full translate-y-3">
                     <MouseIcon />
                  </div>
               )}
            </div>
         )}
         <MobileMouseIcon />
      </div>
   );
}
