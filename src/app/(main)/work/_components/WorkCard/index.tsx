import SideHeader from "./SideHeader";

type Props = {};

export default function WorkCard({}: Props) {
   return (
      <div
         className={`flex flex-col w-full overflow-hidden p-4 bg-black border border-line rounded `}
      >
         <div className="w-full flex gap-4 overflow-hidden">
            <SideHeader />
            <div className="aspect-16/18 md:aspect-video 2xl:aspect-32/9 flex-1 bg-red-500 rounded-xs"></div>
         </div>
         <div className={`grid lg:grid-cols-2 gap-16 pt-8`}>
            <div className="flex-1">
               <div className="text-lg">Subtitle</div>
               <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto veniam, id cum explicabo asperiores beatae adipisci
                  nobis aut quis debitis!
               </p>
               <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto veniam, id cum explicabo asperiores beatae adipisci
                  nobis aut quis debitis!
               </p>
               <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto veniam, id cum explicabo asperiores beatae adipisci
                  nobis aut quis debitis!
               </p>
            </div>
            <div className=" flex-1">
               <div className="text-lg">Subtitle</div>
               <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto veniam, id cum explicabo asperiores beatae adipisci
                  nobis aut quis debitis!
               </p>
               <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto veniam, id cum explicabo asperiores beatae adipisci
                  nobis aut quis debitis!
               </p>
            </div>
         </div>
      </div>
   );
}
