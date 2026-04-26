import homePage from "../img/features/home-page.png";
import sidebar from "../img/features/sidebar.png";
import supabase from "../img/features/supabase.jpg";
import darkTheme from "../img/features/dark-theme.png";
import login from "../img/features/login.png";
import searchBar from "../img/features/search-bar.png";
import { ProjectTranslations } from "@/models/ProjectModel";

const filmOrganizerSpanish: ProjectTranslations = {
   description: "Encuentra y guarda las películas y series que más te gustan.",
   role: "Diseño de UI / Código",
   date: "MAR 2022",
   overview:
      'Film Organizer es una aplicación MERN full stack hecha con compenentes funcionales en React. La aplicación te permite crear "Listas" en las cuales puedes guardar Películas o Series de TV las obtenidas por medio de la TMDB API. También permite autenticación manual o usando una cuenta existente de Google.',
   features: [
      {
         name: "Página de Inicio",
         description:
            "Incluye películas en el cine, Shows en el aire, y películas por estrenarse",
         img: homePage,
      },
      {
         name: "Sidebar Ampliable",
         description: "Para navegar fácilmente entre páginas",
         img: sidebar,
      },
      {
         name: "Search bar",
         description: "Busca películas o series por su nombre",
         img: searchBar,
      },
      {
         name: "Sign In / Login",
         description: "Hecha con formik (puedes usar Google and Github!)",
         img: login,
      },
      {
         name: "Tema Oscuro",
         description: "Implementado fácilmente con Tailwindcss",
         img: darkTheme,
      },
      {
         name: "Supabase",
         description:
            "Es aquí donde los usuarios y las listas están almacenados, conectado con Prima",
         img: supabase,
      },
   ],
};

export default filmOrganizerSpanish;
