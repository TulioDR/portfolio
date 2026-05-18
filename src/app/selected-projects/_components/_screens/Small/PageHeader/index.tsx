import MouseIcon from "@/components/MouseIcon";
import PageDescription from "@/components/PageDescription";
import PageTitle from "@/components/PageTitle";
import useLanguageContext from "@/context/LanguageContext";

type Props = {};

export default function PageHeader({}: Props) {
   const { language } = useLanguageContext();
   const { title, description } = language.selectedProjects;

   return (
      <div className="h-svh w-full flex items-center">
         <div className="relative flex flex-col items-center w-full">
            <PageTitle title={title} className="w-min" />
            <div className="w-full sm:w-96">
               <PageDescription text={description} />
            </div>
            <div className="absolute w-full top-full flex items-center justify-center translate-y-4">
               <MouseIcon />
            </div>
         </div>
      </div>
   );
}
