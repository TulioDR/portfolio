// import SkillModel from "@/models/SkillModel";
import SkillCard from "./SkillCard";

type Props = {
   skills: any[];
};

export default function SkillSlide({ skills }: Props) {
   return (
      <div className="p-4 gap-1 sm:gap-2 md:gap-4 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-6 lg:max-h-full lg:overflow-y-auto">
         {skills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
         ))}
      </div>
   );
}
