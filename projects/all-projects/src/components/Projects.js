import { allProjects } from '../data';
import Project from './Project';

function Projects() {
    return (
        <section className='all-projects'>
            {allProjects.map((project) => (
                <Project key={project.id} {...project} />
            ))}
        </section>
    );
}

export default Projects;