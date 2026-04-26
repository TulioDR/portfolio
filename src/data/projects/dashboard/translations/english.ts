import sidebar from "../img/features/sidebar.png";
import theme from "../img/features/theme.png";
import notifications from "../img/features/notifications.png";
import cart from "../img/features/cart.png";
import chat from "../img/features/chat.png";
import profile from "../img/features/profile.png";

import { ProjectTranslations } from "@/models/ProjectModel";

const dashboardEnglish: ProjectTranslations = {
   description: "Clean and Multifunctional Dashboard for admins",
   role: "UI Design / Coding",
   date: "NOV 2022",
   overview:
      "Dashboard concept made with Syncfusion components and react-router-dom.",
   features: [
      {
         name: "Sidebar",
         description: "To navigate between all the pages, apps and charts",
         img: sidebar,
      },
      {
         name: "Theme Color Change",
         description:
            "Light/Dark or change of the main color with the ContextApi",
         img: theme,
      },
      {
         name: "Cart",
         description: "",
         img: cart,
      },
      {
         name: "Chat",
         description: "",
         img: chat,
      },
      {
         name: "Notifications",
         description: "",
         img: notifications,
      },
      {
         name: "Profile",
         description: "",
         img: profile,
      },
   ],
};
export default dashboardEnglish;
