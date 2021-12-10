import Image from "next/image";
import { useState } from "react";
import CardDescription from "./CardDescription";
import LanguagesBtn from "../LanguagesBtn";
import LanguagesUsed from "../LanguagesUsed";
import { useIdiom } from "context/IdiomContext";
import RedirectBtn from "../RedirectBtn";

export default function Card({ project }) {
   const {
      name,
      description,
      img,
      year,
      languages,
      websiteLink,
      repositoryLink,
   } = project;

   const [showLanguages, setShowLanguages] = useState(false);
   const toggle = () => {
      setShowLanguages(!showLanguages);
   };

   const { currentIdiom } = useIdiom();
   const { repository, website } = currentIdiom.projects;
   return (
      <article
         data-aos="fade-up"
         className="w-full h-125 2xl:h-150 px-6 sm:px-4"
      >
         <div className="relative rounded-md shadow-lg overflow-hidden h-full group">
            <Image
               key={name}
               layout="fill"
               position=""
               priority={true}
               src={`/projects/${img}`}
               alt={name}
               className="object-cover w-full h-full transform duration-500 scale-105 group-hover:scale-100"
            />
            <div className="w-full h-full flex flex-col justify-between absolute top-0 bg-gradient-to-t from-black to-transparent bg-black bg-opacity-40 px-5 py-8 text-white">
               <div className="flex justify-between items-center">
                  <div className="font-semibold text-2xl text-white">
                     {year}
                  </div>
                  <LanguagesBtn onClick={toggle} {...{ showLanguages }} />
               </div>
               <div className="flex-1 flex flex-col justify-end overflow-hidden relative">
                  <CardDescription {...{ name, description, showLanguages }} />
                  <LanguagesUsed {...{ showLanguages, languages }} />
               </div>
               <div className="flex justify-between mt-8">
                  <RedirectBtn repo link={repositoryLink}>
                     {repository}
                  </RedirectBtn>
                  <RedirectBtn website link={websiteLink}>
                     {website}
                  </RedirectBtn>
               </div>
            </div>
         </div>
      </article>
   );
}
