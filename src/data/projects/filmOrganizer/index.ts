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
   prisma,
   tmdb,
   framerMotion,
   formik,
   reactSelect,
   axios,
   swiper,
   redux,
} = ALL_TECH;

const filmOrganizer: ProjectType = {
   title: "Film Organizer",
   showcaseImg: showcaseImg,
   landingImg: landingImg,
   link: "film-organizer",
   website: "https://film-organizer.vercel.app/",
   repository: "https://github.com/TulioDR/film-organizer-v2/",
   techStack: [
      html,
      css,
      javascript,
      react,
      nextjs,
      typescript,
      tailwind,
      supabase,
      prisma,
      tmdb,
      framerMotion,
      formik,
      reactSelect,
      axios,
      swiper,
      redux,
   ],
   isFinished: true,
   translations: {
      english: filmOrganizerEnglish,
      spanish: filmOrganizerSpanish,
   },
};

export default filmOrganizer;
