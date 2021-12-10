import { useIdiom } from "context/IdiomContext";
import { usePosition } from "context/PositionContext";
import { useTheme } from "context/ThemeContext";
import Dropdown from "./Dropdown";
import DropdownItem from "./DropdownItem";
import NavItem from "./NavItem";

export default function NavMenu() {
   const { activeTab, homeRef, aboutRef, projectsRef, contactRef } =
      usePosition();

   const { setSpanish, setEnglish, currentIdiom } = useIdiom();
   const { home, about, projects, contact, darkTheme, lightTheme } =
      currentIdiom.navbar;

   const { darkThemeActive, setLightTheme, setDarkTheme } = useTheme();
   return (
      <ul
         data-aos="fade-left"
         className="hidden md:flex space-x-6 items-center text-gray-600 dark:text-gray-400"
      >
         <NavItem active={activeTab} id={1} element={homeRef}>
            {home}
         </NavItem>
         <NavItem active={activeTab} id={2} element={aboutRef}>
            {about}
         </NavItem>
         <NavItem active={activeTab} id={3} element={projectsRef}>
            {projects}
         </NavItem>
         <NavItem active={activeTab} id={4} element={contactRef}>
            {contact}
         </NavItem>

         <Dropdown icon={darkThemeActive ? "dark_mode" : "light_mode"}>
            <DropdownItem icon="dark_mode" onClick={setDarkTheme}>
               {darkTheme}
            </DropdownItem>
            <DropdownItem icon="light_mode" onClick={setLightTheme}>
               {lightTheme}
            </DropdownItem>
         </Dropdown>

         <Dropdown icon="translate">
            <DropdownItem idiom="english.png" onClick={setEnglish}>
               English
            </DropdownItem>
            <DropdownItem idiom="spanish.png" onClick={setSpanish}>
               Español
            </DropdownItem>
         </Dropdown>
      </ul>
   );
}
