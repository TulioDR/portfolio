import useLanguageContext from "@/context/LanguageContext";
import ProjectsSlider from "../ProjectsSlider";
import FlipCard from "../FlipCard";
import BackComponent from "./BackComponent";

type Props = {
   swipeValue: boolean;
};

export default function Desktop({ swipeValue }: Props) {
   const { language } = useLanguageContext();
   const { coder, developer, engineer } = language.home.flipCards;

   const cards = [coder, developer, engineer];

   return (
      <div className="h-full w-full flex">
         {cards.map((text, index) => (
            <FlipCard
               key={index}
               backComponent={<BackComponent text={text} />}
               frontComponent={
                  <ProjectsSlider
                     left={index === 0}
                     center={index === 1}
                     right={index === 2}
                     swipeValue={swipeValue}
                  />
               }
            />
         ))}
      </div>
   );
}
