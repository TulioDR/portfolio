export default function Language({ children, icon, link }) {
   return (
      <li className="w-max cursor-pointer group-scope">
         <a href={link} target="_blank" className="flex items-center">
            <span>•</span>
            <img src={`/logos/${icon}`} alt="language" className="w-5 mx-1" />
            <span className="group-scope-hover:underline">{children}</span>
         </a>
      </li>
   );
}
