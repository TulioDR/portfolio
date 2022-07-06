import { useState } from "react";
import { usePosition } from "context/PositionContext";
import { useIdiom } from "context/IdiomContext";
import dynamic from "next/dynamic";

import Container from "components/Container";
import SelectViewBtn from "components/Projects/SelectViewBtn";
// import Jumbotron from "components/Projects/Jumbotron";
import Grid from "components/Projects/Grid";
const Carousel = dynamic(() => import("components/Projects/Carousel"), {
   ssr: false,
});

export default function Projects() {
   const [view, setView] = useState(1);
   const { projects, projectsRef } = usePosition();

   const { currentIdiom } = useIdiom();
   const { title } = currentIdiom.projects;
   return (
      <div ref={projectsRef}>
         <div
            ref={projects}
            className="bg-gray-200 dark:bg-gray transition-all duration-300 w-full pt-24 pb-36"
         >
            <div className="mb-5">
               <Container>
                  <div className="md:flex justify-between items-center">
                     <h1
                        data-aos="fade-right"
                        className="text-5xl font-bold mb-5 dark:text-white"
                     >
                        {title}
                     </h1>
                     <div data-aos="fade-left" className="flex space-x-3">
                        <SelectViewBtn
                           id={1}
                           icon="view_carousel"
                           {...{ view, setView }}
                        />
                        <SelectViewBtn
                           id={2}
                           icon="view_module"
                           {...{ view, setView }}
                        />
                     </div>
                  </div>
               </Container>
            </div>

            {view === 1 && <Carousel />}
            {view === 2 && <Grid />}
         </div>
      </div>
   );
}
