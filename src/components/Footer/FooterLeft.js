import ContactBtn from "components/ContactBtn";
import { useIdiom } from "context/IdiomContext";
import React from "react";

export default function FooterLeft() {
   const { currentIdiom } = useIdiom();
   const { title1, title2 } = currentIdiom.contact;
   return (
      <div
         data-aos="fade-right"
         className="lg:w-1/2 lg:-mt-24 py-24 sm:p-32 bg-gradient-to-br from-blue-600 to-green-400 text-white relative flex items-center lg:rounded-tr-lg"
      >
         <img
            src="/svg/team.svg"
            alt="svg"
            className="absolute right-20 opacity-20 w-72"
         />
         <div className="z-10 mx-auto sm:mx-0">
            <div className="text-3xl sm:text-4xl md:text-5xl font-black text-black dark:text-white">
               {title1} <br /> {title2}
            </div>
            <ContactBtn />
         </div>
      </div>
   );
}
