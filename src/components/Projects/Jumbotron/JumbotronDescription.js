export default function JumbotronDescription({
   name,
   description,
   showLanguages,
}) {
   return (
      <div
         className={`flex-1 transform duration-300  ${
            showLanguages
               ? "-translate-y-full opacity-0"
               : "opacity-100 delay-300"
         }`}
      >
         <h2 className="font-semibold text-3xl mb-2">{name}</h2>
         <p>{description}</p>
      </div>
   );
}
