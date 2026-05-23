import MouseIcon from "@/components/MouseIcon";
import PageTitle from "@/components/Typography/PageTitle";
import useLanguageContext from "@/context/LanguageContext";

type Props = {};

export default function PageHeader({}: Props) {
   const { language } = useLanguageContext();
   const { title } = language.about;
   return (
      <div className="relative min-w-max">
         <PageTitle title={title} />
         <div className="absolute top-full left-0 w-full flex justify-center translate-y-3">
            <MouseIcon />
         </div>
      </div>
   );
}
