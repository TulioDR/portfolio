import { useIdiom } from "context/IdiomContext";
import React from "react";

export default function LanguagesBtn({ onClick, showLanguages }) {
   const { currentIdiom } = useIdiom();
   const { languagesUsed } = currentIdiom.projects;
   return (
      <button
         onClick={onClick}
         className={`group-scope text-black flex justify-between items-center shadow-md bg-white rounded-full duration-200 w-10 h-10 ${
            showLanguages ? "w-10" : "md:hover:w-40"
         }`}
      >
         <div
            className={`text-sm truncate w-0 ${
               showLanguages
                  ? ""
                  : "md:group-scope-hover:ml-2 md:group-scope-hover:w-28 group-scope-hover:delay-200"
            }`}
         >
            {showLanguages ? "" : languagesUsed}
         </div>
         <span className="material-icons text-3xl transform group-scope-hover:rotate-180 duration-200 w-10 h-full grid place-content-center">
            {showLanguages ? "close" : "code"}
         </span>
      </button>
   );
}
