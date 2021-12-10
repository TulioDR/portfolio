export default function NavItem({
   children,
   active,
   id,
   element,
   mobile,
   closeNav,
}) {
   const scroll = () => {
      element.current.scrollIntoView({ behavior: "smooth" });
      if (mobile) closeNav();
   };
   return (
      <li
         onClick={scroll}
         className={`duration-100 hover:text-blue-500 cursor-pointer font-medium ${
            active() === id ? "text-black dark:text-white" : ""
         }`}
      >
         {children}
      </li>
   );
}
