import { useIdiom } from "context/IdiomContext";
import ContactPlatform from "./ContactPlatform";

export default function FooterRight() {
   const { currentIdiom } = useIdiom();
   const { sayHello, checkRepo } = currentIdiom.contact;
   return (
      <div
         data-aos="fade-left"
         className="lg:w-1/2 pt-10 pb-2 md:pt-24 px-12 flex flex-col justify-between items-center dark:text-white relative bg-gray-300 dark:bg-black transition-all duration-300"
      >
         <div className="sm:flex justify-center sm:space-x-10 space-y-6 sm:space-y-0">
            <ContactPlatform
               text={sayHello}
               img="gmail.png"
               link="mailto:tulioruzo29@gmail.com"
               account="tulioruzo29@gmail.com"
            />
            <ContactPlatform
               text={checkRepo}
               img="github.png"
               link="https://github.com/TulioDR"
               account="TulioDR"
            />
         </div>
         <div className="text-xs sm:text-base mt-6">
            Created by Tulio Ruzo, with Next.js
         </div>
      </div>
   );
}
