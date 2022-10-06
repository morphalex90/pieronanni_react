import Head from 'next/head';

import Layout from '@layouts/Layout';

import { motion } from 'framer-motion';

function Homepage() {
    return (
        <>
            <Head>
                <link rel="canonical" href={process.env.NEXT_PUBLIC_APP_URL} />
                <title>Piero Nanni</title>
                <meta name="description" content="PHP Developer in love with Drupal, London based" />

                <meta property="og:type" content="profile" />
                <meta property="og:title" content="Piero Nanni" />
                <meta property="og:description" content="PHP Developer in love with Drupal, London based" />
                <meta property="og:image" content="" />
                <meta property="og:url" content={process.env.NEXT_PUBLIC_APP_URL} />
            </Head>

            <Layout className="homepage">

                <motion.section initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 0.2 }} className="section --centered" style={{ height: 'calc(100vh - 73px - 26px)' }}>
                    <h1>{'<PieroNanni/>'}</h1>
                    <h2>Web Developer</h2>
                </motion.section>

            </Layout>
        </>
    );
}

export default Homepage;