import pokedexEnglish from "./translations/english";
import pokedexSpanish from "./translations/spanish";

import landingImg from "./img/main/pokedex-landing.png";
import showcaseImg from "./img/main/pokedex-showcase.jpg";
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
   framerMotion,
} = ALL_TECH;

const pokedex: ProjectType = {
   title: "Interactive Pokédex",
   showcaseImg: showcaseImg,
   landingImg: landingImg,
   link: "pokedex",
   website: "https://pokedex-animated.vercel.app/",
   repository: "https://github.com/TulioDR/pokedex",
   techStack: [
      html,
      css,
      javascript,
      react,
      nextjs,
      typescript,
      tailwind,
      framerMotion,
   ],
   isFinished: true,
   translations: {
      english: pokedexEnglish,
      spanish: pokedexSpanish,
   },
};

export default pokedex;
