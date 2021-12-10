import { CSSTransition } from "react-transition-group";

export default function ModalContainer({ children, open }) {
   return (
      <CSSTransition in={open} timeout={300} classNames="modal" unmountOnExit>
         <div className="fixed top-0 z-50 h-screen w-full bg-black bg-opacity-50 flex sm:items-center justify-center">
            <div className="bg-gray-300 dark:bg-gray-800 sm:rounded-xl shadow-lg py-10 px-5 md:px-10 w-full sm:w-11/12 md:w-10/12 lg:max-w-lg overflow-y-auto">
               {children}
            </div>
         </div>
      </CSSTransition>
   );
}
