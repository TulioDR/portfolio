import SkillModel from "@/models/SkillModel";
import TechnologyCard from "./TechnologyCard";

type Props = { technologies: SkillModel[] };

export default function Layout16({ technologies }: Props) {
   return (
      <div className="hidden sm:flex flex-col space-y-5 ">
         <div className="grid grid-cols-4 gap-5 w-full">
            <TechnologyCard technology={technologies[0]} />
            <TechnologyCard technology={technologies[1]} />
            <TechnologyCard technology={technologies[2]} />
            <TechnologyCard technology={technologies[3]} />
         </div>
         <div className="grid grid-cols-3 gap-5 w-3/4 mx-auto">
            <TechnologyCard technology={technologies[4]} />
            <TechnologyCard technology={technologies[5]} />
            <TechnologyCard technology={technologies[6]} />
         </div>
         <div className="grid grid-cols-2 gap-5 w-1/2 mx-auto">
            <TechnologyCard technology={technologies[7]} />
            <TechnologyCard technology={technologies[8]} />
         </div>
         <div className="grid grid-cols-3 gap-5 w-3/4 mx-auto">
            <TechnologyCard technology={technologies[9]} />
            <TechnologyCard technology={technologies[10]} />
            <TechnologyCard technology={technologies[11]} />
         </div>
         <div className="grid grid-cols-4 gap-5 w-full">
            <TechnologyCard technology={technologies[12]} />
            <TechnologyCard technology={technologies[13]} />
            <TechnologyCard technology={technologies[14]} />
            <TechnologyCard technology={technologies[15]} />
         </div>
      </div>
   );
}
