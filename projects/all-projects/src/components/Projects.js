import { useState } from 'react';
import { data } from '../data';
import Project from './Project';

const allCategories = ['all', ...new Set(data.map((x) => x.category))];

function Projects() {

    const [allProjects, setAllProjects] = useState(data);
    const [categories, setCategories] = useState(allCategories);

    const filterProjects = (searchCategory) => {
        if (searchCategory === 'all') {
            setAllProjects(data);
            return;
        }
        const newItems = data.filter((x) => x.category === searchCategory);
        setAllProjects(newItems);
    };

    return (
        <>
            <section className='react-projects'>
                <h1>React Projects</h1>
                {categories.map((cat, index) => (
                    <button
                        className='btn'
                        key={index}
                        onClick={() => filterProjects(cat)}
                    >{cat}</button>
                ))}
            </section>
            <section className='all-projects'>
                {allProjects.map((project) => (
                    <Project key={project.id} {...project} />
                ))}
            </section>
        </>
    );
}

export default Projects;