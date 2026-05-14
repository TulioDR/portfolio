import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import TranslateIcon from "./TranslateIcon";
import MainTooltip from "@/components/MainTooltip";
import TransitionLink from "@/modules/pageTransition/components/TransitionLink";
import NavButtonContainer from "./NavButtonContainer";

type Props = {
   icon: string;
   onClick?: () => void;
   topLeft?: true;
   topRight?: true;
   bottomRight?: true;
   bottomLeft?: true;
   show?: boolean;
   translate?: true;
   tooltip: string;
   href?: string;
};

export default function NavButton({
   icon,
   onClick,
   topLeft,
   topRight,
   bottomRight,
   bottomLeft,
   show = true,
   translate,
   tooltip,
   href,
}: Props) {
   const [isHovered, setIsHovered] = useState<boolean>(false);

   const className = "relative w-full h-full flex items-center justify-center";
   const Wrapper = ({ children }: { children: React.ReactNode }) =>
      href ? (
         <TransitionLink href={href} className={className}>
            {children}
         </TransitionLink>
      ) : (
         <button onClick={onClick} className={className}>
            {children}
         </button>
      );

   return (
      <AnimatePresence>
         {show && (
            <NavButtonContainer
               isHovered={isHovered}
               setIsHovered={setIsHovered}
               topLeft={topLeft}
               topRight={topRight}
               bottomRight={bottomRight}
               bottomLeft={bottomLeft}
            >
               <Wrapper>
                  {isHovered && (
                     <MainTooltip
                        key={tooltip}
                        text={tooltip}
                        left={topRight || bottomRight}
                        right={topLeft || bottomLeft}
                     />
                  )}
                  <span className="material-symbols-outlined">{icon}</span>
                  {translate && <TranslateIcon />}
               </Wrapper>
            </NavButtonContainer>
         )}
      </AnimatePresence>
   );
}
