import { ProjectTranslations } from "@/models/ProjectModel";
import DescriptionTitle from "./DescriptionTitle";
import useLanguageContext from "@/context/LanguageContext";

type Props = {
   currentLan: ProjectTranslations;
};

export default function Description({ currentLan }: Props) {
   const { date, role, overview } = currentLan;

   const { currentLanguage } = useLanguageContext();
   const { roleTile, dateTitle, overviewTitle } =
      currentLanguage.projects.details;
   return (
      <div className="sm:flex justify-between space-y-5 sm:space-y-0 sm:space-x-10">
         <div className="space-y-3 sm:space-y-5">
            <DescriptionTitle>{roleTile}</DescriptionTitle>
            <div>{role}</div>
         </div>
         <div className="space-y-3 sm:space-y-5">
            <DescriptionTitle>{dateTitle}</DescriptionTitle>
            <div>{date}</div>
         </div>
         <div className="space-y-3 sm:space-y-5">
            <DescriptionTitle>{overviewTitle}</DescriptionTitle>
            <div>{overview}</div>
         </div>
      </div>
   );
}
