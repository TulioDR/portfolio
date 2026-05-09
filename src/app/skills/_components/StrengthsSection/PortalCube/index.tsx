import { DragContextProvider } from "../DragContext";
import AboutCard from "../../AboutCard";
import Content from "./Content";
import useLanguageContext from "@/context/LanguageContext";

type Props = {};

export default function PortalCube({}: Props) {
   const { language } = useLanguageContext();
   const { title1, text1, title2, text2 } =
      language.skills.strengths.strengthScreens.portalCube;

   return (
      <DragContextProvider>
         <div className="order-6 sm:order-4 lg:order-3">
            <AboutCard
               squareScreen
               content={<Content />}
               title={title1}
               text={text1}
            />
         </div>
         <div className="order-7">
            <AboutCard
               squareScreen
               content={<Content bottom />}
               title={title2}
               text={text2}
            />
         </div>
      </DragContextProvider>
   );
}
