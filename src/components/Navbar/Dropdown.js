import { useState } from "react";
import ExpandIcon from "./ExpandIcon";

export default function Dropdown({ children, icon }) {
   const [open, setOpen] = useState(false);
   const toggle = () => setOpen(!open);
   const close = () => setOpen(false);

   return (
      <div
         onClick={toggle}
         onBlur={close}
         tabIndex={0}
         className={`relative flex items-center justify-between cursor-pointer duration-100 ${
            open ? "text-black dark:text-white" : "hover:text-blue-500"
         }`}
      >
         <span className="material-icons">{icon}</span>
         <ExpandIcon open={open} />
         {open && (
            <ul className="absolute w-max right-0 top-full transform translate-y-5 p-3 bg-white dark:bg-gray-300 text-black rounded-md shadow-md">
               {children}
            </ul>
         )}
      </div>
   );
}
