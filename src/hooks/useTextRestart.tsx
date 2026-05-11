import { useState } from "react";

export default function useTextRestart() {
   const [restart, setRestart] = useState(false);

   const handleRestart = () => {
      setRestart((prev) => !prev);
   };

   return { restart, handleRestart };
}
