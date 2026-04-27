import { createContext, useContext, useState } from "react";

interface ContextInterface {
   isSpecialExit: boolean;
   startSpecialExitAnimation: () => void;
}

const ProjectsExitAnimationContext = createContext({} as ContextInterface);
export default function useSpecialExitAnimationContext() {
   return useContext(ProjectsExitAnimationContext);
}

type Props = {
   children: React.ReactNode;
};

export function ProjectsExitAnimationProvider({ children }: Props) {
   const [isSpecialExit, setIsSpecialExit] = useState<boolean>(false);

   const startSpecialExitAnimation = () => setIsSpecialExit(true);

   const value = {
      isSpecialExit,
      startSpecialExitAnimation,
   };
   return (
      <ProjectsExitAnimationContext.Provider value={value}>
         {children}
      </ProjectsExitAnimationContext.Provider>
   );
}
