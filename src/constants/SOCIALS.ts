export interface socialModel {
   name: string;
   link: string;
   icon: string;
   newLocation?: true;
}

const gmail: socialModel = {
   name: "Gmail",
   link: "mailto:tulioruzo29@gmail",
   icon: "fa-solid fa-envelope",
   newLocation: true,
};
const github: socialModel = {
   name: "Github",
   link: "https://github.com/TulioDR",
   icon: "fa-brands fa-github",
};

const SOCIALS: socialModel[] = [gmail, github, github];

export default SOCIALS;
