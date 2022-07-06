import Container from "components/Container";
import { useIdiom } from "context/IdiomContext";
import Card from "./Card/Card";

export default function Grid() {
   const { currentIdiom } = useIdiom();
   const { projects } = currentIdiom.projects;
   return (
      <Container>
         <div className="grid md:grid-cols-2 lg:grid-cols-2">
            {projects.map((project, index) => (
               <Card key={index} project={project} />
            ))}
         </div>
      </Container>
   );
}
