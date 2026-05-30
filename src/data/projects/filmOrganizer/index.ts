import filmOrganizerEnglish from "./translations/english";
import filmOrganizerSpanish from "./translations/spanish";

import showcaseImg from "./img/main/film-organizer-showcase.jpg";
import landingImg from "./img/main/film-organizer-landing.png";
import ProjectType from "@/types/ProjectType";
import { ALL_TECH } from "@/data/technologies";

const {
   html,
   css,
   javascript,
   react,
   nextjs,
   typescript,
   tailwind,
   supabase,
   tmdb,
   framerMotion,
   formik,
   reactSelect,
   axios,
   swiper,
   redux,
} = ALL_TECH;

const filmOrganizer: ProjectType = {
   title: "Film App",
   link: "film-organizer",
   landingImg: landingImg,
   showcaseImg: showcaseImg,
   website: "https://film-organizer.vercel.app/",
   repository: "https://github.com/TulioDR/film-organizer-v2/",
   isFinished: true,
   translations: {
      english: filmOrganizerEnglish,
      spanish: filmOrganizerSpanish,
   },
   techStack: [
      html,
      css,
      javascript,
      react,
      { ...nextjs, special: true },
      { ...typescript, special: true },
      tailwind,
      supabase,
      tmdb,
      framerMotion,
      formik,
      reactSelect,
      axios,
      swiper,
      redux,
   ],
};

export default filmOrganizer;
