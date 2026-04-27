import {
   HOME_ICON,
   SKILLS_ICON,
   ABOUT_ICON,
   CONTACT_ICON,
   PROJECTS_ICON,
   WORK_ICON,
} from "@/constants/ICONS";

export const HOME_ITEM = { name: "Home", link: "/", icon: HOME_ICON };
export const SKILLS_ITEM = {
   name: "Skills",
   link: "/skills",
   icon: SKILLS_ICON,
};
export const WORK_ITEM = {
   name: "Work",
   link: "/work",
   icon: WORK_ICON,
};
export const PROJECTS_ITEM = {
   name: "Projects",
   link: "/projects",
   icon: PROJECTS_ICON,
};
export const ABOUT_ITEM = { name: "About", link: "/about", icon: ABOUT_ICON };
export const CONTACT_ITEM = {
   name: "Contact",
   link: "/contact",
   icon: CONTACT_ICON,
};
export const SELECTED_PROJECTS_ITEM = {
   name: "Selected P.",
   link: "/selected-projects",
   icon: CONTACT_ICON,
};

const NAV_ITEMS = [
   HOME_ITEM,
   SKILLS_ITEM,
   WORK_ITEM,
   SELECTED_PROJECTS_ITEM,
   ABOUT_ITEM,
   PROJECTS_ITEM,
   CONTACT_ITEM,
];

export default NAV_ITEMS;
