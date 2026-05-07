import PreviewTitle from "../../PreviewTitle";
import useLanguageContext from "@/context/LanguageContext";
import Img from "./Img";
import { SELECTED_PROJECTS } from "@/data/projects";

type Props = {};

export default function SelectedProjectsPV({}: Props) {
   const { language } = useLanguageContext();
   const { selectedProjects } = language.home.preview;

   return (
      <div className="w-full h-full p-5">
         <div className="w-full h-full relative flex gap-5">
            <div className="w-full h-full top-0 absolute left-0 flex justify-center items-center z-10 bg-linear-to-t from-transparent via-black/80 to-transparent">
               <PreviewTitle text={selectedProjects} />
            </div>
            {SELECTED_PROJECTS.map((project) => (
               <Img key={project.link} project={project} />
            ))}
         </div>
      </div>
   );
}
