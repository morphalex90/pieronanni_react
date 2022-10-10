import { useState } from 'react';
import Head from 'next/head';

import { motion } from 'framer-motion';

import Layout from '@layouts/Layout';

export default function Contact() {

    const [state, setState] = useState({ name: '', email: '', message: '' });
    const handleChange = event => {
        const { name, value } = event.target;
        setState({
            ...state,
            [name]: value
        });
    }

    const handlePress = (e) => {
        e.preventDefault();
        fetch('/api/send-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: state.name, email: state.email, message: state.message })
        });
    }

    return (
        <>
            <Head>
                <link rel="canonical" href={process.env.NEXT_PUBLIC_APP_URL + '/contact'} />
                <title>Contact | Piero Nanni</title>
                <meta name="description" content="Have some questions? Need help? Feel free to ask me everything you need" />

                <meta property="og:type" content="profile" />
                <meta property="og:title" content="Contact | Piero Nanni" />
                <meta property="og:description" content="Have some questions? Need help? Feel free to ask me everything you need" />
                <meta property="og:image" content="" />
                <meta property="og:url" content={process.env.NEXT_PUBLIC_APP_URL + '/contact'} />
            </Head>

            <Layout className="contact">
                <h1>Contact</h1>

                <div className="d-flex">
                    <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3 }}>
                        <p>Thanks for wanting to get in touch! Do you have any questions? Don&#39;t esitate to contact me</p>
                        <p>While you&#39;ll be waiting for an answer, treat yourself with some good music from my personal playlist</p>
                        <p>Looking forward to hearing from you!</p>
                    </motion.div>

                    <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 0.2 }}>
                        <iframe style={{ borderRadius: 12 }} src="https://open.spotify.com/embed/playlist/3SjvhmS9oUWxUZehcyhYrT?utm_source=generator&theme=1" width="100%" height="380" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                    </motion.div>

                    <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 0.4 }}>
                        <form onSubmit={handlePress}>
                            <div>
                                <label>Name <input name="name" type="text" onChange={handleChange} required /></label>
                            </div>

                            <div>
                                <label>Email <input name="email" type="email" onChange={handleChange} required /></label>
                            </div>

                            <div>
                                <label>Message <textarea name="message" onChange={handleChange} required></textarea></label>
                            </div>

                            <button className="button">Send</button>
                        </form>
                    </motion.div>
                </div>

            </Layout>
        </>
    );
}