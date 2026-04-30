import { useState } from "react";
import ArrowHead from "./ArrowHead";
import ArrowBody from "./ArrowBody";
import Container from "./Container";

type Props = {
   left?: true;
   onClick: () => void;
   disabled: boolean;
};

export default function NavigationButton({ left, onClick, disabled }: Props) {
   const [isHovered, setIsHovered] = useState<boolean>(false);
   const [showArrowHead, setShowArrowHead] = useState<boolean>(false);

   return (
      <Container onClick={onClick} setIsHovered={setIsHovered}>
         <ArrowBody
            left={left}
            disabled={disabled}
            setShowArrowHead={setShowArrowHead}
         >
            <ArrowHead
               left={left}
               disabled={disabled}
               startRotation={isHovered && showArrowHead}
            />
         </ArrowBody>
      </Container>
   );
}
