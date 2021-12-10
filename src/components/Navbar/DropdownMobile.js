import { useState } from "react";
import ExpandIcon from "./ExpandIcon";

export default function DropdownMobile({ children, icon, text }) {
   const [open, setOpen] = useState(false);
   const toggle = () => setOpen(!open);

   return (
      <div
         onClick={toggle}
         tabIndex={0}
         className={`relative duration-100 ${
            open ? "text-black dark:text-white" : "hover:text-blue-500"
         }`}
      >
         <div className="flex items-center justify-between cursor-pointer">
            <div className="flex items-center">
               <span className="material-icons">{icon}</span>
               <span className="ml-2">{text}</span>
            </div>
            <ExpandIcon open={open} />
         </div>

         <ul
            className={`rounded-md overflow-hidden duration-300 px-3 ${
               open
                  ? "py-3 opacity-100 text-black dark:text-white"
                  : "h-0 opacity-0"
            }`}
         >
            {children}
         </ul>
      </div>
   );
}
