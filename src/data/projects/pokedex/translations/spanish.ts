import details from "../img/features/details.png";
import randomize from "../img/features/randomize.png";
import select from "../img/features/select.png";
import searchBar from "../img/features/search-bar.png";

import { ProjectTranslations } from "@/models/ProjectModel";

const pokedexSpanish: ProjectTranslations = {
   description:
      "Un pokédex sencilla para encontrar y aprender más sobre cualquier pokémon",
   role: "Diseño de UI / Código",
   date: "JUL 2022",
   overview:
      "Simple Pokédex es una aplicación web de simple interfaz hecha con PokéApi que permite encontrar pokemones y aprender de ellos.",
   features: [
      {
         name: "Barra de Búsqueda",
         description: "Busca un pokémon por su nombre",
         img: searchBar,
      },
      {
         name: "Selección de Orden",
         description: "Ordena la búsqueda alfabéticamente o por número",
         img: select,
      },
      {
         name: "Aleatorizar",
         description: "Obtén una lista aleatoria de Pokemones",
         img: randomize,
      },
      {
         name: "Detalles del Pokémon",
         description: "Descripción, altura, peso, género, evolución...",
         img: details,
      },
   ],
};

export default pokedexSpanish;
