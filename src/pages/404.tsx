import Head from 'next/head';
import { motion } from 'framer-motion';
import Layout from '@layouts/Layout';
import MainMenu from '@layouts/MainMenu';

export default function Page404() {
    return (
        <>
            <Head>
                <link rel="canonical" href={process.env.NEXT_PUBLIC_APP_URL + (typeof window !== 'undefined' ? window.location.pathname : '')} />
                <title>404 - Page not Found | Piero Nanni</title>
                <meta name="description" content="Try again, you might get lucky" />

                <meta property="og:type" content="profile" />
                <meta property="og:title" content="404 - Page not Found | Piero Nanni" />
                <meta property="og:description" content="Try again, you might get lucky" />
                <meta property="og:image" content="" />
                <meta property="og:url" content={process.env.NEXT_PUBLIC_APP_URL + (typeof window !== 'undefined' ? window.location.pathname : '')} />

                <meta name="robots" content="noindex, nofollow" />
            </Head>

            <Layout className="page-404">
                <motion.section initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 0.2 }} className="section --centered">
                    <h1>404 - Page not Found</h1>
                    <h2>Try again, you might get lucky</h2>
                    <MainMenu />
                </motion.section>
            </Layout>
        </>
    );
}
