import Description from "components/About/Description";
import Skills from "components/About/Skills";
import { usePosition } from "context/PositionContext";
import Container from "../components/Container";
import { useIdiom } from "context/IdiomContext";

export default function About() {
   const { about, aboutRef } = usePosition();
   const { currentIdiom } = useIdiom();
   const { title } = currentIdiom.about;

   return (
      <div ref={aboutRef}>
         <div
            ref={about}
            className="bg-gray-200 dark:bg-gray transition-all duration-300 w-full text-white pt-24"
         >
            <Container>
               <div
                  data-aos="fade-right"
                  className="text-5xl font-bold mb-5 text-black dark:text-white"
               >
                  {title}
               </div>
               <div className="lg:flex lg:space-x-12 mt-10">
                  <div data-aos="fade-up-right" className="w-full lg:w-2/5">
                     <Description />
                  </div>
                  <div data-aos="fade-up-left" className="w-full lg:w-3/5">
                     <Skills />
                  </div>
               </div>
            </Container>
         </div>
      </div>
   );
}
