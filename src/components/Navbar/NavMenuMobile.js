import { useIdiom } from "context/IdiomContext";
import { usePosition } from "context/PositionContext";
import { useTheme } from "context/ThemeContext";
import { useState } from "react";
import DropdownItem from "./DropdownItem";
import DropdownMobile from "./DropdownMobile";
import NavItem from "./NavItem";

export default function NavMenuMobile() {
   const { activeTab, homeRef, aboutRef, projectsRef, contactRef } =
      usePosition();

   const { setSpanish, setEnglish, currentIdiom } = useIdiom();
   const {
      home,
      about,
      projects,
      contact,
      darkTheme,
      lightTheme,
      idioms,
      themes,
   } = currentIdiom.navbar;

   const { darkThemeActive, setLightTheme, setDarkTheme } = useTheme();

   const [open, setOpen] = useState(false);
   const openNav = () => setOpen(true);
   const closeNav = () => setOpen(false);
   return (
      <>
         <div
            onClick={openNav}
            className="md:hidden cursor-pointer w-8 h-8 flex items-center justify-center text-black dark:text-white"
         >
            <span className="material-icons">menu</span>
         </div>
         <ul
            className={`absolute w-full sm:w-96 px-10 py-4 shadow-lg bg-gray-300 dark:bg-black h-screen top-0 right-0 md:hidden flex flex-col space-y-6 text-gray-600 dark:text-gray-400 duration-200 transform ${
               open ? "" : "translate-x-full"
            }`}
         >
            <div
               onClick={closeNav}
               className="cursor-pointer flex items-center justify-end h-8"
            >
               <span className="material-icons">close</span>
            </div>
            <NavItem
               active={activeTab}
               id={1}
               element={homeRef}
               mobile
               {...{ closeNav }}
            >
               {home}
            </NavItem>
            <NavItem
               active={activeTab}
               id={2}
               element={aboutRef}
               mobile
               {...{ closeNav }}
            >
               {about}
            </NavItem>
            <NavItem
               active={activeTab}
               id={3}
               element={projectsRef}
               mobile
               {...{ closeNav }}
            >
               {projects}
            </NavItem>
            <NavItem
               active={activeTab}
               id={4}
               element={contactRef}
               mobile
               {...{ closeNav }}
            >
               {contact}
            </NavItem>

            <DropdownMobile
               icon={darkThemeActive ? "dark_mode" : "light_mode"}
               text={themes}
            >
               <DropdownItem
                  icon="dark_mode"
                  onClick={setDarkTheme}
                  mobile
                  {...{ closeNav }}
               >
                  {darkTheme}
               </DropdownItem>
               <DropdownItem
                  icon="light_mode"
                  onClick={setLightTheme}
                  mobile
                  {...{ closeNav }}
               >
                  {lightTheme}
               </DropdownItem>
            </DropdownMobile>

            <DropdownMobile icon="translate" text={idioms}>
               <DropdownItem
                  idiom="english.png"
                  onClick={setEnglish}
                  mobile
                  {...{ closeNav }}
               >
                  English
               </DropdownItem>
               <DropdownItem
                  idiom="spanish.png"
                  onClick={setSpanish}
                  mobile
                  {...{ closeNav }}
               >
                  Español
               </DropdownItem>
            </DropdownMobile>
         </ul>
      </>
   );
}
