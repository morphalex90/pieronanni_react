import { useEffect, useState } from 'react'

import Layout from './../Layouts/Layout';
import { JobList } from './../Data/Jobs';

export default function About() {

    const [jobs, setJobs] = useState(JobList);
    const [yearWidth, setYearWidth] = useState(0);
    const [activeJob, setActiveJob] = useState(jobs.length);

    // Years timeline
    const startYear = 2011;
    const currentYear = new Date().getFullYear();

    const years = [];
    for (var i = startYear; i <= currentYear; i++) {
        years.push(i);
    }

    useEffect(() => {
        setYearWidth(document.getElementsByClassName('about__jobs')[0].clientWidth / (currentYear - startYear + 1));
    }, []);

    return (
        <Layout className="about">
            <h1>About me</h1>

            <div className="d-flex">
                <div className="about__jobs">
                    <p>London</p>
                    <p><a href="tel:+447724146851" title="Phone me">+44 7724146851</a></p>
                    <p><a href="/contact-me" target="_blank" title="Contact me">piero.nanni@gmail.com</a></p>
                    <p><a href="https://github.com/morphalex90" target="_blank" title="GitHub">github.com/morphalex90</a></p>

                    <div className="timeline">

                        {/* Jobs */}
                        <div className="timeline__jobs">
                            {jobs.length !== 0 &&
                                jobs.map(job => {
                                    const marginLeft = ((job.start_date.substring(0, 4) - startYear) * yearWidth) + 'px';

                                    if (job.end_date === '' || job.end_date === null) { // no finish year
                                        var end_date = currentYear; // save the current year
                                    } else {
                                        var end_date = job.end_date.substring(0, 4);
                                    }

                                    const width = (end_date - job.start_date.substring(0, 4) + 1) * yearWidth;
                                    return (
                                        <div key={job.id} style={{ marginLeft: marginLeft, width: width }} onClick={e => { setActiveJob(job.id) }}>{job.company.name}</div>
                                    )
                                })
                            }
                        </div>

                        {/* Years timeline */}
                        <div className="timeline__years">
                            {years.length !== 0 &&
                                years.map((year, key) =>
                                    <div key={key} style={{ width: yearWidth + 'px' }}>{year}</div>
                                )
                            }
                        </div>

                        {/* Descriptions */}
                        <div className="timeline__descriptions">
                            {jobs.length !== 0 &&
                                jobs.map(job => {
                                    return (
                                        <div key={job.id} className={job.id === activeJob ? ' --active' : ''}>{job.description}</div>
                                    )
                                })
                            }
                        </div>
                    </div>

                </div>

                <div>
                    <p>Since my early years, I have always been passionate about technology, and curious about how things works.</p>

                    <p>During high school I discovered the programming world: first with basic HTML, then I expanded my IT background over the years until I was able to create full web sites, for me or who was in need.</p>

                    <p>From 2011 to 2015 I was part of an indie team based in Bologna, Italy (<a href="https://www.blackravenproduction.com/" target="_blank" title="Visit Black Raven">Black Raven</a>), we developed small games and programs for Apple and PC. I was in charge of the design and the development of the website and of every methods of database connection of the apps. As a secondary role, I also worked as 3D modeller.<br />
                        The years spent as part of this team enhanced my programming knowledge and made me learn the dynamics of working as part of a team. It is thanks to this experience that I have become the programmer that I am now.</p>

                    <p>In May 2015 I've got the chance to finally work in a web agency (<a href="https://www.magicnet.it/" target="_blank" title="Visit Magic">Magic</a>) where I was trained about how companies develop websites and e-commerce platforms. Over these three years, I was able to build upon and expand my knowledge of WordPress, as well as discovering Drupal and Magento.</p>

                    <p>In June 2018 I've moved to London in order to expande my knowledge and increase my english level.<br />
                        After a couple of months I joined PurrDigital, a web agency based in central London and since then there have been lots of many interesting projects and new ways for building websites that I've never explored</p>
                </div>

            </div>
        </Layout>
    );
}
