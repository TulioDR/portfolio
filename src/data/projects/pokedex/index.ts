import ProjectModel from "@/models/ProjectModel";
import pokedexTech from "./technologies";
import pokedexEnglish from "./translations/english";
import pokedexSpanish from "./translations/spanish";

import landingImg from "./img/pokedex-landing.png";
import showcaseImg from "./img/pokedex-showcase.jpg";

const pokedex: ProjectModel = {
   title: "Pokédex",
   showcaseImg: showcaseImg,
   landingImg: landingImg,
   link: "pokedex",
   website: "https://pokedex-animated.vercel.app/",
   repository: "https://github.com/TulioDR/pokedex",
   technologies: pokedexTech,
   isFinished: true,
   translations: {
      english: pokedexEnglish,
      spanish: pokedexSpanish,
   },
};

export default pokedex;
