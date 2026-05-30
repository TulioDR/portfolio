import AboutTR from "./AboutTR";
import ContactTR from "./ContactTR";
import HomeTR from "./HomeTR";
import NavigationTR from "./NavigationTR";
import ProjectDetailsTR from "./ProjectDetailsTR";
import ProjectsTR from "./ProjectsTR";
import SelectedProjectsTR from "./SelectedProjectsTR";
import SkillsTR from "./SkillsTR";

export default interface TranslationType {
   home: HomeTR;
   skills: SkillsTR;
   projects: ProjectsTR;
   about: AboutTR;
   contact: ContactTR;
   selectedProjects: SelectedProjectsTR;
   navigation: NavigationTR;
   projectDetails: ProjectDetailsTR;
}
