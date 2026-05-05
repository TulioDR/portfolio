import MenuItem from "./MenuItem";
import NAV_ITEMS from "@/constants/NAV_ITEMS";

type Props = {
   changeXAxisIndex: (xAxis: number | null) => void;
   changeYAxisIndex: (yAxis: number | null) => void;
};

export default function NavMenuItems({
   changeXAxisIndex,
   changeYAxisIndex,
}: Props) {
   const onEnterMainPage = (xAxis: number) => {
      changeXAxisIndex(xAxis);
      changeYAxisIndex(0);
   };

   const onEnterSubPage = (xAxis: number, yAxis: number) => {
      changeXAxisIndex(xAxis);
      changeYAxisIndex(yAxis + 1);
   };

   const onExit = () => {
      changeXAxisIndex(null);
      changeYAxisIndex(null);
   };

   return (
      <>
         {NAV_ITEMS.map((item, xAxis) => (
            <div key={xAxis} className={`flex-1 flex flex-col`}>
               <MenuItem
                  onMouseEnter={() => onEnterMainPage(xAxis)}
                  onMouseLeave={onExit}
                  title={item.name}
                  href={item.link}
               />
               {item.subPages?.map((project, yAxis) => (
                  <MenuItem
                     key={yAxis}
                     onMouseEnter={() => onEnterSubPage(xAxis, yAxis)}
                     onMouseLeave={onExit}
                     title={project.title}
                     href={"/projects/" + project.link}
                     subpage
                  />
               ))}
            </div>
         ))}
      </>
   );
}
