export default function Language({ name, img, link }) {
   return (
      <li className="flex justify-center">
         <a
            href={link}
            target="_blank"
            className="flex flex-col items-center w-max group"
         >
            <img
               src={`/logos/${img}`}
               alt={img}
               className="w-14 h-14 object-contain transform duration-200 group-hover:scale-105"
            />
            <div className="text-black dark:text-white">{name}</div>
         </a>
      </li>
   );
}
