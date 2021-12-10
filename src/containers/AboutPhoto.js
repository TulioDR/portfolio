import Description from "components/About/Description";
import Skills from "components/About/Skills";
import { usePosition } from "context/PositionContext";
import useScroll from "hooks/useScroll";
import Container from "../components/Container";

export default function AboutPhoto() {
   const [onScroll] = useScroll();
   const { about, aboutRef } = usePosition();
   return (
      <div ref={aboutRef}>
         <div
            ref={about}
            className="bg-gray-200 dark:bg-gray transition-all duration-300 w-full text-white"
         >
            <Container>
               <div className="lg:flex lg:space-x-12 pt-24 2xl:pt-0">
                  <div
                     className={`w-full sm:w-2/3 mx-auto md:w-2/5 duration-300 mb-5 lg:mb-0 ${
                        onScroll ? "2xl:-mt-32" : ""
                     }`}
                  >
                     <img
                        src="/projects/photo.jpg"
                        alt="photo"
                        className="rounded-lg shadow-lg object-contain object-top w-full"
                     />
                  </div>
                  <div className="flex w-full lg:w-2/3 flex-col 2xl:mt-24">
                     <Description />
                     <Skills />
                  </div>
               </div>
            </Container>
         </div>
      </div>
   );
}
