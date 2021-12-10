export default function PopUpMessage({ children, status, success }) {
   return (
      <div
         className={`text-white text-lg py-3 px-5 rounded-lg duration-200 fixed left-7 ${
            status ? "bottom-7" : "-bottom-16"
         } ${success ? "bg-green-800" : "bg-red-800"}`}
      >
         {children}
      </div>
   );
}
