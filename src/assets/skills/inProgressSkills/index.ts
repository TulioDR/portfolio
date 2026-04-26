import SkillModel from "@/models/SkillModel";

import figmaLogo from "./img/figma.png";
import threejsLogo from "./img/threejs.png";
import pythonLogo from "./img/python.png";

export const figma: SkillModel = {
   name: "Figma",
   logo: figmaLogo,
   link: "https://www.figma.com/",
};
export const threejs: SkillModel = {
   name: "Three.js",
   logo: threejsLogo,
   link: "https://threejs.org/",
};
export const python: SkillModel = {
   name: "Python",
   logo: pythonLogo,
   link: "https://www.python.org/",
};

const inProgressSkills = [figma, threejs, python];
export default inProgressSkills;
