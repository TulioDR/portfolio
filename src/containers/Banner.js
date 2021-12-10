import ContactBtn from "components/ContactBtn";
import Container from "components/Container";
import { useIdiom } from "context/IdiomContext";
import { usePosition } from "context/PositionContext";

export default function Banner() {
   const { banner, homeRef } = usePosition();
   const { currentIdiom } = useIdiom();

   const { title1, title2, title3 } = currentIdiom.home;
   return (
      <div ref={homeRef}>
         <div
            ref={banner}
            className="w-full h-screen duration-300 transition-all bg-gray-300 dark:bg-black flex items-center justify-center"
         >
            <Container>
               <div
                  data-aos="fade-down"
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold block text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-green-400"
               >
                  <div>{title1}</div>
                  <div>{title2}</div>
                  <div>{title3}</div>
               </div>
               <div data-aos="fade-up">
                  <ContactBtn />
               </div>
            </Container>
         </div>
      </div>
   );
}
