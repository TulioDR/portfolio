import homePage from "../img/features/home-page.png";
import sidebar from "../img/features/sidebar.png";
import supabase from "../img/features/supabase.jpg";
import darkTheme from "../img/features/dark-theme.png";
import login from "../img/features/login.png";
import searchBar from "../img/features/search-bar.png";
import { ProjectTranslations } from "@/models/ProjectModel";

const filmOrganizerEnglish: ProjectTranslations = {
   description: "Find and keep track of the movies and tv shows you love",
   role: "UI Design / Coding",
   date: "MAR 2022",
   overview:
      'Film Organizer it\'s a full stack MERN web application made with React functional components. The app allows you to create "Lists" in which you can save Movies or TV Shows obtained from the TMDB API. It also allows manual authentication or using an existing Google account',
   features: [
      {
         name: "Home Page",
         description:
            "Includes movies on the theater, shows on air, and upcoming movies",
         img: homePage,
      },
      {
         name: "Expandable Sidebar",
         description: "To navigate easily between pages",
         img: sidebar,
      },
      {
         name: "Search bar",
         description: "Search for movies or shows by their names",
         img: searchBar,
      },
      {
         name: "Sign In / Login",
         description: "Made with formik (you can use Google and Github!)",
         img: login,
      },
      {
         name: "Dark Theme",
         description: "Easily implemented with Tailwindcss",
         img: darkTheme,
      },
      {
         name: "Supabase",
         description:
            "It's here where users and lists are stored, connected with Prisma",
         img: supabase,
      },
   ],
};

export default filmOrganizerEnglish;
