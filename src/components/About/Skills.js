import { useIdiom } from "context/IdiomContext";
import { useState } from "react";

import ChooseSkill from "./ChooseSkill";
import SkillsList from "./SkillsList";
import Language from "./Language";
import { mainSkillsArray, otherSkillsArray } from "constants/skillsArrays";

export default function Skills() {
   const [currentSkills, setCurrentSkills] = useState(1);
   const { currentIdiom } = useIdiom();
   const { mainSkills, lesserSkills } = currentIdiom.about;

   return (
      <>
         <div className="flex space-x-6 mb-7">
            <ChooseSkill id={1} {...{ currentSkills, setCurrentSkills }}>
               {mainSkills}
            </ChooseSkill>
            <ChooseSkill id={2} {...{ currentSkills, setCurrentSkills }}>
               {lesserSkills}
            </ChooseSkill>
         </div>
         <div className="relative overflow-hidden">
            <SkillsList id={1} current={currentSkills} main>
               {mainSkillsArray.map(({ name, img, link }, index) => (
                  <Language key={index} {...{ name, img, link }} />
               ))}
            </SkillsList>
            <SkillsList id={2} current={currentSkills}>
               {otherSkillsArray.map(({ name, img, link }, index) => (
                  <Language key={index} {...{ name, img, link }} />
               ))}
            </SkillsList>
         </div>
      </>
   );
}
