export default function ContactPlatform({ text, img, link, account }) {
   return (
      <div className="flex flex-col items-center">
         <div className="text-xl text-center mb-4 font-medium">{text}</div>
         <a href={link} target="_blank">
            <img
               src={`/logos/${img}`}
               alt="platform"
               className="h-20 rounded-lg transform duration-200 hover:scale-105 dark:bg-white dark:p-2"
            />
         </a>
         <div className="mt-2">{account}</div>
      </div>
   );
}
