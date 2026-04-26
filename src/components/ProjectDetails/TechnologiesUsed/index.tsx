import SkillModel from "@/models/SkillModel";
import Layout16 from "./Layout16";
import Layout7 from "./Layout7";
import Layout9 from "./Layout9";
import MobileLayout from "./MobileLayout";

type Props = {
   technologies: SkillModel[];
};

export default function TechnologiesUsed({ technologies }: Props) {
   return (
      <>
         {technologies.length === 16 && (
            <Layout16 technologies={technologies} />
         )}
         {technologies.length === 9 && <Layout9 technologies={technologies} />}
         {technologies.length === 7 && <Layout7 technologies={technologies} />}
         <MobileLayout technologies={technologies} />
      </>
   );
}
