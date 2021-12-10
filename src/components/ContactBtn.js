import { useIdiom } from "context/IdiomContext";
import { useModalState } from "context/ModalStateContext";

export default function ContactBtn() {
   const { openModal } = useModalState();

   const { currentIdiom } = useIdiom();
   const { contactMe } = currentIdiom.contact;

   const lightTheme =
      "text-black border-black hover:border-blue-600 hover:bg-blue-600 hover:text-white";
   const darkTheme =
      "dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-blue-600";
   return (
      <button
         onClick={openModal}
         className={`border-2 rounded-md mt-11 px-10 py-4 tracking-widest font-medium duration-300 transform hover:-translate-y-1 hover:shadow-md uppercase ${lightTheme} ${darkTheme}`}
      >
         {contactMe}
      </button>
   );
}
