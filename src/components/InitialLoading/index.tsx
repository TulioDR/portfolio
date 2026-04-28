type Props = {};

export default function InitialLoading({}: Props) {
   return (
      <div className="fixed top-0 left-0 w-screen h-screen bg-linear-to-tr from-about to-about/50 z-40 p-12 pb-main-spacing">
         <div className="w-full h-full border-24 border-black rounded-3xl bg-primary"></div>
         <div className="absolute bottom-0 left-main-spacing h-main-spacing w-96 pt-8">
            <div className="w-full h-full flex">
               {Array.from({ length: 20 }).map((_, index) => (
                  <div
                     key={index}
                     className={`flex-1 h-full  ${
                        index % 2 === 0 ? "" : "bg-black rounded-t-md"
                     }`}
                  ></div>
               ))}
            </div>
         </div>
         <div className="h-main-spacing right-main-spacing absolute bottom-0 flex items-center gap-5">
            <div className="h-16 aspect-square rounded-lg border-black border-2 text-black bg-text"></div>
            <div className="h-16 aspect-square rounded-lg border-black border-2 bg-accent text-black"></div>
         </div>
      </div>
   );
}
