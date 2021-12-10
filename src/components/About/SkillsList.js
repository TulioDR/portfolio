export default function SkillsList({ children, id, current, main }) {
   const styles =
      "w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 2xl:grid-cols-5 gap-4 transform duration-500";

   return main ? (
      <ul className={`${styles} ${current === id ? "" : "-translate-x-full"}`}>
         {children}
      </ul>
   ) : (
      <ul
         className={`${styles} absolute top-0 ${
            current === id ? "" : "translate-x-full"
         }`}
      >
         {children}
      </ul>
   );
}
