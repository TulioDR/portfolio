export default function NavBrand() {
   const scroll = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
   };

   return (
      <div
         data-aos="fade-right"
         onClick={scroll}
         className="flex items-center cursor-pointer"
      >
         <span className="text-blue-600 text-2xl">{"<"}</span>
         <span className="mx-1 text-2xl text-black dark:text-white">TR</span>
         <span className="text-blue-600 text-2xl">{"/>"}</span>
      </div>
   );
}
