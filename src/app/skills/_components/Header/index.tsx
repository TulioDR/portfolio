import PageTitle from "@/components/PageTitle";
import HeaderCard from "./HeaderCard";
import useLanguageContext from "@/context/LanguageContext";
import MobileMouseIcon from "@/components/MouseIcon/MobileMouseIcon";
import MouseIcon from "@/components/MouseIcon";

type Props = {};

export default function Header({}: Props) {
   const { language } = useLanguageContext();
   const { title } = language.skills;

   const isMobile = false;
   return (
      <div className="w-screen h-svh flex items-center justify-center relative">
         <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center brightness-50">
            <HeaderCard />
         </div>
         <div className="w-full px-4 lg:px-main-spacing flex justify-center z-10 relative">
            <PageTitle title={title} />
            {!isMobile && (
               <div className="absolute top-full left-0 w-full flex justify-center translate-y-3">
                  <MouseIcon />
               </div>
            )}
         </div>
         <MobileMouseIcon />
      </div>
   );
}
