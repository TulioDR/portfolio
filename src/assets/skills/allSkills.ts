import SkillModel from "@/models/SkillModel";

import mainSkills from "./mainSkills";
import secondarySkills from "./secondarySkills";

const allSkills: SkillModel[] = mainSkills.concat(secondarySkills);
export default allSkills;
