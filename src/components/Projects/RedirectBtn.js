import { FiGithub } from "react-icons/fi";
import { BiWorld } from "react-icons/bi";

export default function RedirectBtn({ children, repo, website, jumbo, link }) {
   return (
      <a
         href={link}
         target="_blank"
         className={`px-2 py-1 flex items-center rounded-md border-2 text-sm md:text-base duration-300 hover:bg-white hover:text-black ${
            jumbo ? "bg-black border-black hover:border-white" : "border-white"
         }`}
      >
         <span className="mr-1">
            {repo && <FiGithub />}
            {website && <BiWorld />}
         </span>
         <span>{children}</span>
      </a>
   );
}
