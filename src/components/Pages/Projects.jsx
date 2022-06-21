import { useState } from 'react'
import Layout from './../Layouts/Layout';
import Project from './../Layouts/Project';

import { ProjectsData } from './../Data/Projects';
import { TechnologiesData } from './../Data/Technologies';

import '../../css/_technologies.scss';

export default function Projects() {
    const [projects, setProjects] = useState(ProjectsData);
    const [technologies, setTechnologies] = useState(TechnologiesData);
    const [activeTechnology, setActiveTechnology] = useState('*');

    const filterProjects = (tech) => {
        setActiveTechnology(tech); // set active tech

        if (tech === '*') { // if it's 'All', re load all
            setProjects(ProjectsData);
        } else { // otherwise filter by tech
            setProjects(ProjectsData.filter(project => project.technology === tech));
        }
    }

    return (
        <Layout>
            <h1>Projects</h1>

            {technologies.length > 0 &&
                <div className="technologies">
                    {technologies.map(tech =>
                        <div key={tech.id} className={'technologies__single' + (activeTechnology === tech.key ? ' is-active' : '')} onClick={e => filterProjects(tech.key)}>{tech.name}</div>
                    )}
                </div>
            }

            {projects.length > 0 &&
                <div className="projects">
                    {projects.map(project =>
                        <Project key={project.id} project={project} />
                    )}
                </div>
            }
        </Layout>
    );
}
