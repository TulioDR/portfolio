export default function ModalButton({ children, onClick, submit }) {
   return (
      <button
         type={submit ? "submit" : "button"}
         onClick={onClick}
         className={`py-2 px-4 text-white rounded-lg shadow-md transition-all duration-100 uppercase ${
            submit
               ? "bg-blue-600 hover:bg-blue-700"
               : "bg-red-700 hover:bg-red-800"
         }`}
      >
         {children}
      </button>
   );
}
