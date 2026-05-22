import NavButton from "./NavButton";
import useLanguageContext from "@/context/LanguageContext";
import { CONTACT_ICON, HOME_ICON } from "@/constants/ICONS";
import { usePathname } from "next/navigation";
import { XL_MEDIA_QUERY } from "@/constants/MEDIA_QUERIES";
import { useMediaQuery } from "react-responsive";

type Props = {
   isMenuOpen: boolean;
   toggleMenu: () => void;
};

export default function NavButtons({ isMenuOpen, toggleMenu }: Props) {
   const isSmall = useMediaQuery({ maxWidth: XL_MEDIA_QUERY });

   const pathname = usePathname();
   const isNotHome = pathname !== "/";
   const isNotContact = pathname !== "/contact";

   const { toggleLanguage, language } = useLanguageContext();

   const { backHome, quickNavigation, close, contactMe, translate } =
      language.navigation;

   return (
      <div className="fixed top-0 left-0 z-50 w-screen h-svh pointer-events-none p-4">
         <div className="w-full h-full relative">
            <NavButton
               topLeft
               icon={HOME_ICON}
               show={isNotHome}
               tooltip={backHome}
               href="/"
            />
            <NavButton
               bottomLeft
               icon={CONTACT_ICON}
               show={isSmall ? isNotContact : isNotHome && isNotContact}
               tooltip={contactMe}
               href="/contact"
            />
            <NavButton
               topRight
               icon={isMenuOpen ? "close" : "menu"}
               onClick={toggleMenu}
               tooltip={isMenuOpen ? close : quickNavigation}
            />
            <NavButton
               bottomRight
               icon={"translate"}
               onClick={toggleLanguage}
               translate
               tooltip={translate}
            />
         </div>
      </div>
   );
}
