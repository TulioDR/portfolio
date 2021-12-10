export default function SkillsList({ children, id, current, main }) {
   return main ? (
      <ul
         className={`w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 2xl:grid-cols-5 gap-4 transform duration-500 ${
            id === 2 ? "absolute top-0" : ""
         } ${
            current === id
               ? ""
               : id === 1
               ? "-translate-x-full"
               : "translate-x-full"
         }`}
      >
         {children}
      </ul>
   ) : (
      <ul
         className={`w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 2xl:grid-cols-5 gap-4 transform duration-500 ${
            id === 2 ? "absolute top-0" : ""
         } ${
            current === id
               ? ""
               : id === 1
               ? "-translate-x-full"
               : "translate-x-full"
         }`}
      >
         {children}
      </ul>
   );
}
