import SkillModel from "@/models/SkillModel";
import TechnologyCard from "./TechnologyCard";

type Props = { technologies: SkillModel[] };

export default function Layout9({ technologies }: Props) {
   return (
      <div className="hidden sm:grid grid-cols-5 gap-5">
         <div className="flex flex-col justify-center space-y-5">
            <TechnologyCard technology={technologies[0]} />
         </div>
         <div className="flex flex-col justify-center space-y-5">
            <TechnologyCard technology={technologies[1]} />
            <TechnologyCard technology={technologies[2]} />
         </div>
         <div className="flex flex-col justify-center space-y-5">
            <TechnologyCard technology={technologies[3]} />
            <TechnologyCard technology={technologies[4]} />
            <TechnologyCard technology={technologies[5]} />
         </div>
         <div className="flex flex-col justify-center space-y-5">
            <TechnologyCard technology={technologies[6]} />
            <TechnologyCard technology={technologies[7]} />
         </div>
         <div className="flex flex-col justify-center space-y-5">
            <TechnologyCard technology={technologies[8]} />
         </div>
      </div>
   );
}
