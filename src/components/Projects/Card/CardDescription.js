export default function CardDescription({ name, description, showLanguages }) {
   return (
      <div
         className={`transform mb-11 group-hover:mb-0 duration-500 overflow-y-auto ${
            showLanguages
               ? "-translate-y-full opacity-0"
               : "translate-y-full group-hover:translate-y-0 group-hover:delay-500"
         }`}
      >
         <div className="w-max">
            <h2 className="text-3xl font-bold">{name}</h2>
            <div className="h-1 w-0 group-hover:w-full bg-blue-500 duration-500 mt-1"></div>
         </div>
         <p className="opacity-0 group-hover:opacity-100 duration-500 group-hover:delay-700 mt-2">
            {description}
         </p>
      </div>
   );
}
