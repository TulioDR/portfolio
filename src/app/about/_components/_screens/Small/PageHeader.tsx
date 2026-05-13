import MouseIcon from "@/components/MouseIcon";
import PageTitle from "@/components/PageTitle";
import useLanguageContext from "@/context/LanguageContext";

type Props = {};

export default function PageHeader({}: Props) {
   const { language } = useLanguageContext();
   const { title } = language.about;
   return (
      <div className="w-full h-svh flex items-center relative">
         <div className="h-1 flex-1 bg-accent"></div>
         <div className="relative">
            <PageTitle title={title} />
            <div className="absolute top-full left-0 w-full flex justify-center translate-y-3">
               <MouseIcon />
            </div>
         </div>
         <div className="h-1 flex-1" />

         <div className="absolute bottom-0 left-0 h-1/2 w-1 bg-accent" />
      </div>
   );
}
