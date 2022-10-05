import Head from 'next/head';

import Layout from '@/components/Layouts/Layout';

export default function Contact() {
    return (
        <>
            <Head>
                <link rel="canonical" href={process.env.NEXT_PUBLIC_APP_URL + '/contact'} />
                <title>Contact | Piero Nanni</title>
                <meta name="description" content="Have questions? Need help? Feel free to ask me everything you need" />

                <meta property="og:type" content="profile" />
                <meta property="og:title" content="Contact | Piero Nanni" />
                <meta property="og:description" content="Have questions? Need help? Feel free to ask me everything you need" />
                <meta property="og:image" content="" />
                <meta property="og:url" content={process.env.NEXT_PUBLIC_APP_URL + '/contact'} />
            </Head>

            <Layout className="contact">
                <h1>Contact me</h1>

                <div className="d-flex">
                    <div>
                        <p>Thanks for wanting to get in touch! Do you have any questions? Don&#39;t esitate to contact me</p>
                        <p>While you&#39;ll be waiting for an answer, treat yourself with some good music from my personal playlist</p>
                        <p>Looking forward to hearing from you!</p>
                    </div>

                    <div>
                        <iframe allow="encrypted-media" allowtransparency="true" frameBorder="0" height="380" src="https://open.spotify.com/embed/playlist/3SjvhmS9oUWxUZehcyhYrT" width="300"></iframe>
                    </div>

                    <div>
                        Contact form!
                    </div>
                </div>

            </Layout>
        </>

    );
}