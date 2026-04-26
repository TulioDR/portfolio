import details from "../img/features/details.png";
import randomize from "../img/features/randomize.png";
import select from "../img/features/select.png";
import searchBar from "../img/features/search-bar.png";

import { ProjectTranslations } from "@/models/ProjectModel";

const pokedexEnglish: ProjectTranslations = {
   description: "A simple pokédex to find and learn more about any Pokémon",
   role: "UI Design / Coding",
   date: "JULY 2022",
   overview:
      "Simple Pokédex is a web application with a simple UI made with the PokéAPI that allows you to find pokemons and learn about them.",
   features: [
      {
         name: "Search Bar",
         description: "Search for a pokémon by it's name",
         img: searchBar,
      },
      {
         name: "Select Order",
         description: "Order the search alphabetically o by number",
         img: select,
      },
      {
         name: "Randomize",
         description: "Obtain a random list of pokemons",
         img: randomize,
      },
      {
         name: "Pokémon Details",
         description: "Description, height, weight, gender, evolution...",
         img: details,
      },
   ],
};

export default pokedexEnglish;
