import { CSSProperties, useState } from 'react'
import Head from 'next/head';
import { motion } from 'framer-motion';
import Layout from '@layouts/Layout';
import { JobList } from '@/components/Data/Jobs';
import Link from 'next/link';
import parse from 'html-react-parser';
import DOMPurify from 'dompurify';

// interface JobInterface {
//     id: number,
//     start_date: number | string,
//     end_date: number | string,
//     company: JobCompanyInterface
// }
// interface JobCompanyInterface {
//     name: string,
// }


export default function About() {
    const [jobs, setJobs] = useState(JobList);
    const [activeJob, setActiveJob] = useState(jobs.length);
    const [startYear] = useState(2011);
    const [currentYear] = useState(new Date().getFullYear());

    // Years timeline
    const years = [];
    for (var i = startYear; i <= currentYear; i++) {
        years.push(i);
    }

    return (
        <>
            <Head>
                <link rel="canonical" href={process.env.NEXT_PUBLIC_APP_URL + '/about'} />
                <title>About | Piero Nanni</title>
                <meta name="description" content="Discover who Piero Nanni is, his career path and what he is doing at the moment" />

                <meta property="og:type" content="profile" />
                <meta property="og:title" content="About | Piero Nanni" />
                <meta property="og:description" content="Discover who Piero Nanni is, his career path and what he is doing at the moment" />
                <meta property="og:image" content="" />
                <meta property="og:url" content={process.env.NEXT_PUBLIC_APP_URL + '/about'} />
            </Head>

            <Layout className="about">
                <h1>About</h1>

                <div className="d-flex">
                    <motion.section initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 0.1 }} className="about__jobs">
                        <p>London</p>
                        {/* <p><a href="tel:+447724146851" title="Phone me">+44 7724146851</a></p> */}
                        <p><Link href="/contact" title="Contact me">piero.nanni@gmail.com</Link></p>
                        <p><a href="https://github.com/morphalex90" target="_blank" rel="noreferrer" title="GitHub">github.com/morphalex90</a></p>

                        <div className="timeline">

                            {/* Jobs */}
                            <div className="timeline__jobs">
                                {jobs.length > 0 &&
                                    jobs.map((job: any) => {
                                        const marginLeft = ((job.start_date.substring(0, 4) - startYear));
                                        let endDate = null;

                                        if (job.end_date === '' || job.end_date === null) { // no finish year
                                            endDate = currentYear; // save the current year
                                        } else {
                                            endDate = job.end_date.substring(0, 4);
                                        }

                                        const width = (endDate - job.start_date.substring(0, 4) + 1);

                                        const style = { '--unit-margin-left': marginLeft, '--unit-width': width, '--tot-years': years.length } as CSSProperties
                                        return (
                                            <div key={job.id} className={job.id === activeJob ? ' --active' : ''} style={style} onClick={() => { setActiveJob(job.id) }}>{job.company.name}</div>
                                        )
                                    })
                                }
                            </div>

                            {/* Years timeline */}
                            <div className="timeline__years">
                                {years.length !== 0 &&
                                    years.map((year, key) =>
                                        <div key={key}>{year}</div>
                                    )
                                }
                            </div>

                            {/* Descriptions */}
                            <div className="timeline__descriptions">
                                {jobs.length > 0 &&
                                    jobs.map(job =>
                                        <div key={job.id} className={job.id === activeJob ? ' --active' : ''}>
                                            <h3>{job.title}</h3>
                                            <div><i><a href={job.company.url} target="_blank" rel="noreferrer">{job.company.name}</a> - {job.location} ({new Date(job.start_date).toLocaleDateString("en-GB", { year: 'numeric', month: 'long' })}{(job.end_date !== null ? ' - ' + new Date(job.end_date).toLocaleDateString("en-GB", { year: 'numeric', month: 'long' }) : '')})</i></div>
                                            <br />
                                            <div dangerouslySetInnerHTML={{ __html: job.description }} />
                                        </div>
                                    )
                                }
                            </div>
                        </div>

                    </motion.section>

                    <motion.section initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 0.3 }}>
                        <p>When I think on my early years, I have always been passionate about technology and curious about how things work.</p>

                        <p>During high school I discovered the programming world. I started with basic HTML, then continued expanding my information in technology experience through the years. During these years I learned to create entire websites not only for myself, but for others.</p>

                        <p>From 2011 to 2015, I was part of an indie team based in Bologna, Italy (<a href="https://www.blackravenproduction.com/" className="t-underline" target="_blank" rel="noreferrer" title="Visit Black Raven">Black Raven</a>). We developed small games and programs for iOS and PC. I was responsible for the design and development of the website and methods of database connection of the apps. As a secondary role, I also worked as a 3D modeler.<br />
                            The years spent as part of this team enhanced my programming skills and developed the dynamics of working with a team. Thanks to this experience, I have become the programmer I am today.</p>

                        <p>In May 2015, I was offered the opportunity to work at a web agency (<a href="https://www.magicnet.it/" className="t-underline" target="_blank" rel="noreferrer" title="Visit Magic">Magic</a>), where I was trained on how companies develop websites and e-commerce platforms. During my three years with the company, I expanded my knowledge of WordPress, Drupal, and Magento.</p>

                        <p>In June 2018, I moved to London to expand my knowledge and increase my English language skills.<br />
                            After a couple of months I joined <a href="https://purrgroup.com/" className="t-underline" target="_blank" rel="noreferrer" title="Visit Purr">Purr</a>, a web agency based in central London. Since starting, there have been many interesting projects and new ways of building websites that I had never previously explored.</p>

                        <p>In May 2022, I joined <a href="https://www.soundpickr.com/" className="t-underline" target="_blank" rel="noreferrer" title="Visit Soundpickr">Soundpickr</a> and started working with Laravel and React.</p>
                    </motion.section>
                </div>
            </Layout>
        </>
    );
}
