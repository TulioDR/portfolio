export default function ChooseSkill({
   children,
   currentSkills,
   setCurrentSkills,
   id,
}) {
   return (
      <div onClick={() => setCurrentSkills(id)} className="cursor-pointer">
         <div
            className={`text-lg font-medium ${
               currentSkills === id
                  ? "text-blue-400"
                  : "text-black dark:text-white"
            }`}
         >
            {children}
         </div>
         <div
            className={`h-1 ease-out duration-500 ${
               currentSkills === id ? "bg-blue-500 w-full" : "bg-gray-400 w-7"
            }`}
         ></div>
      </div>
   );
}
