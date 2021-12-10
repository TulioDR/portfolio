import { createContext, useContext, useRef } from "react";
import { useInView } from "react-intersection-observer";

const PositionContext = createContext();

export function usePosition() {
   return useContext(PositionContext);
}

export default function PositionProvider({ children }) {
   const [banner] = useInView({
      threshold: 0,
   });
   const [about, aboutInView] = useInView({
      threshold: 0.2,
   });
   const [projects, projectsInView] = useInView({
      threshold: 0.5,
   });
   const [contact, contactInView] = useInView({
      threshold: 0.1,
   });

   const homeRef = useRef(null);
   const aboutRef = useRef(null);
   const projectsRef = useRef(null);
   const contactRef = useRef(null);

   const activeTab = () => {
      if (contactInView) return 4;
      else if (projectsInView) return 3;
      else if (aboutInView) return 2;
      else return 1;
   };

   const value = {
      banner,
      about,
      projects,
      contact,
      activeTab,
      homeRef,
      aboutRef,
      projectsRef,
      contactRef,
   };

   return (
      <PositionContext.Provider value={value}>
         {children}
      </PositionContext.Provider>
   );
}
