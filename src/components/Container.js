export default function Container({ children }) {
   return (
      <div className="w-10/12 sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
         {children}
      </div>
   );
}
