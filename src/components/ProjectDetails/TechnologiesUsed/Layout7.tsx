import SkillModel from "@/models/SkillModel";
import TechnologyCard from "./TechnologyCard";

type Props = { technologies: SkillModel[] };

export default function Layout7({ technologies }: Props) {
   return (
      <div className="hidden sm:flex flex-col space-y-5 ">
         <div className="grid grid-cols-2 gap-5 w-2/3 mx-auto">
            <TechnologyCard technology={technologies[0]} />
            <TechnologyCard technology={technologies[1]} />
         </div>
         <div className="grid grid-cols-3 gap-5 w-full mx-auto">
            <TechnologyCard technology={technologies[2]} />
            <TechnologyCard technology={technologies[3]} />
            <TechnologyCard technology={technologies[4]} />
         </div>
         <div className="grid grid-cols-2 gap-5 w-2/3 mx-auto">
            <TechnologyCard technology={technologies[5]} />
            <TechnologyCard technology={technologies[6]} />
         </div>
      </div>
   );
}
