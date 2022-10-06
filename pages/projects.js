import { useState } from 'react';
import Head from 'next/head';

import Layout from '@layouts/Layout';
import Project from '@layouts/Project';
import { ProjectsData } from '@/components/Data/Projects';
import { TechnologiesData } from '@/components/Data/Technologies';

export default function Projects() {
    const [projects, setProjects] = useState(ProjectsData);
    const [technologies, setTechnologies] = useState(TechnologiesData);
    const [activeTechnology, setActiveTechnology] = useState('*');

    const filterProjects = (tech) => {
        setActiveTechnology(tech); // set active tech

        if (tech === '*') { // if it's 'All', re load all
            setProjects(ProjectsData);
        } else { // otherwise filter by tech
            setProjects(ProjectsData.filter(project => project.technologies.indexOf(tech) > -1));
        }
    }

    return (
        <>
            <Head>
                <link rel="canonical" href={process.env.NEXT_PUBLIC_APP_URL + '/projects'} />
                <title>Projects | Piero Nanni</title>
                <meta name="description" content="Check out the complete list of websites created by Piero Nanni during his career" />

                <meta property="og:type" content="profile" />
                <meta property="og:title" content="Projects | Piero Nanni" />
                <meta property="og:description" content="Check out the complete list of websites created by Piero Nanni during his career" />
                <meta property="og:image" content="" />
                <meta property="og:url" content={process.env.NEXT_PUBLIC_APP_URL + '/projects'} />
            </Head>

            <Layout className="projects">
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
                            <Project key={project.id} project={project} delay={project.id / 12} />
                        )}
                    </div>
                }
            </Layout>
        </>

    );
}