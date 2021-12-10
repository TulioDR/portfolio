import React from "react";

export default function SelectViewBtn({ id, icon, view, setView, rotate }) {
   return (
      <button
         className={`${
            view === id
               ? "pointer-events-none text-black dark:text-white"
               : "text-gray-600 hover:text-gray-500 duration-100"
         }`}
      >
         <span
            onClick={() => setView(id)}
            className={`material-icons text-4xl transform ${
               rotate ? "rotate-180" : ""
            }`}
         >
            {icon}
         </span>
      </button>
   );
}
