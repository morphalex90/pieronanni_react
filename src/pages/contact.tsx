import { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';

import Layout from '@layouts/Layout';
// import Songs from '@layouts/Songs';

export default function Contact() {

    const [isLoading, setIsLoading] = useState(false);
    const [contact, setContact] = useState({ name: '', email: '', message: '', privacy: false });
    const [response, setResponse] = useState('');

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setContact({ ...contact, [name]: value });
    }

    const handlePress = (e: any) => {
        e.preventDefault();
        setIsLoading(true);

        fetch('/api/send-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: contact.name, email: contact.email, message: contact.message })
        })
            .then(back => back.json())
            .then(data => {
                // console.log(data);
                setContact({ name: '', email: '', message: '', privacy: false });
                setResponse(data.success === true ? 'Thank you! I\'ll get back to you shortly' : 'There was an error, please try again');
                setIsLoading(false);
            })
            .catch(error => {
                // console.error(error.toString());
                setResponse('There was an error, please try again');
                setIsLoading(false);
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
                        {/* <p>Thanks for wanting to get in touch! Do you have any questions? Don&#39;t esitate to contact me</p> */}
                        <p>While you&#39;ll be waiting for an answer, treat yourself with some good music from my personal playlist</p>
                        <p>Looking forward to hearing from you and have a wonderful {new Date().toLocaleDateString('en-GB', { weekday: 'long' }).toLowerCase()}!</p>
                    </motion.div>

                    <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 0.2 }}>
                        <iframe style={{ borderRadius: 12 }} src="https://open.spotify.com/embed/playlist/3SjvhmS9oUWxUZehcyhYrT?utm_source=generator&theme=1" width="100%" height="380" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" title="Spotify"></iframe>
                        {/* <Songs /> */}
                    </motion.div>

                    <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 0.4 }}>
                        <form className="form" onSubmit={handlePress}>
                            <div className="d-flex">
                                <div className="form__field">
                                    <label htmlFor="field_name">Name</label>
                                    <input name="name" id="field_name" type="text" onChange={handleChange} value={contact.name} placeholder="John Doe" required />
                                </div>

                                <div className="form__field">
                                    <label htmlFor="field_email">Email</label>
                                    <input name="email" id="field_email" type="email" onChange={handleChange} value={contact.email} placeholder="john@doe.com" required />
                                </div>
                            </div>

                            <div className="form__field">
                                <label htmlFor="field_message">Message</label>
                                <textarea name="message" id="field_message" onChange={handleChange} value={contact.message} placeholder="Write me anything you want" required></textarea>
                            </div>

                            <div className="d-flex">
                                <div>
                                    <label htmlFor="privacy">
                                        <input name="privacy" id="privacy" type="checkbox" onChange={handleChange} defaultChecked={contact.privacy} required />
                                        <span> Privacy</span>
                                    </label>
                                </div>

                                <button className="button" type="submit" disabled={isLoading}>{isLoading ? 'Sending' : 'Send'}</button>
                            </div>
                        </form>

                        {response &&
                            <div style={{ marginTop: 20 }}>{response}</div>
                        }
                    </motion.div>
                </div>

            </Layout >
        </>
    );
}