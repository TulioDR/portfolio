import { useIdiom } from "context/IdiomContext";

export default function Description() {
   const { currentIdiom } = useIdiom();
   const { description1, description2 } = currentIdiom.about;
   return (
      <div className="mb-8">
         <p className="text-lg text-gray-600 dark:text-gray-400">
            {description1}
         </p>
         <br />
         <p className="text-lg text-gray-600 dark:text-gray-400">
            {description2}
         </p>
      </div>
   );
}
