export default function DropdownItem({
   icon,
   children,
   idiom,
   onClick,
   mobile,
   closeNav,
}) {
   const onClickFunction = () => {
      onClick();
      if (mobile) closeNav();
   };
   return (
      <li
         onClick={onClickFunction}
         className={`flex items-center rounded-md space-x-2 hover:bg-blue-300 dark:hover:bg-blue-500 p-2 cursor-pointer`}
      >
         {idiom ? (
            <img src={`/logos/${idiom}`} alt="language" className="w-6" />
         ) : (
            <span className="material-icons">{icon}</span>
         )}

         <span>{children}</span>
      </li>
   );
}
