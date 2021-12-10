import { createContext, useContext, useState } from "react";

const ModalStateContext = createContext();

export function useModalState() {
   return useContext(ModalStateContext);
}

export default function ModalStateProvider({ children }) {
   const [open, setOpen] = useState(false);

   const openModal = () => setOpen(true);
   const closeModal = () => setOpen(false);

   const value = { open, openModal, closeModal };
   return (
      <ModalStateContext.Provider value={value}>
         {children}
      </ModalStateContext.Provider>
   );
}
