export default function Img({ currentProject, setCurrentProject, project }) {
   const { name, img } = project;
   return (
      <img
         src={`/projects/${img}`}
         alt={name}
         className={`hover:opacity-100 shadow-md ${
            currentProject.name === name
               ? "opacity-100 pointer-events-none"
               : "opacity-60 cursor-pointer"
         }`}
         onClick={() => setCurrentProject(project)}
      />
   );
}
