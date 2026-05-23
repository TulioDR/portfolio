import SkillCard from "./SkillCard";

type Props = {
   skills: any[];
};

export default function SkillSlide({ skills }: Props) {
   return (
      <div
         className={`grid p-2 lg:p-4 gap-1 sm:gap-2 lg:gap-4
            grid-cols-3
            sm:grid-cols-4
            md:grid-cols-5 
            lg:grid-cols-4  lg:grid-rows-4  lg:h-full
            xl:grid-cols-5  xl:grid-rows-3  xl:h-full
            2xl:grid-cols-6 2xl:grid-rows-3 2xl:h-full 
         `}
      >
         {skills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
         ))}
      </div>
   );
}
