import NavButton from "./NavButton";
import useLanguageContext from "@/context/LanguageContext";
import { CONTACT_ICON, HOME_ICON } from "@/constants/ICONS";
import { usePathname } from "next/navigation";
import usePageTransitionContext from "@/context/PageTransitionContext";

type Props = {
   isMenuOpen: boolean;
   toggleMenu: () => void;
   isSmall: boolean;
};

export default function NavButtons({ isMenuOpen, toggleMenu, isSmall }: Props) {
   const pathname = usePathname();
   const isNotHome = pathname !== "/";
   const isNotContact = pathname !== "/contact";

   const { startNavigation } = usePageTransitionContext();

   const { toggleLanguage, language } = useLanguageContext();

   const goToPage = (href: string) => {
      startNavigation(href);
   };

   const { backHome, quickNavigation, close, contactMe, translate } =
      language.navigation;

   return (
      <div className="fixed top-0 left-0 z-50 w-screen h-svh p-4 lg:p-8 pointer-events-none">
         <div className="w-full h-full relative">
            <NavButton
               topLeft
               icon={HOME_ICON}
               show={isNotHome}
               onClick={() => goToPage("/")}
               tooltip={backHome}
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
            <NavButton
               bottomLeft
               icon={CONTACT_ICON}
               show={isSmall ? isNotContact : isNotHome && isNotContact}
               onClick={() => goToPage("/contact")}
               tooltip={contactMe}
            />
         </div>
      </div>
   );
}
