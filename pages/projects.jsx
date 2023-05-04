import { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

import Layout from '@layouts/Layout';
import Project from '@layouts/Project';
import { JobList } from '@/components/Data/Jobs';
import { TechnologiesData } from '@/components/Data/Technologies';

export default function Projects() {
    const [jobs, setJobs] = useState([]);
    const [technologies, setTechnologies] = useState([]);
    const [activeTechnology, setActiveTechnology] = useState(null);

    useEffect(() => {
        setJobs(JobList);
        setTechnologies(TechnologiesData);
        setActiveTechnology('*');
    }, []);

    const filterProjects = (tech) => {
        setActiveTechnology(tech); // set active tech

        if (tech === '*') { // if it's 'All', re load all
            setJobs(JobList);
        } else { // otherwise filter by tech
            setJobs(prevState => {
                const newState = JobList.map(obj => {
                    const tmp = obj.projects.filter(project => project.technologies.indexOf(tech) !== -1)
                    console.log(tmp);
                    return { ...obj, projects: tmp };
                });
                return newState;
            });
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

            <Layout className="page-projects">
                <h1>Projects</h1>

                {technologies.length > 0 &&
                    <div className="technologies">
                        {technologies.map((tech, id) =>
                            <div key={id} className={'technologies__single' + (activeTechnology === tech.key ? ' is-active' : '')} onClick={e => filterProjects(tech.key)}>
                                {tech.key !== '*' &&
                                    <Image key={id} src={require('../src/img/' + tech.key + '.webp').default} alt={tech.name} height={20} width={20} />
                                }
                                <span>{tech.name}</span>
                            </div>
                        )}
                    </div>
                }

                {jobs?.length > 0 &&
                    <>
                        {jobs.map(job =>
                            <div key={job.id} className="jobs">
                                <h3 className="text-center"><a href={job.company.url} target="_blank" rel="noreferrer">{job.company.name}</a></h3>

                                <div className="projects">
                                    {job.projects?.map((project, project_id) =>
                                        <Project key={project_id} project={project} delay={(project_id + 1) / 12} />
                                    )}
                                </div>
                            </div>
                        )}
                    </>
                }
            </Layout>
        </>
    );
}