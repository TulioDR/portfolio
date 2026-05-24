"use client";

import Large from "./../_components/_screens/Large";
import Small from "./../_components/_screens/Small";
import { HomeContextProvider } from "../_context/HomeContext";
import HomeMainContainer from "./HomeMainContainer";

export default function HomeContent() {
   return (
      <HomeContextProvider>
         <HomeMainContainer>
            <Large />
            <Small />
         </HomeMainContainer>
      </HomeContextProvider>
   );
}
