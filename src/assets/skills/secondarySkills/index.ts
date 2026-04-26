import SkillModel from "@/models/SkillModel";

import expressLogo from "./img/express.png";
import mongodbLogo from "./img/mongodb.png";
import nodeLogo from "./img/node.png";

export const express: SkillModel = {
   name: "Express",
   logo: expressLogo,
   link: "",
};
export const mongoDB: SkillModel = {
   name: "Mongo DB",
   logo: mongodbLogo,
   link: "",
};
export const nodejs: SkillModel = {
   name: "Node.js",
   logo: nodeLogo,
   link: "",
};

const secondarySkills = [express, mongoDB, nodejs];
export default secondarySkills;
