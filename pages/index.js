import Head from 'next/head';

import Layout from '@/components/Layouts/Layout';
import Synt from '@/components/Layouts/Synt';

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

            <Synt />
            <Layout className="homepage">

                <section className="section --centered">
                    <h1>{'<PieroNanni/>'}</h1>
                    <p>You can do this, I believe in you.</p>
                </section>

            </Layout>
        </>
    );
}

export default Homepage;