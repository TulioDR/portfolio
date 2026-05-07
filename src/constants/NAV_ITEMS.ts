import { IconType } from "@/app/_types/IconType";
import {
   HOME_ICON,
   SKILLS_ICON,
   ABOUT_ICON,
   CONTACT_ICON,
   PROJECTS_ICON,
   WORK_ICON,
   SELECTED_PROJECTS_ICON,
} from "@/constants/ICONS";
import PROJECTS, { SELECTED_PROJECTS } from "@/data/projects";
import ProjectType from "@/types/ProjectType";

export const HOME_ITEM: NAV_ITEM_TYPE = {
   name: "Home",
   link: "/",
   icon: HOME_ICON,
};
export const SKILLS_ITEM: NAV_ITEM_TYPE = {
   name: "Skills",
   link: "/skills",
   icon: SKILLS_ICON,
};
export const WORK_ITEM: NAV_ITEM_TYPE = {
   name: "Work",
   link: "/work",
   icon: WORK_ICON,
};
export const PROJECTS_ITEM: NAV_ITEM_TYPE = {
   name: "Projects",
   link: "/projects",
   icon: PROJECTS_ICON,
   subPages: PROJECTS,
};
export const ABOUT_ITEM: NAV_ITEM_TYPE = {
   name: "About",
   link: "/about",
   icon: ABOUT_ICON,
};
export const CONTACT_ITEM: NAV_ITEM_TYPE = {
   name: "Contact",
   link: "/contact",
   icon: CONTACT_ICON,
};
export const SELECTED_PROJECTS_ITEM: NAV_ITEM_TYPE = {
   name: "Selected P.",
   link: "/selected-projects",
   icon: SELECTED_PROJECTS_ICON,
   subPages: SELECTED_PROJECTS,
};

interface NAV_ITEM_TYPE {
   name: string;
   link: string;
   icon: IconType;
   subPages?: ProjectType[];
}

const NAV_ITEMS: NAV_ITEM_TYPE[] = [
   HOME_ITEM,
   SKILLS_ITEM,
   WORK_ITEM,
   SELECTED_PROJECTS_ITEM,
   ABOUT_ITEM,
   PROJECTS_ITEM,
   CONTACT_ITEM,
];

export default NAV_ITEMS;
