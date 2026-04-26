import TechnologyCard from "./TechnologyCard";

type Props = { technologies?: any };

export default function MobileLayout({ technologies }: Props) {
   return (
      <div className="grid grid-cols-2 sm:hidden gap-5">
         {technologies.map((technology: any, index: number) => (
            <TechnologyCard key={index} technology={technology} />
         ))}
      </div>
   );
}
